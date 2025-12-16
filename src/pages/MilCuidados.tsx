import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Heart, Calendar, Syringe, Stethoscope, Shield, CheckCircle } from 'lucide-react';

const MilCuidados = () => {
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Programa%20Mil%20Cuidados.";

  const benefits = [
    {
      icon: Baby,
      title: "Acompanhamento Completo",
      description: "Consultas regulares para monitorar o crescimento e desenvolvimento do seu filho em todas as fases da infância."
    },
    {
      icon: Calendar,
      title: "Planejamento Personalizado",
      description: "Cronograma de consultas adaptado às necessidades específicas da sua criança."
    },
    {
      icon: Syringe,
      title: "Vacinas Incluídas no Programa",
      description: "Vacinas incluídas no Programa Mil Cuidados, garantindo proteção em todas as fases."
    },
    {
      icon: Stethoscope,
      title: "Consultas sem Pressa",
      description: "Atendimento humanizado com tempo dedicado para ouvir, orientar e cuidar da sua família."
    },
    {
      icon: Heart,
      title: "Suporte Contínuo",
      description: "Acompanhamento pós-consulta via WhatsApp e mentorias online para dúvidas e resultados."
    },
    {
      icon: Shield,
      title: "Prevenção e Cuidado",
      description: "Foco em prevenção de doenças e promoção da saúde desde os primeiros dias de vida."
    }
  ];

  const areas = [
    {
      title: "Puericultura",
      description: "Acompanhamento do crescimento e desenvolvimento, orientações sobre alimentação, sono e cuidados gerais."
    },
    {
      title: "Pneumopediatria",
      description: "Avaliação e tratamento especializado de doenças respiratórias, como asma, bronquiolite, pneumonias e alergias respiratórias."
    },
    {
      title: "Sono e Rotina",
      description: "Orientações personalizadas para estabelecer rotinas saudáveis de sono e hábitos para toda a família."
    },
    {
      title: "Imunização",
      description: "Acompanhamento completo da carteira de vacinação, com vacinas incluídas no programa conforme o pacote escolhido."
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
              Programa Mil Cuidados
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">Acompanhamento completo e personalizado</span> para todas as fases da infância do seu filho
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um programa de consultas pediátricas que pode incluir <span className="text-[#83b2ac] font-semibold">vacinas incluídas no Programa Mil Cuidados</span> e <span className="text-[#83b2ac] font-semibold">acompanhamento integral</span> da saúde da sua criança.
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
                  <CardTitle className="text-2xl text-[#83b2ac]">O que é o Programa Mil Cuidados?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  O <span className="text-[#83b2ac] font-semibold">Programa Mil Cuidados</span> é um programa especial de acompanhamento pediátrico desenvolvido para <span className="text-[#fdb4be] font-semibold">todas as fases da infância</span> da sua criança, do bebê ao adolescente.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Este programa oferece um <span className="text-[#83b2ac] font-semibold">acompanhamento completo e personalizado</span>, incluindo consultas regulares de puericultura, monitoramento do crescimento e desenvolvimento, e pode incluir também <span className="text-[#83b2ac] font-semibold">vacinas incluídas no Programa Mil Cuidados</span>.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A duração do programa pode variar de <span className="text-[#83b2ac] font-semibold">no mínimo 3 meses</span> até <span className="text-[#fdb4be] font-semibold">toda a infância</span>, adaptando-se às necessidades da sua família.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Com o Programa Mil Cuidados, você garante que seu filho receba o <span className="text-[#fdb4be] font-semibold">cuidado preventivo e contínuo</span> necessário para um desenvolvimento saudável, com a tranquilidade de ter uma pediatra dedicada acompanhando cada etapa dessa jornada tão importante.
                </p>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
                Benefícios do Programa
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
                  <CardTitle className="text-2xl text-[#83b2ac]">Áreas de Acompanhamento</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  O Programa Mil Cuidados oferece um <span className="text-[#83b2ac] font-semibold">acompanhamento completo e personalizado</span> para crianças de todas as idades, adaptando-se às necessidades específicas de cada família:
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
                  <CardTitle className="text-2xl text-[#83b2ac]">O que está incluído?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-lg">
                      <span className="font-semibold text-[#83b2ac]">Consultas regulares de puericultura</span> para acompanhamento do crescimento e desenvolvimento
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-lg">
                      <span className="font-semibold text-[#83b2ac]">Avaliação completa</span> em cada consulta, com tempo dedicado para ouvir e orientar
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-lg">
                      <span className="font-semibold text-[#83b2ac]">Vacinas incluídas no Programa Mil Cuidados</span> (quando incluído no pacote)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-lg">
                      <span className="font-semibold text-[#83b2ac]">Acompanhamento pós-consulta</span> via WhatsApp e mentorias online
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-lg">
                      <span className="font-semibold text-[#83b2ac]">Orientações personalizadas</span> sobre alimentação, sono, desenvolvimento e prevenção
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#83b2ac] flex-shrink-0 mt-1" />
                    <span className="text-gray-600 text-lg">
                      <span className="font-semibold text-[#83b2ac]">Suporte contínuo</span> para dúvidas e resultados de exames
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#83b2ac]">
                    Quer saber mais sobre o Programa Mil Cuidados?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Entre em contato pelo WhatsApp para conhecer os detalhes do programa, valores e como podemos personalizar o acompanhamento para sua família.
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
            Invista no cuidado completo do seu filho
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            O <span className="text-[#83b2ac] font-semibold">Programa Mil Cuidados</span> oferece a tranquilidade de ter um acompanhamento pediátrico <span className="text-[#fdb4be] font-semibold">completo e personalizado</span> para todas as fases da infância da sua criança.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar Consulta pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MilCuidados;

