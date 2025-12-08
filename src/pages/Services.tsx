import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Heart, Shield, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.consultation);
    return `https://wa.me/5511994077447?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              {t.pages.services.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">{t.pages.services.hero.subtitle1}</span> {t.pages.services.hero.subtitle2}
            </p>
          </div>
        </div>
      </section>

      {/* Main Consultation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.services.practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.pages.services.practice.paragraph1}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.pages.services.practice.paragraph2}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      <span className="text-[#fdb4be] font-semibold">{t.pages.services.practice.paragraph3}</span>
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      <span className="font-semibold">{t.pages.services.practice.paragraph4}</span>
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/clinic/assinando.jpg" 
                      alt="Dra. Fernanda atendendo paciente no consultório" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-accent/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    {t.pages.services.practice.highlights.title}
                  </h3>
                  <ul className="space-y-3">
                    {t.pages.services.practice.highlights.items.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Follow-up Section */}
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.services.followup.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.services.followup.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.services.followup.paragraph2}
                </p>
              </CardContent>
            </Card>

            {/* Vaccination Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.services.vaccination.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.pages.services.vaccination.paragraph1}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {t.pages.services.vaccination.paragraph2}
                    </p>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-[#83b2ac] text-[#83b2ac] hover:bg-[#83b2ac] hover:text-white" 
                      asChild
                    >
                      <a href="https://www.milvacinas.com.br/" target="_blank" rel="noopener noreferrer">
                        {t.pages.services.vaccination.knowOurVaccines}
                      </a>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/images/milvacinas.png" 
                      alt="Logo Mil Vacinas" 
                      className="max-w-xs h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-8">
            {t.pages.services.cta.title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pages.services.cta.description}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              {t.pages.services.cta.button}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
