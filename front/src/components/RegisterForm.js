import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { registerValidationSchema } from '../utils/validationSchemas';
import { handleRegister } from '../utils/formHandlers';
import './AuthForm.css';
import { FaUserPlus, FaRegFileAlt, FaRegHandshake } from 'react-icons/fa';

const RegisterForm = () => {
  const { t } = useTranslation();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="full-page-container">
      <div className="auth-page-container">
        <div className="info-column">
          <h2>{t('welcome')}</h2>
          <p>{t('manage_documents')}</p>
          <ul className="feature-list">
            <li><FaUserPlus /> {t('features.feature_1')}</li>
            <li><FaRegFileAlt /> {t('features.feature_2')}</li>
            <li><FaRegHandshake /> {t('features.feature_3')}</li>
          </ul>
        </div>
        <div className="auth-form-container">
          <h2>{t('register')}</h2>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={registerValidationSchema}
            onSubmit={(values) => {
              if (!recaptchaToken) {
                alert('Пожалуйста, пройдите reCAPTCHA');
                return;
              }
              handleRegister(values, recaptchaToken);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="auth-form">
                <div className="form-group">
                  <Field type="text" name="firstName" placeholder={t('first_name')} />
                  <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <Field type="text" name="lastName" placeholder={t('last_name')} />
                  <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <Field type="text" name="phone" placeholder={t('phone')} />
                  <ErrorMessage name="phone" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <Field type="email" name="email" placeholder={t('email')} />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <Field type="password" name="password" placeholder={t('password')} />
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <Field type="password" name="confirmPassword" placeholder={t('confirm_password')} />
                  <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                </div>
                {/* reCAPTCHA v2 */}
                <ReCAPTCHA
                  sitekey="6LceG8AUAAAAAM-zmwzWVLPpcKl8B_XpzuM-lhnC" // Убедитесь, что этот ключ правильный для v2
                  onChange={onRecaptchaChange}
                />
                <button type="submit" disabled={isSubmitting}>
                  {t('register')}
                </button>
              </Form>
            )}
          </Formik>
          <p className="auth-link">
            {t('already_have_account')} <Link to="/login">{t('login')}</Link>
          </p>
        </div>
      </div>   
    </div>
  );
};

export default RegisterForm;
