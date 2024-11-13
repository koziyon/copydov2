// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const connectToDatabase = require('./utils/connectToDatabase'); // Импорт функции подключения к БД
const authRoutes = require('./routes/authRoutes'); // Импорт роутов аутентификации

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
connectToDatabase(); // Вызов функции для подключения к БД

// Использование роутов
app.use('/api/auth', authRoutes); // Подключение роутов с префиксом /api/auth
app.use('/api/user', userRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
