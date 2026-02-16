import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const qualifications = t.pages.about.qualifications.items;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              {t.pages.about.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.pages.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <img 
                src="/images/doctor/fernanda e filho.jpg.jpeg" 
                alt="Dra. Fernanda Kruger com seu filho"
                loading="lazy" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  <span className="font-bold text-[#fdb4be]">{t.pages.about.content.paragraph1}</span>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <span className="font-semibold">{t.pages.about.content.paragraph2}</span>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.pages.about.content.paragraph3}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.pages.about.content.paragraph4}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.pages.about.content.paragraph5}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.pages.about.content.paragraph6}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.pages.about.content.paragraph7}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t.pages.about.content.paragraph8}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
            {t.pages.about.qualifications.title}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">{t.pages.about.qualifications.cardTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
            {t.pages.about.philosophy.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">{t.pages.about.philosophy.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {t.pages.about.philosophy.mission.description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-secondary">{t.pages.about.philosophy.differential.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {t.pages.about.philosophy.differential.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
