
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Moon, Syringe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Baby,
      title: "Consulta Pediátrica Completa",
      description: "Avaliação de rotina (puericultura), acompanhamento do crescimento e desenvolvimento, e tratamento das principais doenças da infância."
    },
    {
      icon: Heart,
      title: "Consulta de 1 Hora",
      description: "Um atendimento sem pressa, com duração de 1 hora, para conversar, orientar e examinar sua criança com todo o cuidado que ela merece."
    },
    {
      icon: Moon,
      title: "Sono e Rotina do Bebê",
      description: "Capacitação para orientar e agregar qualidade de vida às famílias, estabelecendo rotinas de sono mais saudáveis e tranquilas."
    },
    {
      icon: Syringe,
      title: "Imunização para a Família",
      description: "Com MBA em Imunização, em breve teremos um espaço completo para proteger toda a família com as melhores vacinas.",
      badge: "EM BREVE"
    }
  ];

  const clinicImages = [
    { src: "/placeholder.svg", alt: "Recepção Aconchegante" },
    { src: "/placeholder.svg", alt: "Espaço Lúdico e Seguro" },
    { src: "/placeholder.svg", alt: "Consultório Moderno" },
    { src: "/placeholder.svg", alt: "Cuidado em cada detalhe" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Cuidando do bem-estar do seu <span className="text-primary">maior tesouro</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-700 font-medium">
                Dra. Fernanda Kruger: Pediatria com amor, ciência e acolhimento.
              </h2>
              <p className="text-lg text-gray-600">
                Atendimento humanizado e personalizado no coração do Paraíso, em São Paulo. 
                Consultas sem pressa para garantir o cuidado que sua criança merece.
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Dra. Fernanda Favali Kruger - CRM-SP 140.995
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/5511994077447" target="_blank" rel="noopener noreferrer">
                    Agende uma Consulta
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/sobre-mim">Conheça minha história</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Dra. Fernanda Kruger" 
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/placeholder.svg" 
                alt="Dra. Fernanda" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Olá! Sou a Dra. Fernanda
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sou médica pediatra apaixonada pela Saúde Infantil e mãe de um menino lindo que me ensina 
                todos os dias sobre a jornada da maternidade. Minha missão é oferecer um cuidado completo, 
                aliando minha formação em Pediatria, Terapia Intensiva e Pneumologia Pediátrica com a 
                sensibilidade de quem entende os desafios das famílias. Acredito que acolhimento e paciência 
                são fundamentais!
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link to="/sobre-mim">Conheça minha história</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cuidado integral e especializado para cada fase da infância
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    {service.title}
                    {service.badge && (
                      <Badge variant="secondary" className="ml-2 bg-secondary text-white">
                        {service.badge}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nosso Cantinho
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um espaço planejado com amor para acolher sua família.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {clinicImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end">
                  <p className="text-white text-sm font-medium p-3">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/consultorio">Conheça nosso espaço</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pronta para cuidar do seu filho!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vamos conversar? Agende uma consulta ou tire suas dúvidas de forma rápida e fácil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a 
                href="https://wa.me/5511994077447" 
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
                href="mailto:contato@drafernandapediatra.com.br"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Enviar um E-mail
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
