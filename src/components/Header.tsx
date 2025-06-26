import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre-mim', label: 'Sobre Mim' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/consultorio', label: 'O Consultório' },
    { href: '/contato', label: 'Contato' },
    { href: '/duvidas-frequentes', label: 'Dúvidas Frequentes' },
  ];

  const isActive = (href: string) => location.pathname === href;

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
              <p className="text-xs font-semibold text-[#fdb4be]">Pediatra - CRM-SP 140.995</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold transition-colors px-2 py-1 rounded 
                  ${item.href === '/' && isActive(item.href) ? 'bg-[#fdb4be] text-white shadow' : ''}
                  ${isActive(item.href) && item.href !== '/' ? 'text-[#83b2ac]' : ''}
                  ${!isActive(item.href) ? 'text-[#83b2ac]' : ''}
                  hover:text-[#fdb4be] hover:bg-[#83b2ac]/10`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#fdb4be] hover:bg-[#83b2ac] text-white font-bold">
              <a 
                href="https://wa.me/5511994077447" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar Consulta
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
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                <a 
                  href="https://wa.me/5511994077447" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
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
