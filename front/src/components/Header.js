// src/components/Header.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown'; // Компонент выбора языка
import './Header.css';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="project-name">
          <h1>CopyDo</h1>
        </Link>

        <nav className="header-nav">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>{t('about')}</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>{t('services')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>{t('contact')}</NavLink>
          <NavLink to="/support" className={({ isActive }) => (isActive ? 'active' : '')}>{t('support')}</NavLink>
        </nav>

        <div className="header-search">
          <div className="search-container">
            <input type="text" placeholder={t('search_placeholder')} />
            <button className="header-search-btn">{t('search')}</button>
          </div>
        </div>

        <div className="header-actions">
          <Link to="/login" className="login-button">{t('login')}</Link>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;

