import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.library': 'Library',
    'nav.courses': 'Courses',
    'nav.blog': 'Blog',
    'nav.portal': 'Client Portal',
    'nav.contact': 'Contact Us',
    'hero.title': 'Premium Accounting & HR Solutions',
    'hero.subtitle': 'Professional consulting services for finance, tax, and human resources in Egypt.',
    'hero.cta.book': 'Book Consultation',
    'hero.cta.explore': 'Explore Resources',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.services': 'خدماتنا',
    'nav.library': 'المكتبة الرقمية',
    'nav.courses': 'الدورات',
    'nav.blog': 'المدونة',
    'nav.portal': 'بوابة العملاء',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'حلول محاسبية وموارد بشرية متميزة',
    'hero.subtitle': 'خدمات استشارية احترافية في التمويل والضرائب والموارد البشرية في مصر.',
    'hero.cta.book': 'احجز استشارة',
    'hero.cta.explore': 'استكشف الموارد',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string) => translations[lang][key] || key;
  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
