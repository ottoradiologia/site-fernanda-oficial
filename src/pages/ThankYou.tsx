import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';

const ThankYou = () => {
  const { t, language } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  useEffect(() => {
    // Aqui você pode disparar eventos de conversão adicionais se necessário
    // Ex: window.gtag('event', 'conversion', ...);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEOHead 
        title="Obrigado pelo Contato" 
        description="Agradecemos seu contato. Em breve retornaremos."
        keywords="agradecimento, contato, pediatra paraíso"
      />
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 bg-gradient-to-br from-accent/30 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl mx-auto animate-fade-in">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#83b2ac] mb-4">
              {language === 'pt' ? 'Obrigado pelo Contato!' : 'Thank You for Contacting Us!'}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {language === 'pt' 
                ? 'Recebemos sua mensagem e entraremos em contato o mais breve possível.' 
                : 'We received your message and will get back to you as soon as possible.'}
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-500">
                {language === 'pt'
                  ? 'Enquanto isso, que tal conhecer mais sobre nossos serviços?'
                  : 'In the meantime, how about learning more about our services?'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button asChild size="lg" className="bg-[#83b2ac] hover:bg-[#6a9c96]">
                  <Link to={getLocalizedPath('/')}>
                    {language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link to={getLocalizedPath('/servicos')}>
                    {language === 'pt' ? 'Nossos Serviços' : 'Our Services'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;

