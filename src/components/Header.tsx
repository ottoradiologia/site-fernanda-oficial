import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.consultation);
    return `https://wa.me/5511994077447?text=${message}`;
  };

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  const menuItems = [
    { href: '/', label: t.common.header.home },
    { href: '/sobre-mim', label: t.common.header.about },
    { href: '/servicos', label: t.common.header.services },
    { href: '/vacinacao', label: t.common.header.vaccination },
    { href: '/consultorio', label: t.common.header.clinic },
    { href: '/contato', label: t.common.header.contact },
    { href: '/duvidas-frequentes', label: t.common.header.faq },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-[#f0f4e3] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to={getLocalizedPath('/')} className="flex items-center space-x-1 sm:space-x-2 min-w-0 flex-shrink">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <img 
                src="/images/hero/logo-reduzido.png" 
                alt="Logo Dra. Fernanda" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter invert brightness-0"
              />
            </div>
            <div className="hidden sm:block min-w-0">
              <span className="font-bold text-[#83b2ac] text-sm sm:text-lg block truncate">Dra. Fernanda Kruger</span>
              <p className="text-xs font-semibold text-[#fdb4be] hidden md:block">Pediatra - CRM-SP 140.995 | RQE 37669</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={getLocalizedPath(item.href)}
                className={`text-xs xl:text-sm font-semibold transition-colors px-1 xl:px-2 py-1 rounded whitespace-nowrap
                  ${item.href === '/' && isActive(item.href) ? 'bg-[#fdb4be] text-white shadow' : ''}
                  ${isActive(item.href) && item.href !== '/' ? 'text-[#83b2ac]' : ''}
                  ${!isActive(item.href) ? 'text-[#83b2ac]' : ''}
                  hover:text-[#fdb4be] hover:bg-[#83b2ac]/10`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector and CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <LanguageSelector />
            <Button asChild className="bg-[#fdb4be] hover:bg-[#83b2ac] text-white font-bold text-xs xl:text-sm px-3 xl:px-4">
              <a 
                href={getWhatsAppUrl()}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t.common.header.scheduleAppointment}
              </a>
            </Button>
          </div>

          {/* Mobile: Language Selector and Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <button
              className="p-2 hover:bg-[#83b2ac]/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} className="text-[#83b2ac]" /> : <Menu size={20} className="text-[#83b2ac]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#83b2ac]/20">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={getLocalizedPath(item.href)}
                  className={`text-base font-medium transition-colors px-4 py-2 rounded-lg ${
                    isActive(item.href) 
                      ? 'text-white bg-[#83b2ac]' 
                      : 'text-gray-700 hover:bg-[#83b2ac]/10 hover:text-[#83b2ac]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#83b2ac]/20">
                <Button 
                  asChild 
                  className="bg-[#fdb4be] hover:bg-[#83b2ac] text-white font-bold w-full"
                >
                  <a 
                    href={getWhatsAppUrl()}
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.common.header.scheduleAppointment}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
