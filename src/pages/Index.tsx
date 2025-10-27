import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Moon, Syringe, Mail, MapPin, Train, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Carrega o script do Doctoralia
    const script = document.createElement('script');
    script.id = 'zl-widget-s';
    script.src = '//platform.docplanner.com/js/widget.js';
    document.body.appendChild(script);
    return () => {
      const s = document.getElementById('zl-widget-s');
      if (s) s.remove();
    };
  }, []);

  // Função para atualizar o carrossel
  const updateCarousel = (index: number) => {
    const wrapper = document.querySelector('.carousel-wrapper');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (wrapper && dots.length === 5) {
      wrapper.style.transform = `translateX(-${index * 100}%)`;
      
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove('bg-gray-300');
          dot.classList.add('bg-[#83b2ac]');
        } else {
          dot.classList.remove('bg-[#83b2ac]');
          dot.classList.add('bg-gray-300');
        }
      });
    }
  };

  useEffect(() => {
    // Carrossel automático dos convênios
    let currentIndex = 0;
    const totalSlides = 5;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel(currentIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Baby,
      title: "Consulta Pediátrica Completa",
      description: "Avaliação de rotina (puericultura), acompanhamento do crescimento e desenvolvimento, e tratamento das principais doenças da infância."
    },
    {
      icon: Heart,
      title: "Consulta sem pressa",
      description: "Um atendimento acolhedor, para conversar, orientar e examinar sua criança com todo o cuidado que ela merece, sem pressa."
    },
    {
      icon: Moon,
      title: "Sono e Rotina do Bebê",
      description: "Capacitação para orientar e agregar qualidade de vida às famílias, estabelecendo rotinas de sono mais saudáveis e tranquilas."
    },
    {
      icon: Syringe,
      title: "Imunização para a Família",
      description: "Com MBA em Imunização, oferecemos um espaço completo para proteger toda a família com as melhores vacinas."
    },
    {
      icon: Package,
      title: "Mil Cuidados",
      description: "Programa de acompanhamento integral incluindo consultas e vacinação para cuidar da saúde de sua criança de forma completa."
    }
  ];

  const clinicImages = [
    { src: "/images/clinic/sala de espera3.jpg", alt: "Recepção Aconchegante" },
    { src: "/images/clinic/maca.jpg", alt: "Espaço Lúdico e Seguro" },
    { src: "/images/clinic/consultorio principal (2).jpeg", alt: "Consultório Moderno" },
    { src: "/images/clinic/diversao.jpg.jpeg", alt: "Cuidado em cada detalhe" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] leading-tight">
                Cuidando do bem-estar do seu <span className="text-primary">maior tesouro</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-[#83b2ac]">
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
              <div className="p-4 bg-gradient-to-br from-[#83b2ac]/20 to-[#fdb4be]/20 rounded-2xl shadow-xl">
                <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/images/doctor/fer_hero.jpg" 
                    alt="Dra. Fernanda Kruger" 
                    className="w-full max-w-md h-auto object-cover"
                  />
                </div>
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
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-[#83b2ac]/20 to-[#fdb4be]/20 rounded-2xl shadow-xl">
                  <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                    <img 
                      src="/images/doctor/fer_mesa.jpg" 
                      alt="Dra. Fernanda" 
                      className="w-full max-w-md h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#83b2ac] mb-2">
                Olá! Sou a Dra. Fernanda
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-2">
                <span className="font-semibold text-[#fdb4be]">Médica pediatra apaixonada</span> pela <span className="text-[#83b2ac] font-semibold">Saúde Infantil</span> e <span className="font-semibold text-[#fdb4be]">mãe de um menino lindo</span> que me ensina todos os dias sobre a jornada da maternidade.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-2">
                Minha missão é oferecer um <span className="text-[#83b2ac] font-semibold">cuidado completo</span>, aliando minha formação em <span className="text-[#83b2ac]">Pediatria</span>, <span className="text-[#83b2ac]">Terapia Intensiva</span> e <span className="text-[#83b2ac]">Pneumologia Pediátrica</span> com a sensibilidade de quem entende os desafios das famílias.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-semibold">
                Acredito que <span className="text-[#fdb4be]">acolhimento</span> e <span className="text-[#fdb4be]">paciência</span> são fundamentais!
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cuidado integral e especializado para cada fase da infância. Pacotes de consulta com vacinação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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

      {/* Convênios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              Convênios Atendidos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atendemos os principais convênios médicos e oferecemos facilidades para reembolso
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4 text-xl text-[#83b2ac]">
                  Convênios Ativos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#83b2ac] rounded-full"></div>
                    <span className="text-gray-700 font-medium">GoCare Saúde</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#83b2ac] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Sepaco Autogestão</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent/50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-[#fdb4be]">💬</span>
                  Novos Convênios
                </h3>
                <p className="text-gray-700 mb-4">
                  Consulte pelo WhatsApp para novos convênios que estão em processo de credenciamento.
                </p>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700" 
                  asChild
                >
                  <a href="https://wa.me/5511994077447" target="_blank" rel="noopener noreferrer">
                    Consultar Convênios
                  </a>
                </Button>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-[#83b2ac]">📄</span>
                  Reembolso
                </h3>
                <p className="text-gray-700">
                  Emitimos nota fiscal para reembolso do seu convênio caso tenha essa modalidade.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="carousel-container overflow-hidden rounded-lg shadow-xl">
                <div className="carousel-wrapper flex transition-transform duration-500 ease-in-out">
                  <div className="carousel-slide min-w-full relative">
                    <img 
                      src="/images/convenios/gocare.jpg" 
                      alt="GoCare Saúde" 
                      className="w-full h-96 object-contain bg-gray-50"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">GoCare Saúde</h3>
                    </div>
                  </div>
                  <div className="carousel-slide min-w-full relative">
                    <img 
                      src="/images/convenios/sepaco.jpg" 
                      alt="Sepaco Autogestão" 
                      className="w-full h-96 object-contain bg-gray-50"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">Sepaco Autogestão</h3>
                    </div>
                  </div>
                  <div className="carousel-slide min-w-full relative">
                    <img 
                      src="/images/convenios/comoencontrargocare.jpg" 
                      alt="Como encontrar GoCare" 
                      className="w-full h-96 object-contain bg-gray-50"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">Como encontrar GoCare</h3>
                    </div>
                  </div>
                  <div className="carousel-slide min-w-full relative">
                    <img 
                      src="/images/convenios/comoencontrarsepaco.jpg" 
                      alt="Como encontrar Sepaco" 
                      className="w-full h-96 object-contain bg-gray-50"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">Como encontrar Sepaco</h3>
                    </div>
                  </div>
                  <div className="carousel-slide min-w-full relative">
                    <img 
                      src="/images/convenios/comoencontrarsepaco2.jpg" 
                      alt="Convênios Médicos" 
                      className="w-full h-96 object-contain bg-gray-50"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">Convênios Médicos</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carousel Navigation */}
              <div className="flex justify-center mt-4 space-x-2">
                <button 
                  className="carousel-dot w-3 h-3 rounded-full bg-[#83b2ac] transition-all duration-300"
                  onClick={() => updateCarousel(0)}
                ></button>
                <button 
                  className="carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateCarousel(1)}
                ></button>
                <button 
                  className="carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateCarousel(2)}
                ></button>
                <button 
                  className="carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateCarousel(3)}
                ></button>
                <button 
                  className="carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateCarousel(4)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctoralia Calendar Section */}
      <section className="py-20 bg-[#f0f4e3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              Agende sua Consulta Particular
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Escolha o melhor horário para sua consulta com a Dra. Fernanda Kruger pelo Doctoralia:
            </p>
            <div className="flex justify-center">
              <div style={{maxWidth: 420, width: '100%'}}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<a id=\"zl-url\" class=\"zl-url\" href=\"https://www.doctoralia.com.br/fernanda-favali-kruger/pediatra-pneumologista-pediatrico/sao-paulo\" rel=\"nofollow\" data-zlw-doctor=\"fernanda-favali-kruger\" data-zlw-type=\"big_with_calendar\" data-zlw-opinion=\"false\" data-zlw-hide-branding=\"true\" data-zlw-saas-only=\"true\" data-zlw-a11y-title=\"Widget de marcação de consultas médicas\">Fernanda Favali Kruger - Doctoralia.com.br</a>`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
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
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
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

      {/* Location Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              Onde Nos Encontrar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Localizados no coração do Paraíso, com fácil acesso pelo metrô
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Endereço
                </h3>
                <p className="text-gray-600">
                  Rua Afonso de Freitas, nº 59, sala 94<br />
                  Paraíso, São Paulo - SP<br />
                  CEP 04.006-050<br />
                  Edifício Upside Paraíso
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Train className="w-5 h-5 text-secondary" />
                  Como Chegar
                </h3>
                <p className="text-gray-600">
                  <strong>🚇 Metrô:</strong> Estamos a 220m da estação Paraíso<br />
                  (Linhas 1-Azul e 2-Verde)<br />
                  <strong>⏱️ Tempo:</strong> Apenas 3 minutos caminhando
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Afonso+de+Freitas,+59,+Paraíso,+São+Paulo,+SP,+04006-050"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório - Dra. Fernanda Kruger"
                className="w-full h-80"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
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
                href="mailto:fernandafavalikruger@gmail.com"
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
