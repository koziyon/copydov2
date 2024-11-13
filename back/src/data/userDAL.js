// src/data/userDAL.js
const User = require('../models/User');

// Найти пользователя по ID
const findUserById = async (userId) => {
  return await User.findById(userId).select('-password');
};

// Найти пользователя по email
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Создать нового пользователя
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// Обновить пользователя по ID
const updateUserById = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

// Удалить пользователя по ID
const deleteUserById = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = {
  findUserById,
  findUserByEmail,
  createUser,
  updateUserById,
  deleteUserById,
};
