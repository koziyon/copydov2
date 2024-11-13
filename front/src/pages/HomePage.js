// src/pages/HomePage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">{t('welcome_message')}</h1>
        <p className="hero-description">{t('intro_description')}</p>
        <Link to="/register" className="hero-cta-button">
          {t('get_started')}
        </Link>
      </div>

      {/* Раздел с категориями услуг */}
      <section className="services-section">
        <h2 className="services-title">{t('our_services')}</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>{t('copy_services')}</h3>
            <p>{t('copy_services_description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('notary_services')}</h3>
            <p>{t('notary_services_description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('translation_services')}</h3>
            <p>{t('translation_services_description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('form_filling_services')}</h3>
            <p>{t('form_filling_services_description')}</p>
          </div>
          <div className="service-card">
            <h3>{t('ocr_services')}</h3>
            <p>{t('ocr_services_description')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
