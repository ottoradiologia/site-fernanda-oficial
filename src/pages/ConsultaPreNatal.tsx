import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Heart, Baby, Calendar, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ConsultaPreNatal = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20Consulta%20Pediátrica%20Pré-Natal.";

  const benefits = [
    {
      icon: Sparkles,
      title: t.pages.consultaPreNatal.benefits.benefit1.title,
      description: t.pages.consultaPreNatal.benefits.benefit1.description
    },
    {
      icon: Heart,
      title: t.pages.consultaPreNatal.benefits.benefit2.title,
      description: t.pages.consultaPreNatal.benefits.benefit2.description
    },
    {
      icon: Baby,
      title: t.pages.consultaPreNatal.benefits.benefit3.title,
      description: t.pages.consultaPreNatal.benefits.benefit3.description
    },
    {
      icon: Calendar,
      title: t.pages.consultaPreNatal.benefits.benefit4.title,
      description: t.pages.consultaPreNatal.benefits.benefit4.description
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              {t.pages.consultaPreNatal.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">{t.pages.consultaPreNatal.hero.subtitle}</span>
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.pages.consultaPreNatal.hero.description}
            </p>
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
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.consultaPreNatal.whatIs.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.consultaPreNatal.whatIs.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.consultaPreNatal.whatIs.paragraph2}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.consultaPreNatal.whatIs.paragraph3}
                </p>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
                {t.pages.consultaPreNatal.benefits.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Topics Section */}
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.consultaPreNatal.topics.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {t.pages.consultaPreNatal.topics.items.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-lg">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* When to Schedule Section */}
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">{t.pages.consultaPreNatal.whenToSchedule.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  {t.pages.consultaPreNatal.whenToSchedule.paragraph1}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.consultaPreNatal.whenToSchedule.paragraph2}
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#83b2ac]">
                    {t.pages.consultaPreNatal.cta.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {t.pages.consultaPreNatal.cta.description}
                  </p>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {t.pages.consultaPreNatal.cta.button}
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
            {t.pages.consultaPreNatal.cta.finalTitle}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pages.consultaPreNatal.cta.finalDescription}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.pages.consultaPreNatal.cta.finalButton}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultaPreNatal;


