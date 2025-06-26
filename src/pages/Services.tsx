import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Heart, Shield, Stethoscope } from 'lucide-react';

const Services = () => {
  const highlights = [
    "Atendimento humanizado e sem pressa",
    "Avaliação completa (crescimento, desenvolvimento, vacinas)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              Cuidado Integral para Cada Fase da Infância
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">Cuidar de crianças é um privilégio e uma missão!</span> Aqui, cada atendimento é feito com <span className="text-[#83b2ac] font-semibold">carinho</span>, <span className="text-[#83b2ac] font-semibold">atenção</span> e <span className="text-[#83b2ac] font-semibold">respeito ao tempo de cada família</span>.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os principais serviços oferecidos para garantir o <span className="text-[#83b2ac] font-semibold">bem-estar</span> e o <span className="text-[#fdb4be] font-semibold">desenvolvimento saudável</span> do seu filho.
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
                  <CardTitle className="text-2xl text-[#83b2ac]">Minha Prática Clínica: O que esperar da consulta</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  <span className="font-semibold text-[#83b2ac]">Consultas de rotina</span> para acompanhar o crescimento, desenvolvimento e saúde geral das crianças.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Avaliação individualizada, atualização da carteira de vacinação, orientações sobre alimentação, sono e prevenção de doenças.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  <span className="text-[#fdb4be] font-semibold">Aqui, cada consulta é feita sem pressa</span>, com escuta ativa e acolhimento para toda a família.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="font-semibold">Seu filho merece um cuidado completo e humanizado!</span> Estou aqui para ajudar em todas as fases da infância.
                </p>
                
                <div className="bg-accent/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Destaques do Atendimento
                  </h3>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
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
                  <CardTitle className="text-2xl text-[#83b2ac]">Suporte Contínuo para sua Tranquilidade</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="text-[#83b2ac] font-semibold">Acompanhamento pós-consulta</span> por 30 dias via WhatsApp para dúvidas e resultados de exames.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Orientações por telemedicina e, se necessário, retorno presencial sem custo adicional, sempre pensando no conforto e segurança da família.
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
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl text-[#83b2ac]">Proteção Completa para Toda a Família</CardTitle>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      EM BREVE
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="text-[#fdb4be] font-semibold">Em breve:</span> Sala de Vacinação completa, segura e confortável, para proteger toda a família com as melhores vacinas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-8">
            Pronta para cuidar do seu filho
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            <span className="text-[#83b2ac] font-semibold">Agende uma consulta</span> e experimente um atendimento pediátrico <span className="text-[#fdb4be] font-semibold">diferenciado, acolhedor e humano</span>.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://wa.me/5511994077447" target="_blank" rel="noopener noreferrer">
              Agendar Consulta pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
