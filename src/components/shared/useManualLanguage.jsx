import { useState, useEffect } from 'react';

const MANUAL_LANGUAGE_KEY = 'retailos_manual_language';

export const useManualLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem(MANUAL_LANGUAGE_KEY);
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem(MANUAL_LANGUAGE_KEY, newLanguage);
  };

  return [language, updateLanguage];
};

export default useManualLanguage;