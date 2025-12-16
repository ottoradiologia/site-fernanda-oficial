import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from '@/types/translations';
import { pt } from '@/translations/pt';
import { en } from '@/translations/en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  pt,
  en,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Tenta recuperar do localStorage, ou usa 'pt' como padrão
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('language') as Language;
        return saved && (saved === 'pt' || saved === 'en') ? saved : 'pt';
      }
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
    }
    return 'pt';
  });

  useEffect(() => {
    // Salva no localStorage quando o idioma muda
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', language);
      }
    } catch (error) {
      console.warn('Error saving to localStorage:', error);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};




