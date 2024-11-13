import * as Yup from 'yup';
import i18n from '../i18n';

// Валидация для email
export const emailValidation = Yup.string()
  .email(() => i18n.t('validation.email.invalid'))
  .required(() => i18n.t('validation.email.required'));

// Валидация для пароля
export const passwordValidation = Yup.string()
  .min(6, () => i18n.t('validation.password.min'))
  .matches(/^[a-zA-Z0-9!@#$%^&*()_+=-]*$/, () => i18n.t('validation.password.pattern'))
  .required(() => i18n.t('validation.password.required'));

// Валидация для имени
export const firstNameValidation = Yup.string()
  .required(() => i18n.t('validation.first_name.required'));

// Валидация для фамилии
export const lastNameValidation = Yup.string()
  .required(() => i18n.t('validation.last_name.required'));

// Валидация для номера телефона
export const phoneValidation = Yup.string()
  .matches(/^[0-9]{10,15}$/, () => i18n.t('validation.phone.invalid'))
  .required(() => i18n.t('validation.phone.required'));

// Общая схема валидации для регистрации
export const registerValidationSchema = Yup.object({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  phone: phoneValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], () => i18n.t('validation.password.match'))
    .required(() => i18n.t('validation.password.required')),
});

// Общие схемы для форм
export const loginValidationSchema = Yup.object({
    email: emailValidation,
    password: passwordValidation,
  });
