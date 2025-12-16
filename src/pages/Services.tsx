import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Heart, Shield, Stethoscope, Moon, Wind } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t, language } = useLanguage();
  
  const getWhatsAppUrl = (type?: 'general' | 'sleep' | 'pneumo' | 'vaccine') => {
    let message = t.common.whatsapp.consultation;
    
    if (language === 'pt') {
      switch (type) {
        case 'sleep':
          message = "Olá! Gostaria de agendar uma consultoria do sono para meu filho(a).";
          break;
        case 'pneumo':
          message = "Olá! Gostaria de agendar uma consulta de pneumopediatria para meu filho(a).";
          break;
        case 'vaccine':
          message = "Olá! Gostaria de informações sobre vacinação.";
          break;
      }
    } else {
      switch (type) {
        case 'sleep':
          message = "Hello! I would like to schedule a sleep consultation for my child.";
          break;
        case 'pneumo':
          message = "Hello! I would like to schedule a pediatric pulmonology appointment for my child.";
          break;
        case 'vaccine':
          message = "Hello! I would like information about vaccination.";
          break;
      }
    }
    
    return `https://wa.me/5511994077447?text=${encodeURIComponent(message)}`;
  };

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  const specializedServices = language === 'pt' ? {
    sleep: {
      title: "Consultoria do Sono Infantil",
      description: "Seu bebê não dorme bem? A consultoria do sono ajuda a estabelecer uma rotina saudável, com métodos gentis e respeitosos que promovem noites tranquilas para toda a família.",
      highlights: [
        "Avaliação personalizada do sono",
        "Métodos gentis e respeitosos",
        "Acompanhamento durante todo o processo",
        "Para bebês a partir de 0 meses até crianças de 5 anos"
      ],
      ctaText: "Agendar Consultoria do Sono",
      learnMore: "Saiba mais"
    },
    pneumo: {
      title: "Pneumopediatria",
      description: "Como pneumopediatra, ofereço atendimento especializado para doenças respiratórias infantis: asma, bronquite, bronquiolite, pneumonias de repetição e chiado no peito.",
      highlights: [
        "Especialista em doenças respiratórias",
        "Diagnóstico e tratamento de asma infantil",
        "Acompanhamento de bronquites de repetição",
        "Cuidado integrado pediatra + pneumopediatra"
      ],
      ctaText: "Agendar Consulta de Pneumopediatria",
      learnMore: "Saiba mais"
    }
  } : {
    sleep: {
      title: "Pediatric Sleep Consulting",
      description: "Is your baby not sleeping well? Sleep consulting helps establish a healthy routine with gentle and respectful methods that promote peaceful nights for the whole family.",
      highlights: [
        "Personalized sleep assessment",
        "Gentle and respectful methods",
        "Support throughout the process",
        "For babies from 0 months to children up to 5 years"
      ],
      ctaText: "Schedule Sleep Consultation",
      learnMore: "Learn more"
    },
    pneumo: {
      title: "Pediatric Pulmonology",
      description: "As a pediatric pulmonologist, I offer specialized care for childhood respiratory diseases: asthma, bronchitis, bronchiolitis, recurrent pneumonia and wheezing.",
      highlights: [
        "Specialist in respiratory diseases",
        "Diagnosis and treatment of childhood asthma",
        "Follow-up of recurrent bronchitis",
        "Integrated pediatrician + pulmonologist care"
      ],
      ctaText: "Schedule Pulmonology Appointment",
      learnMore: "Learn more"
    }
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
                      alt="Dra. Fernanda Kruger - Pediatra e Pneumopediatra atendendo paciente no consultório Paraíso SP" 
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

            {/* Sleep Consulting Section */}
            <Card className="mb-12 border-2 border-[#1a1a2e]/10">
              <CardHeader className="bg-gradient-to-r from-[#1a1a2e]/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1a1a2e]/10 rounded-full flex items-center justify-center">
                    <Moon className="w-6 h-6 text-[#1a1a2e]" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{specializedServices.sleep.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {specializedServices.sleep.description}
                </p>
                
                <div className="bg-accent/50 p-4 rounded-lg">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {specializedServices.sleep.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Moon className="w-4 h-4 text-[#fdb4be]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <a href={getWhatsAppUrl('sleep')} target="_blank" rel="noopener noreferrer">
                      <span>📱</span>
                      {specializedServices.sleep.ctaText}
                    </a>
                  </Button>
                  <Button variant="outline" className="border-[#83b2ac] text-[#83b2ac] hover:bg-[#83b2ac] hover:text-white" asChild>
                    <Link to={getLocalizedPath('/consultoria-do-sono')}>
                      {specializedServices.sleep.learnMore} →
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pneumopediatrics Section */}
            <Card className="mb-12 border-2 border-[#83b2ac]/20">
              <CardHeader className="bg-gradient-to-r from-[#83b2ac]/10 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#83b2ac]/10 rounded-full flex items-center justify-center">
                    <Wind className="w-6 h-6 text-[#83b2ac]" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{specializedServices.pneumo.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {specializedServices.pneumo.description}
                </p>
                
                <div className="bg-[#83b2ac]/10 p-4 rounded-lg">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {specializedServices.pneumo.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Stethoscope className="w-4 h-4 text-[#83b2ac]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <a href={getWhatsAppUrl('pneumo')} target="_blank" rel="noopener noreferrer">
                      <span>📱</span>
                      {specializedServices.pneumo.ctaText}
                    </a>
                  </Button>
                  <Button variant="outline" className="border-[#83b2ac] text-[#83b2ac] hover:bg-[#83b2ac] hover:text-white" asChild>
                    <Link to={getLocalizedPath('/pneumopediatria')}>
                      {specializedServices.pneumo.learnMore} →
                    </Link>
                  </Button>
                </div>
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
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        className="bg-green-600 hover:bg-green-700" 
                        asChild
                      >
                        <a href={getWhatsAppUrl('vaccine')} target="_blank" rel="noopener noreferrer">
                          <span>📱</span>
                          {language === 'pt' ? 'Agendar Vacinação' : 'Schedule Vaccination'}
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-[#83b2ac] text-[#83b2ac] hover:bg-[#83b2ac] hover:text-white" 
                        asChild
                      >
                        <a href="https://www.milvacinas.com.br/" target="_blank" rel="noopener noreferrer">
                          {t.pages.services.vaccination.knowOurVaccines}
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/images/milvacinas.png" 
                      alt="Mil Vacinas - Sala de Vacinação integrada ao consultório pediátrico no Paraíso SP" 
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
