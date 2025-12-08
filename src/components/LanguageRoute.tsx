import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/translations';

interface LanguageRouteProps {
  children: React.ReactNode;
}

const LanguageRoute: React.FC<LanguageRouteProps> = ({ children }) => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const lastPathRef = useRef<string>('');

  useEffect(() => {
    // Detecta o idioma da URL e sincroniza com o contexto
    const path = location.pathname;
    
    // Só atualiza se o caminho mudou
    if (path !== lastPathRef.current) {
      lastPathRef.current = path;
      const urlLanguage: Language = (path.startsWith('/en/') || path === '/en') ? 'en' : 'pt';
      
      // Só atualiza se o idioma da URL for diferente do idioma atual
      if (urlLanguage !== language) {
        setLanguage(urlLanguage);
      }
    }
  }, [location.pathname, language, setLanguage]);

  return <>{children}</>;
};

export default LanguageRoute;

