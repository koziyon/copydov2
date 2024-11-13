// formHandlers.js
import axios from 'axios';

export const handleLogin = (values) => {
    console.log('Login data:', values);
    // Здесь может быть код для отправки данных на сервер
  };
  
// Обработчик регистрации
export const handleRegister = async (values, recaptchaToken) => {
  try {
    // Подготовка данных для отправки на сервер
    const data = { ...values, recaptchaToken };
    
    // Запрос к API регистрации
    const response = await axios.post('/api/auth/register', data);

    if (response.data.success) {
      alert('Регистрация прошла успешно!');
      // Здесь можно перенаправить пользователя, например, на страницу входа
    } else {
      alert(response.data.message || 'Ошибка при регистрации');
    }
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    alert('Произошла ошибка. Попробуйте снова позже.');
  }
};