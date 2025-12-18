import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Heart, Baby, Calendar, CheckCircle, Star } from 'lucide-react';

const ConsultaPreNatal = () => {
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20Consulta%20Pediátrica%20Pré-Natal.";

  const benefits = [
    {
      icon: Sparkles,
      title: "Preparação para a Chegada",
      description: "Orientações sobre o que esperar nos primeiros dias de vida do bebê e como se preparar."
    },
    {
      icon: Heart,
      title: "Vínculo Antecipado",
      description: "Oportunidade de conhecer a pediatra antes do nascimento, criando uma relação de confiança."
    },
    {
      icon: Baby,
      title: "Cuidados com o Recém-Nascido",
      description: "Orientações sobre amamentação, sono, banho, cuidados com o umbigo e sinais de alerta."
    },
    {
      icon: Calendar,
      title: "Planejamento do Acompanhamento",
      description: "Definição do calendário de consultas e vacinação para os primeiros meses de vida."
    }
  ];

  const topics = [
    "Amamentação: dicas práticas e como se preparar",
    "Cuidados com o recém-nascido nos primeiros dias",
    "Sono do bebê: o que esperar e como criar uma rotina",
    "Banho, higiene e cuidados com o coto umbilical",
    "Sinais de alerta: quando procurar atendimento médico",
    "Vacinação: calendário e importância das primeiras doses",
    "Enxoval essencial: o que realmente é necessário",
    "Preparação emocional para a chegada do bebê"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              Consulta Pediátrica Pré-Natal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              <span className="font-semibold text-[#fdb4be]">Preparando você para a chegada do seu bebê</span>
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma consulta especial ainda durante a gestação para <span className="text-[#83b2ac] font-semibold">orientar e tranquilizar</span> os futuros pais sobre os cuidados com o recém-nascido.
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
                  <CardTitle className="text-2xl text-[#83b2ac]">O que é a Consulta Pediátrica Pré-Natal?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  A <span className="text-[#83b2ac] font-semibold">Consulta Pediátrica Pré-Natal</span> é um momento especial para os futuros pais conhecerem a pediatra que vai acompanhar seu bebê, tirar dúvidas e se preparar para a chegada do novo membro da família.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Essa consulta é realizada <span className="text-[#fdb4be] font-semibold">durante o terceiro trimestre da gestação</span>, quando a mãe já está próxima do parto. É uma oportunidade única para criar um vínculo de confiança antes mesmo do nascimento.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Como <span className="text-[#83b2ac] font-semibold">mãe e pediatra</span>, entendo as ansiedades e dúvidas que surgem nesse momento. Meu objetivo é oferecer <span className="text-[#fdb4be] font-semibold">acolhimento e informação</span> para que vocês se sintam preparados e confiantes para receber o bebê.
                </p>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] text-center mb-12">
                Benefícios da Consulta Pré-Natal
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
                  <CardTitle className="text-2xl text-[#83b2ac]">O que abordamos na consulta?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {topics.map((topic, index) => (
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
                  <CardTitle className="text-2xl text-[#83b2ac]">Quando agendar?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  O ideal é agendar a <span className="text-[#83b2ac] font-semibold">Consulta Pediátrica Pré-Natal</span> a partir da <span className="text-[#fdb4be] font-semibold">32ª semana de gestação</span>, quando a mãe já está mais próxima do parto.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Dessa forma, temos tempo suficiente para conversar sobre todas as dúvidas e orientações, e vocês podem se preparar com tranquilidade para a chegada do bebê.
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#83b2ac]">
                    Está esperando um bebê?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Entre em contato pelo WhatsApp para agendar sua Consulta Pediátrica Pré-Natal e começar a se preparar para a chegada do seu filho.
                  </p>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Agendar pelo WhatsApp
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
            Preparação é a chave para a tranquilidade
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A <span className="text-[#83b2ac] font-semibold">Consulta Pediátrica Pré-Natal</span> é o primeiro passo para garantir que você e seu bebê terão o <span className="text-[#fdb4be] font-semibold">melhor acompanhamento</span> desde o início.
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

export default ConsultaPreNatal;


