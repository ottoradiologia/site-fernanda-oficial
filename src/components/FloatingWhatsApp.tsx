import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.consultation);
    return `https://wa.me/5511994077447?text=${message}`;
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow group"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 text-sm font-semibold">
        {t.common.buttons.scheduleByWhatsApp || "Agendar Consulta"}
      </span>
    </a>
  );
};

export default FloatingWhatsApp;

