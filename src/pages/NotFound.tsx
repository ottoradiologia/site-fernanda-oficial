import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t.pages.notfound.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{t.pages.notfound.message}</p>
        <Link to={getLocalizedPath('/')} className="text-blue-500 hover:text-blue-700 underline">
          {t.pages.notfound.returnHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
