import { Button } from '@/components/ui/button';
import { Moon, Stethoscope, Syringe, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type HighlightType = 'sleep' | 'pneumo' | 'vaccine' | 'seasonal';

interface ServiceHighlightProps {
  type?: HighlightType;
  dismissible?: boolean;
}

const ServiceHighlight = ({ type = 'seasonal', dismissible = true }: ServiceHighlightProps) => {
  const { language } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(false);
  
  // Função para determinar o highlight baseado no tipo
  const getHighlightType = (t: HighlightType): 'sleep' | 'pneumo' | 'vaccine' => {
    if (t === 'seasonal') {
      const month = new Date().getMonth();
      // Winter months (May-Aug in Brazil) = respiratory focus
      if (month >= 4 && month <= 7) {
        return 'pneumo';
      }
      // Back to school (Jan-Feb) = vaccines
      else if (month <= 1) {
        return 'vaccine';
      }
      // Rest of the year = sleep consulting
      else {
        return 'sleep';
      }
    }
    return t as 'sleep' | 'pneumo' | 'vaccine';
  };
  
  const [currentHighlight, setCurrentHighlight] = useState<'sleep' | 'pneumo' | 'vaccine'>(() => getHighlightType(type));
  
  // Seasonal logic: determine what to highlight based on the month
  useEffect(() => {
    const newHighlight = getHighlightType(type);
    setCurrentHighlight(newHighlight);
  }, [type]);

  // Check localStorage to see if user dismissed this highlight today
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const dismissedDate = localStorage.getItem('highlight_dismissed');
        if (dismissedDate) {
          const today = new Date().toDateString();
          if (dismissedDate === today) {
            setIsDismissed(true);
          } else {
            localStorage.removeItem('highlight_dismissed');
          }
        }
      }
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    if (dismissible) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('highlight_dismissed', new Date().toDateString());
        }
      } catch (error) {
        console.warn('Error saving to localStorage:', error);
      }
    }
  };

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/5511994077447?text=${encodeURIComponent(message)}`;
  };

  const highlights = language === 'pt' ? {
    sleep: {
      icon: Moon,
      badge: "Consultoria do Sono",
      title: "Noites Tranquilas para Toda a Família",
      description: "Seu bebê não dorme bem? Agende uma consultoria do sono e transforme as noites da sua família.",
      ctaText: "Agendar Consultoria",
      ctaLink: getWhatsAppUrl("Olá! Gostaria de agendar uma consultoria do sono para meu filho(a)."),
      learnMoreLink: "/consultoria-do-sono",
      bgColor: "from-[#1a1a2e] to-[#16213e]",
      accentColor: "text-yellow-300",
      isExternal: true
    },
    pneumo: {
      icon: Stethoscope,
      badge: "Pneumopediatria",
      title: "Cuidado Especializado para o Sistema Respiratório",
      description: "Chiado no peito, bronquite ou asma? Como pneumopediatra, ofereço tratamento especializado para seu filho.",
      ctaText: "Agendar Consulta",
      ctaLink: getWhatsAppUrl("Olá! Gostaria de agendar uma consulta de pneumopediatria para meu filho(a)."),
      learnMoreLink: "/pneumopediatria",
      bgColor: "from-[#83b2ac] to-[#5a8a84]",
      accentColor: "text-white",
      isExternal: true
    },
    vaccine: {
      icon: Syringe,
      badge: "Vacinação",
      title: "Proteja Quem Você Ama",
      description: "Vacinas disponíveis na Mil Vacinas, integrada ao consultório. Praticidade e segurança em um só lugar.",
      ctaText: "Agendar Vacinação",
      ctaLink: getWhatsAppUrl("Olá! Gostaria de informações sobre vacinação."),
      learnMoreLink: "/vacinacao",
      bgColor: "from-[#fdb4be] to-[#e89ba5]",
      accentColor: "text-gray-800",
      isExternal: true
    }
  } : {
    sleep: {
      icon: Moon,
      badge: "Sleep Consulting",
      title: "Peaceful Nights for the Whole Family",
      description: "Is your baby not sleeping well? Schedule a sleep consultation and transform your family's nights.",
      ctaText: "Schedule Consultation",
      ctaLink: getWhatsAppUrl("Hello! I would like to schedule a sleep consultation for my child."),
      learnMoreLink: "/consultoria-do-sono",
      bgColor: "from-[#1a1a2e] to-[#16213e]",
      accentColor: "text-yellow-300",
      isExternal: true
    },
    pneumo: {
      icon: Stethoscope,
      badge: "Pediatric Pulmonology",
      title: "Specialized Care for the Respiratory System",
      description: "Wheezing, bronchitis or asthma? As a pediatric pulmonologist, I offer specialized treatment for your child.",
      ctaText: "Schedule Appointment",
      ctaLink: getWhatsAppUrl("Hello! I would like to schedule a pediatric pulmonology appointment for my child."),
      learnMoreLink: "/pneumopediatria",
      bgColor: "from-[#83b2ac] to-[#5a8a84]",
      accentColor: "text-white",
      isExternal: true
    },
    vaccine: {
      icon: Syringe,
      badge: "Vaccination",
      title: "Protect Your Loved Ones",
      description: "Vaccines available at Mil Vacinas, integrated with the office. Convenience and safety in one place.",
      ctaText: "Schedule Vaccination",
      ctaLink: getWhatsAppUrl("Hello! I would like information about vaccination."),
      learnMoreLink: "/vacinacao",
      bgColor: "from-[#fdb4be] to-[#e89ba5]",
      accentColor: "text-gray-800",
      isExternal: true
    }
  };

  const highlight = highlights[currentHighlight];

  if (isDismissed || !highlight) {
    return null;
  }

  const Icon = highlight.icon;

  return (
    <section className={`relative py-8 bg-gradient-to-r ${highlight.bgColor} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 bg-white/20 rounded-full flex items-center justify-center ${highlight.accentColor}`}>
              <Icon className="w-8 h-8" />
            </div>
            <div className="text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-2">
                {highlight.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                {highlight.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-lg">
                {highlight.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
              asChild
            >
              <a href={highlight.ctaLink} target="_blank" rel="noopener noreferrer">
                📱 {highlight.ctaText}
              </a>
            </Button>
            <Link 
              to={getLocalizedPath(highlight.learnMoreLink)}
              className="text-white/80 hover:text-white text-sm underline underline-offset-2"
            >
              {language === 'pt' ? 'Saiba mais' : 'Learn more'}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label={language === 'pt' ? 'Fechar' : 'Close'}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </section>
  );
};

export default ServiceHighlight;

