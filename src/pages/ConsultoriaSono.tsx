import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Heart, Clock, Baby, CheckCircle, Star } from 'lucide-react';

const ConsultoriaSono = () => {
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20de%20Sono.";

  const benefits = [
    {
      icon: Moon,
      title: "Noites Mais Tranquilas",
      description: "Orientações personalizadas para ajudar seu bebê a dormir melhor e por mais tempo."
    },
    {
      icon: Heart,
      title: "Abordagem Acolhedora",
      description: "Métodos gentis e respeitosos, sem deixar o bebê chorar sozinho."
    },
    {
      icon: Clock,
      title: "Rotina Estruturada",
      description: "Criação de uma rotina de sono saudável e adaptada à realidade da sua família."
    },
    {
      icon: Baby,
      title: "Para Todas as Idades",
      description: "Atendimento para bebês e crianças em diferentes fases do desenvolvimento."
    }
  ];

  const includes = [
    "Avaliação completa da rotina atual de sono da criança",
    "Orientações personalizadas para estabelecer hábitos saudáveis",
    "Estratégias gentis para melhorar a qualidade do sono",
    "Acompanhamento via WhatsApp durante o processo",
    "Mentoria online para tirar dúvidas e ajustar a rotina"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              Consultoria de Sono e Rotina
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">Noites tranquilas para toda a família</span>
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Orientações personalizadas para ajudar seu bebê a <span className="text-[#83b2ac] font-semibold">dormir melhor</span> e estabelecer uma <span className="text-[#83b2ac] font-semibold">rotina saudável</span>.
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
                    <Moon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">Como Funciona a Consultoria?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  A <span className="text-[#83b2ac] font-semibold">Consultoria de Sono e Rotina</span> é um serviço especializado para ajudar famílias a estabelecerem <span className="text-[#fdb4be] font-semibold">hábitos de sono saudáveis</span> para seus bebês e crianças.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Com formação em <span className="text-[#83b2ac] font-semibold">Sono e Rotina do Bebê</span> pela Faculdade Brasília, ofereço uma abordagem <span className="text-[#fdb4be] font-semibold">gentil e respeitosa</span>, adaptada às necessidades específicas de cada família.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Entendo os desafios da maternidade e sei como é difícil lidar com noites mal dormidas. Por isso, meu objetivo é <span className="text-[#83b2ac] font-semibold">agregar qualidade de vida</span> a todos, promovendo um sono mais tranquilo para a criança e descanso para os pais.
                </p>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
                Benefícios da Consultoria
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

            {/* What's Included Section */}
            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#83b2ac]">O que está incluído?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {includes.map((item, index) => (
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
                    Quer saber mais sobre a Consultoria de Sono?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Entre em contato pelo WhatsApp para conhecer os detalhes, valores e como posso ajudar sua família a ter noites mais tranquilas.
                  </p>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp
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
            Noites tranquilas para toda a família
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A <span className="text-[#83b2ac] font-semibold">Consultoria de Sono</span> pode transformar a rotina da sua família, proporcionando <span className="text-[#fdb4be] font-semibold">mais qualidade de vida</span> e descanso para todos.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar Consultoria pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaSono;


