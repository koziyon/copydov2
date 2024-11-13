import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa'; // Импортируем иконку глобуса из библиотеки react-icons
import './LanguageDropdown.css';

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Закрыть меню после выбора языка
  };

  return (
    <div className="language-dropdown">
      <button onClick={toggleDropdown} className="language-button">
        <FaGlobe className="globe-icon" /> {/* Иконка глобуса */}
        {i18n.language.toUpperCase()}
        <span className="dropdown-icon">▼</span>
      </button>
      {isOpen && (
        <div className="language-options">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
