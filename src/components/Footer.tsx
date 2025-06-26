import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Informações */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <img 
                  src="/images/hero/logo-reduzido.png" 
                  alt="Logo Dra. Fernanda" 
                  className="w-7 h-7 object-contain filter invert brightness-0"
                />
              </div>
              <div>
                <span className="font-semibold">Dra. Fernanda Kruger</span>
                <p className="text-sm text-gray-400">Pediatra - CRM-SP 140.995</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Cuidando do bem-estar do seu maior tesouro com amor, ciência e acolhimento.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/sobre-mim" className="text-gray-300 hover:text-primary transition-colors">Sobre Mim</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/consultorio" className="text-gray-300 hover:text-primary transition-colors">O Consultório</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/duvidas-frequentes" className="text-gray-300 hover:text-primary transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📱 WhatsApp: (11) 99407-7447</p>
              <p>✉️ fernandafavalikruger@gmail.com</p>
              <p>📍 Rua Afonso de Freitas, nº 59, sala 94</p>
              <p>Paraíso, São Paulo - SP</p>
              <p>CEP 04.006-050</p>
              <p>
                <a href="https://www.instagram.com/drafernandakruger/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#fdb4be] transition-colors">
                  <Instagram size={22} />
                  <span className="font-semibold">@drafernandakruger</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Dra. Fernanda Kruger. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
