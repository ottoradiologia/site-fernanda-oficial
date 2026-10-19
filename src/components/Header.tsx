import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  // Menu enxuto: 5 itens, sem ícones. Contato fica no botão de agendamento e no rodapé.
  const menuItems = [
    { href: '/sobre-mim', label: t.common.header.about },
    { href: '/servicos', label: t.common.header.atendimento || t.common.header.services, hasDropdown: true },
    { href: '/vacinacao', label: t.common.header.vaccination },
    { href: '/consultorio', label: t.common.header.clinic },
    { href: '/duvidas-frequentes', label: t.common.header.faq },
  ];

  const servicesDropdown = [
    { href: '/servicos', label: t.common.header.pediatricConsultation || 'Consulta Pediátrica' },
    { href: '/mil-cuidados', label: t.common.header.milCuidados || 'Programa Mil Cuidados' },
    { href: '/consulta-pre-natal', label: t.common.header.prenatalConsultation || 'Consulta Pré-Natal' },
    { href: '/pneumologia', label: t.common.header.pneumopediatria || 'Pneumopediatria' },
    { href: '/consultoria-sono', label: t.common.header.sleepConsulting || 'Consultoria do Sono' },
    { href: '/servicos', label: t.common.header.viewAllServices || 'Ver Todos os Serviços' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isServicesActive = () => servicesDropdown.some((item) => location.pathname === item.href);

  const navLinkClass = (active: boolean) =>
    `relative whitespace-nowrap py-1.5 text-sm font-medium text-brand-ink transition-colors hover:text-brand-tealDeep after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-brand-rose after:transition-transform after:duration-200 hover:after:scale-x-100 ${
      active ? 'after:scale-x-100' : 'after:scale-x-0'
    }`;

  const LanguageSwitch = () => (
    <div className="flex items-center gap-1 text-xs font-semibold tracking-wide" role="group" aria-label="Idioma">
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        aria-pressed={language === 'pt'}
        className={language === 'pt' ? 'text-brand-tealDeep' : 'text-brand-muted hover:text-brand-tealDeep'}
      >
        PT
      </button>
      <span className="text-brand-line" aria-hidden="true">·</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={language === 'en' ? 'text-brand-tealDeep' : 'text-brand-muted hover:text-brand-tealDeep'}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      {/* O botão flutuante de WhatsApp do Phonetrack (index.html) já cobre o celular; sem barra fixa própria para não sobrepor */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-brand-paper/95 backdrop-blur">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex h-16 items-center justify-between gap-6 lg:h-[78px]">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/hero/logo-k.webp"
                alt="Logotipo Dra. Fernanda Kruger"
                width={272}
                height={300}
                className="h-11 w-auto flex-shrink-0 lg:h-[52px]"
              />
              <span className="leading-tight">
                <span className="font-display-soft block whitespace-nowrap text-lg text-brand-tealDeep lg:text-[21px]">
                  Dra. Fernanda Kruger
                </span>
                <span className="block whitespace-nowrap text-[10.5px] uppercase tracking-[0.14em] text-brand-muted">
                  Pediatra · CRM-SP 140.995 · RQE 37669
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
              {menuItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`${navLinkClass(isServicesActive())} flex items-center gap-1`}
                      aria-expanded={isServicesOpen}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 top-full z-50 w-60 pt-2">
                        <div className="rounded-2xl border border-brand-line bg-white py-2 shadow-lg">
                          {servicesDropdown.map((subItem) => (
                            <Link
                              key={subItem.href + subItem.label}
                              to={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors hover:bg-brand-sage hover:text-brand-tealDeep ${
                                isActive(subItem.href) ? 'text-brand-tealDeep' : 'text-brand-ink'
                              }`}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.href} to={item.href} className={navLinkClass(isActive(item.href))}>
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden items-center gap-5 lg:flex">
              <LanguageSwitch />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full bg-brand-rose px-5 py-2.5 text-sm font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover"
              >
                {t.common.header.scheduleAppointment}
              </a>
            </div>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-line text-brand-ink lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="border-t border-brand-line py-4 lg:hidden">
              <nav className="flex flex-col gap-1" aria-label="Menu principal">
                <Link
                  to="/"
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${isActive('/') ? 'text-brand-tealDeep' : 'text-brand-ink'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.common.header.home}
                </Link>
                {menuItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.href}>
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-base font-medium text-brand-ink"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        aria-expanded={isServicesOpen}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="ml-3 border-l-2 border-brand-rose/60 pl-3">
                          {servicesDropdown.map((subItem) => (
                            <Link
                              key={subItem.href + subItem.label}
                              to={subItem.href}
                              className={`block rounded-lg px-3 py-2 text-sm ${isActive(subItem.href) ? 'text-brand-tealDeep' : 'text-brand-muted'}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
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
                      className={`rounded-lg px-3 py-2.5 text-base font-medium ${isActive(item.href) ? 'text-brand-tealDeep' : 'text-brand-ink'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  to="/contato"
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${isActive('/contato') ? 'text-brand-tealDeep' : 'text-brand-ink'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.common.header.contact}
                </Link>
                <div className="px-3 pt-3">
                  <LanguageSwitch />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

    </>
  );
};

export default Header;
