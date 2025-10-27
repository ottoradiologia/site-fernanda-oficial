import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Home, Syringe, Baby, Shield } from 'lucide-react';

const Vaccination = () => {
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";

  const features = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado para cada paciente"
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais especializados e experientes"
    },
    {
      icon: Home,
      title: "Ambiente Acolhedor",
      description: "Espaço acolhedor para toda a família"
    }
  ];

  const ageGroups = [
    {
      icon: Baby,
      title: "Bebês e Crianças",
      description: "Imunização completa desde o nascimento"
    },
    {
      icon: Users,
      title: "Adolescentes",
      description: "Vacinas essenciais para a fase da adolescência"
    },
    {
      icon: Shield,
      title: "Adultos e Idosos",
      description: "Proteção para todas as idades"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] leading-tight">
                Mil Vacinas
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-[#fdb4be]">
                Proteção Completa para Toda a Família
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa clínica de vacinação está integrada ao consultório, oferecendo um 
                <span className="font-semibold text-[#83b2ac]"> serviço completo de imunização</span> para 
                <span className="font-semibold text-[#fdb4be]"> todas as faixas etárias</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="https://www.milvacinas.com.br/" target="_blank" rel="noopener noreferrer">
                    Acessar Mil Vacinas
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-6 bg-white rounded-2xl shadow-xl">
                <img 
                  src="/images/milvacinas.png" 
                  alt="Mil Vacinas" 
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              Por Que Escolher a Mil Vacinas?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compromisso com a qualidade e segurança na imunização
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 border-accent">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-[#83b2ac]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              Vacinas para Todas as Idades
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proteção completa desde o nascimento até a terceira idade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {ageGroups.map((group, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <group.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-[#fdb4be]">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {group.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Syringe className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-[#83b2ac] text-center mb-6">
                Clínica Integrada ao Consultório
              </h2>
              <p className="text-gray-600 text-center text-lg leading-relaxed mb-8">
                A <span className="font-semibold text-[#83b2ac]">Mil Vacinas</span> funciona de forma 
                integrada ao consultório da <span className="font-semibold text-[#fdb4be]">Dra. Fernanda Kruger</span>, 
                oferecendo a praticidade de realizar consultas pediátricas e vacinação no mesmo local, 
                com toda a segurança e qualidade que você merece.
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                  <a href="https://www.milvacinas.com.br/" target="_blank" rel="noopener noreferrer">
                    Conhecer Mil Vacinas
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
            Proteja Quem Você Ama
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato e agende a vacinação para você e sua família
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>📱</span>
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://www.milvacinas.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visitar Site Mil Vacinas
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vaccination;

