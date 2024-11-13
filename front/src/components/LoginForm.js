// src/components/LoginForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loginValidationSchema } from '../utils/validationSchemas';
import { handleLogin } from '../utils/formHandlers';
import './AuthForm.css';
import { FaLock, FaFileAlt, FaHandshake } from 'react-icons/fa';

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className="full-page-container">
     <div className="auth-page-container">
      <div className="info-column">
        <h2>{t('login_welcome')}</h2>
        <p>{t('login_info')}</p>
        <ul className="feature-list">
          <li><FaFileAlt /> {t('login_features.feature_1')}</li>
          <li><FaHandshake /> {t('login_features.feature_2')}</li>
          <li><FaLock /> {t('login_features.feature_3')}</li>
        </ul>
      </div>
      <div className="auth-form-container">
        <h2>{t('login')}</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="auth-form">
              <div className="form-group">
                <Field type="email" name="email" placeholder={t('email')} />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder={t('password')} />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {t('login')}
              </button>
            </Form>
          )}
        </Formik>
        <p className="auth-link">
          {t('no_account')} <Link to="/register">{t('signup')}</Link>
        </p>
      </div>
    </div>
    </div>

  );
};

export default LoginForm;
