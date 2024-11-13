const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise');

// Настройка reCAPTCHA Enterprise client
const client = new RecaptchaEnterpriseServiceClient();
const projectID = 'copydo-1731431877165';
const siteKey = '6LceG8AUAAAAAM-zmwzWVLPpcKl8B_XpzuM-lhnC'; // Ваш ключ сайта для reCAPTCHA v2

const verifyRecaptchaToken = async (token) => {
  const projectPath = client.projectPath(projectID);
  const request = {
    assessment: {
      event: {
        token,
        siteKey
      }
    },
    parent: projectPath,
  };

  const [response] = await client.createAssessment(request);
  if (response.tokenProperties.valid && response.riskAnalysis.score > 0.5) {
    return true;
  }
  return false;
};

// Логин
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Пользователь не найден' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Неверный пароль' });

    // Генерация токена
    const token = generateToken(user._id);

    res.json({ message: 'Авторизация успешна', token, user: { id: user._id, email: user.email, confirmed: user.confirmed } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password, recaptchaToken } = req.body;

    // Проверка reCAPTCHA
    const isRecaptchaValid = await verifyRecaptchaToken(recaptchaToken);
    if (!isRecaptchaValid) {
      return res.status(400).json({ success: false, message: 'reCAPTCHA не пройден' });
    }

    // Проверка на существование пользователя
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Пользователь уже существует' });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const newUser = new User({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ success: true, message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
};

module.exports = { registerUser };
