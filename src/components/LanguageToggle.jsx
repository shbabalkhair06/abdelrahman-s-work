import { useContext } from 'react';
import { LanguageContext } from '../App';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 font-bold text-sm flex items-center gap-2"
      aria-label="Toggle language"
      title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      {language === 'ar' ? (
        <>
          <span>EN</span>
          <span>🇬🇧</span>
        </>
      ) : (
        <>
          <span>🇸🇦</span>
          <span>ع</span>
        </>
      )}
    </button>
  );
};

export default LanguageToggle;