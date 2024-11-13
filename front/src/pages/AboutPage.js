// src/pages/AboutPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaHandshake, FaBriefcase, FaCog, FaSearch, FaFileAlt, FaClock } from 'react-icons/fa';
import './AboutPage.css';

function AboutPage() {
  const { t } = useTranslation(); // Хук для перевода

  return (
    <div className="about-container">
      <main>
        <section className="hero-section">
          <h1 className="hero-title">{t('about_title')}</h1>
          <p className="hero-description">{t('about_description')}</p>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">{t('benefits_title')}</h2>
          <div className="benefit-cards">
            <div className="benefit-card">
              <FaUsers className="icon" />
              <h3>{t('user_benefits_title')}</h3>
              <p>{t('user_benefits_description')}</p>
            </div>
            <div className="benefit-card">
              <FaHandshake className="icon" />
              <h3>{t('provider_benefits_title')}</h3>
              <p>{t('provider_benefits_description')}</p>
            </div>
            <div className="benefit-card">
              <FaBriefcase className="icon" />
              <h3>{t('business_benefits_title')}</h3>
              <p>{t('business_benefits_description')}</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">{t('features_title')}</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <FaFileAlt className="icon" />
              <h3>{t('feature_form_filling_title')}</h3>
              <p>{t('feature_form_filling_description')}</p>
            </div>
            <div className="feature-card">
              <FaSearch className="icon" />
              <h3>{t('feature_service_search_title')}</h3>
              <p>{t('feature_service_search_description')}</p>
            </div>
            <div className="feature-card">
              <FaHandshake className="icon" />
              <h3>{t('feature_online_services_title')}</h3>
              <p>{t('feature_online_services_description')}</p>
            </div>
            <div className="feature-card">
              <FaClock className="icon" />
              <h3>{t('feature_time_saving_title')}</h3>
              <p>{t('feature_time_saving_description')}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
