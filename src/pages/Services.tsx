
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Heart, Shield, Stethoscope } from 'lucide-react';

const Services = () => {
  const highlights = [
    "Duração de 1 hora",
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cuidado Integral para Cada Fase da Infância
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serviços especializados com foco no bem-estar e desenvolvimento saudável das crianças
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
                  <CardTitle className="text-2xl">Minha Prática Clínica: O que esperar da consulta</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Realizo consultas de rotina para monitorar o crescimento e desenvolvimento das crianças. 
                  Nessa consulta são verificados os parâmetros individualizados de crescimento e desenvolvimento 
                  da criança, sua carteira de vacinação e uso de medicações, além do cuidados das principais 
                  doenças da infância. Essas visitas são essenciais para detectar precocemente possíveis 
                  problemas de saúde e garantir que seus filhos estejam se desenvolvendo adequadamente. 
                  Fique tranquilo sabendo que a saúde do seu filho está em boas mãos.
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
                  <CardTitle className="text-2xl">Suporte Contínuo para sua Tranquilidade</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  As consultas não têm retorno presencial. Todos os pacientes terão acompanhamento por 30 dias 
                  pelo WhatsApp para dúvidas e envio de resultados de exames. Orientações sobre resultados de 
                  exames serão feitas por telemedicina. Em caso de necessidade de um novo exame físico, a 
                  Dra. Fernanda irá solicitar sem custos adicionais, de forma individualizada.
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
                    <CardTitle className="text-2xl">Proteção Completa para Toda a Família</CardTitle>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      EM BREVE
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Estamos finalizando nossa Sala de Vacinação para oferecer um serviço de imunização completo, 
                  seguro e confortável, agregado ao consultório.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pronta para cuidar do seu filho
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Agende uma consulta e experimente um atendimento pediátrico diferenciado
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
