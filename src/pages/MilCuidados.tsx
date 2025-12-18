import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Heart, Calendar, Syringe, Stethoscope, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MilCuidados = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Programa%20Mil%20Cuidados.";

  const benefits = [
    {
      icon: Baby,
      title: t.pages.milcuidados.benefits.benefit1.title,
      description: t.pages.milcuidados.benefits.benefit1.description
    },
    {
      icon: Calendar,
      title: t.pages.milcuidados.benefits.benefit2.title,
      description: t.pages.milcuidados.benefits.benefit2.description
    },
    {
      icon: Syringe,
      title: t.pages.milcuidados.benefits.benefit3.title,
      description: t.pages.milcuidados.benefits.benefit3.description
    },
    {
      icon: Stethoscope,
      title: t.pages.milcuidados.benefits.benefit4.title,
      description: t.pages.milcuidados.benefits.benefit4.description
    },
    {
      icon: Heart,
      title: t.pages.milcuidados.benefits.benefit5.title,
      description: t.pages.milcuidados.benefits.benefit5.description
    },
    {
      icon: Shield,
      title: t.pages.milcuidados.benefits.benefit6.title,
      description: t.pages.milcuidados.benefits.benefit6.description
    }
  ];

  const areas = [
    {
      title: t.pages.milcuidados.areas.area1.title,
      description: t.pages.milcuidados.areas.area1.description
    },
    {
      title: t.pages.milcuidados.areas.area2.title,
      description: t.pages.milcuidados.areas.area2.description
    },
    {
      title: t.pages.milcuidados.areas.area3.title,
      description: t.pages.milcuidados.areas.area3.description
    },
    {
      title: t.pages.milcuidados.areas.area4.title,
      description: t.pages.milcuidados.areas.area4.description
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              {t.pages.milcuidados.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">{t.pages.milcuidados.hero.subtitle}</span>
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.pages.milcuidados.hero.description}
            </p>
          </div>
          
          {/* Video Section */}
          <div className="max-w-md mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                poster="/images/clinic/maca.jpg"
              >
                <source src="/images/clinic/milcuidados.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.milcuidados.whatIs.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.milcuidados.whatIs.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.milcuidados.whatIs.paragraph2}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.milcuidados.whatIs.paragraph3}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.milcuidados.whatIs.paragraph4}
                </p>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
                {t.pages.milcuidados.benefits.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-[#83b2ac]">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Areas Section */}
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.milcuidados.areas.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {t.pages.milcuidados.areas.description}
                </p>
                <div className="space-y-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-accent/30 rounded-lg">
                      <div className="w-8 h-8 bg-[#83b2ac] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#83b2ac] mb-2 text-lg">
                          {area.title}
                        </h3>
                        <p className="text-gray-600">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included Section */}
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.milcuidados.includes.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.pages.milcuidados.includes.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#83b2ac]">
                    {t.pages.milcuidados.cta.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {t.pages.milcuidados.cta.description}
                  </p>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {t.pages.milcuidados.cta.button}
                    </a>
                  </Button>
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
            {t.pages.milcuidados.cta.finalTitle}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pages.milcuidados.cta.finalDescription}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.pages.milcuidados.cta.finalButton}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilCuidados;

