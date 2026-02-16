import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Home, User, Stethoscope, Syringe, Building2, Phone, HelpCircle, Star, Wind, Moon, Baby, LayoutGrid } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";

  const menuItems = [
    { href: '/', label: t.common.header.home, icon: Home },
    { href: '/sobre-mim', label: t.common.header.about, icon: User },
    { href: '/servicos', label: t.common.header.atendimento || t.common.header.services, hasDropdown: true, icon: Stethoscope },
    { href: '/vacinacao', label: t.common.header.vaccination, icon: Syringe },
    { href: '/consultorio', label: t.common.header.clinic, icon: Building2 },
    { href: '/contato', label: t.common.header.contact, icon: Phone },
    { href: '/duvidas-frequentes', label: t.common.header.faq, icon: HelpCircle },
  ];

  const servicesDropdown = [
    { href: '/mil-cuidados', label: t.common.header.milCuidados || 'Programa Mil Cuidados', icon: Star },
    { href: '/pneumologia', label: t.common.header.pneumopediatria || 'Pneumopediatria', icon: Wind },
    { href: '/consultoria-sono', label: t.common.header.sleepConsulting || 'Consultoria do Sono', icon: Moon },
    { href: '/consulta-pre-natal', label: t.common.header.prenatalConsultation || 'Consulta Pré-Natal', icon: Baby },
    { href: '/servicos', label: t.common.header.viewAllServices || 'Ver Todos os Serviços', icon: LayoutGrid },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isServicesActive = () => servicesDropdown.some(item => location.pathname === item.href);

  return (
    <header className="bg-[#f0f4e3] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <img 
                src="/images/hero/logo-reduzido.png" 
                alt="Logo Dra. Fernanda" 
                className="w-10 h-10 object-contain filter invert brightness-0"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-[#83b2ac] text-lg">Dra. Fernanda Kruger</span>
              <p className="text-xs font-semibold text-[#fdb4be]">Pediatra - CRM-SP 140.995 | RQE 37669</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-4">
            {menuItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`text-xs font-semibold transition-colors px-1 py-1 rounded flex items-center gap-1
                      ${isServicesActive() ? 'text-[#83b2ac]' : 'text-[#83b2ac]'}
                      hover:text-[#fdb4be] hover:bg-[#83b2ac]/10`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border py-2 z-50">
                      {servicesDropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors
                            ${isActive(subItem.href) ? 'text-[#fdb4be] bg-[#83b2ac]/10' : 'text-gray-700'}
                            hover:text-[#fdb4be] hover:bg-[#83b2ac]/10`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <subItem.icon className={`w-4 h-4 flex-shrink-0 ${subItem.href === '/mil-cuidados' ? 'text-amber-500 fill-amber-500' : ''}`} />
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-1 text-xs font-semibold transition-colors px-1 py-1 rounded
                    ${item.href === '/' && isActive(item.href) ? 'bg-[#fdb4be] text-white shadow' : ''}
                    ${isActive(item.href) && item.href !== '/' ? 'text-[#83b2ac]' : ''}
                    ${!isActive(item.href) ? 'text-[#83b2ac]' : ''}
                    hover:text-[#fdb4be] hover:bg-[#83b2ac]/10`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button and Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Button asChild size="sm" className="bg-[#fdb4be] hover:bg-[#83b2ac] text-white font-bold text-xs">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t.common.header.scheduleAppointment}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.href} className="space-y-2">
                    <button
                      className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                        isServicesActive() ? 'text-primary' : 'text-gray-700'
                      }`}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-2 border-l-2 border-[#83b2ac]/30">
                        {servicesDropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={`flex items-center gap-2 text-sm transition-colors ${
                              isActive(subItem.href) ? 'text-[#fdb4be]' : 'text-gray-600'
                            } hover:text-[#fdb4be]`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            <subItem.icon className={`w-4 h-4 ${subItem.href === '/mil-cuidados' ? 'text-amber-500 fill-amber-500' : ''}`} />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? 'text-primary' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-gray-200">
                <LanguageSelector />
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t.common.header.scheduleAppointment}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
