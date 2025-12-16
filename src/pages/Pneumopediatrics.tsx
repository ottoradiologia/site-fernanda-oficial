import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Stethoscope, Shield, CheckCircle, AlertTriangle, Wind, Baby, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Pneumopediatrics = () => {
  const { language } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = language === 'pt' 
      ? "Olá! Gostaria de agendar uma consulta de pneumopediatria para meu filho(a)."
      : "Hello! I would like to schedule a pediatric pulmonology appointment for my child.";
    return `https://wa.me/5511994077447?text=${encodeURIComponent(message)}`;
  };

  const content = language === 'pt' ? {
    hero: {
      title: "Pneumopediatria",
      subtitle: "Cuidado especializado para o sistema respiratório do seu filho",
      description: "Como pneumopediatra, ofereço atendimento especializado para doenças respiratórias infantis, desde quadros simples até casos complexos, com abordagem humanizada e baseada em evidências.",
      cta: "Agendar Consulta de Pneumopediatria",
      credentials: "CRM 178.676 | RQE 89688 (Pediatria) | RQE 97778 (Pneumologia Pediátrica)"
    },
    conditions: {
      title: "Condições que Tratamos",
      subtitle: "Especialização em doenças respiratórias pediátricas",
      items: [
        {
          icon: Wind,
          title: "Asma Infantil",
          description: "Diagnóstico, tratamento e acompanhamento da asma, ajudando seu filho a ter uma vida normal e ativa."
        },
        {
          icon: Heart,
          title: "Bronquite e Bronquiolite",
          description: "Tratamento de inflamações brônquicas, muito comuns em bebês e crianças pequenas."
        },
        {
          icon: Shield,
          title: "Pneumonias",
          description: "Diagnóstico preciso e tratamento adequado das infecções pulmonares."
        },
        {
          icon: AlertTriangle,
          title: "Chiado no Peito (Sibilância)",
          description: "Investigação e tratamento do chiado recorrente, comum em lactentes."
        },
        {
          icon: Stethoscope,
          title: "Tosse Crônica",
          description: "Avaliação de tosses que persistem por mais de 4 semanas."
        },
        {
          icon: Baby,
          title: "Doenças do Bebê Prematuro",
          description: "Acompanhamento respiratório de prematuros com displasia broncopulmonar."
        }
      ]
    },
    whenToSeek: {
      title: "Quando Procurar um Pneumopediatra?",
      subtitle: "Sinais de alerta que merecem atenção especializada",
      items: [
        "Chiado no peito frequente ou persistente",
        "Tosse que não melhora há mais de 4 semanas",
        "Dificuldade para respirar ou respiração acelerada",
        "Bronquites ou pneumonias de repetição",
        "Cansaço durante atividades físicas",
        "Bebê que fica roxinho ou com lábios azulados",
        "Infecções respiratórias frequentes",
        "Roncos ou pausas respiratórias durante o sono"
      ]
    },
    difference: {
      title: "Pediatra x Pneumopediatra",
      subtitle: "Entenda a diferença e quando procurar cada um",
      pediatrician: {
        title: "Pediatra",
        items: [
          "Atende todas as questões de saúde infantil",
          "Acompanhamento de rotina (puericultura)",
          "Vacinação e orientações gerais",
          "Doenças comuns da infância"
        ]
      },
      pneumopediatrician: {
        title: "Pneumopediatra",
        items: [
          "Especialista em doenças respiratórias",
          "Casos complexos ou de difícil controle",
          "Investigação aprofundada de sintomas",
          "Tratamentos específicos para pulmão"
        ]
      },
      note: "Como sou pediatra E pneumopediatra, posso oferecer um cuidado completo e integrado para seu filho!"
    },
    approach: {
      title: "Minha Abordagem",
      subtitle: "Atendimento humanizado e baseado em evidências",
      items: [
        {
          icon: Heart,
          title: "Atendimento Humanizado",
          description: "Consultas sem pressa, com tempo para ouvir, examinar e esclarecer todas as dúvidas."
        },
        {
          icon: Stethoscope,
          title: "Medicina Baseada em Evidências",
          description: "Tratamentos atualizados seguindo as melhores práticas médicas internacionais."
        },
        {
          icon: Users,
          title: "Família como Parceira",
          description: "Orientações claras para que os pais se sintam seguros e participem ativamente do cuidado."
        }
      ]
    },
    testimonial: {
      text: "Minha filha estava em tratamento para bronquite e tive uma ótima experiência. O consultório é muito acolhedor e a Dra. Fernanda é muito gentil e profissional!",
      author: "Reggiani de Sá",
      source: "Avaliação Google"
    },
    cta: {
      title: "Seu Filho Precisa de Avaliação Respiratória?",
      description: "Agende uma consulta de pneumopediatria e cuide da saúde respiratória do seu filho com uma especialista.",
      button: "Agendar pelo WhatsApp"
    },
    seo: {
      location: "Consultório no Paraíso, São Paulo - Próximo ao Metrô Paraíso"
    }
  } : {
    hero: {
      title: "Pediatric Pulmonology",
      subtitle: "Specialized care for your child's respiratory system",
      description: "As a pediatric pulmonologist, I offer specialized care for childhood respiratory diseases, from simple conditions to complex cases, with a humanized and evidence-based approach.",
      cta: "Schedule Pulmonology Appointment",
      credentials: "CRM 178.676 | RQE 89688 (Pediatrics) | RQE 97778 (Pediatric Pulmonology)"
    },
    conditions: {
      title: "Conditions We Treat",
      subtitle: "Specialization in pediatric respiratory diseases",
      items: [
        {
          icon: Wind,
          title: "Childhood Asthma",
          description: "Diagnosis, treatment and monitoring of asthma, helping your child live a normal and active life."
        },
        {
          icon: Heart,
          title: "Bronchitis and Bronchiolitis",
          description: "Treatment of bronchial inflammations, very common in babies and young children."
        },
        {
          icon: Shield,
          title: "Pneumonia",
          description: "Accurate diagnosis and proper treatment of lung infections."
        },
        {
          icon: AlertTriangle,
          title: "Wheezing",
          description: "Investigation and treatment of recurrent wheezing, common in infants."
        },
        {
          icon: Stethoscope,
          title: "Chronic Cough",
          description: "Evaluation of coughs that persist for more than 4 weeks."
        },
        {
          icon: Baby,
          title: "Premature Baby Diseases",
          description: "Respiratory monitoring of premature infants with bronchopulmonary dysplasia."
        }
      ]
    },
    whenToSeek: {
      title: "When to See a Pediatric Pulmonologist?",
      subtitle: "Warning signs that deserve specialized attention",
      items: [
        "Frequent or persistent wheezing",
        "Cough that hasn't improved for more than 4 weeks",
        "Difficulty breathing or rapid breathing",
        "Recurrent bronchitis or pneumonia",
        "Fatigue during physical activities",
        "Baby turning blue or with bluish lips",
        "Frequent respiratory infections",
        "Snoring or breathing pauses during sleep"
      ]
    },
    difference: {
      title: "Pediatrician vs Pediatric Pulmonologist",
      subtitle: "Understand the difference and when to seek each one",
      pediatrician: {
        title: "Pediatrician",
        items: [
          "Handles all child health issues",
          "Routine follow-up (well-child visits)",
          "Vaccination and general guidance",
          "Common childhood illnesses"
        ]
      },
      pneumopediatrician: {
        title: "Pediatric Pulmonologist",
        items: [
          "Specialist in respiratory diseases",
          "Complex or hard-to-control cases",
          "In-depth symptom investigation",
          "Specific lung treatments"
        ]
      },
      note: "Since I'm both a pediatrician AND a pediatric pulmonologist, I can offer complete and integrated care for your child!"
    },
    approach: {
      title: "My Approach",
      subtitle: "Humanized and evidence-based care",
      items: [
        {
          icon: Heart,
          title: "Humanized Care",
          description: "Unhurried appointments, with time to listen, examine and clarify all questions."
        },
        {
          icon: Stethoscope,
          title: "Evidence-Based Medicine",
          description: "Updated treatments following the best international medical practices."
        },
        {
          icon: Users,
          title: "Family as Partner",
          description: "Clear guidance so parents feel confident and actively participate in care."
        }
      ]
    },
    testimonial: {
      text: "My daughter is being treated for bronchitis and I had a great experience. The office is very welcoming and Dr. Fernanda is very kind and professional!",
      author: "Reggiani de Sá",
      source: "Google Review"
    },
    cta: {
      title: "Does Your Child Need Respiratory Evaluation?",
      description: "Schedule a pediatric pulmonology appointment and take care of your child's respiratory health with a specialist.",
      button: "Schedule via WhatsApp"
    },
    seo: {
      location: "Office in Paraíso, São Paulo - Near Paraíso Subway"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#83b2ac] to-[#5a8a84] py-20 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-10 h-10 text-[#fdb4be]" />
                <span className="text-[#fdb4be] font-medium">Dra. Fernanda Kruger</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {content.hero.title}
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-white/90">
                {content.hero.subtitle}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {content.hero.description}
              </p>
              <p className="text-sm text-white/60">
                {content.hero.credentials}
              </p>
              <p className="text-sm text-white/70">
                📍 {content.seo.location}
              </p>
              <Button size="lg" className="bg-[#fdb4be] hover:bg-[#fdb4be]/90 text-gray-900 font-semibold" asChild>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  {content.hero.cta}
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
                  <img 
                    src="/images/doctor/fer estetoscopio.jpg.jpeg" 
                    alt="Dra. Fernanda Kruger - Pneumopediatra no Paraíso SP" 
                    className="w-full max-w-md h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {content.conditions.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.conditions.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.conditions.items.map((condition, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-[#83b2ac]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#83b2ac]/10 rounded-full flex items-center justify-center">
                      <condition.icon className="w-6 h-6 text-[#83b2ac]" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {condition.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {condition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Seek Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
                {content.whenToSeek.title}
              </h2>
              <p className="text-gray-600">
                {content.whenToSeek.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.whenToSeek.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#83b2ac] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {content.difference.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.difference.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Pediatrician */}
              <Card className="border-2 border-gray-200">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-xl text-gray-700 text-center">
                    {content.difference.pediatrician.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {content.difference.pediatrician.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Pneumopediatrician */}
              <Card className="border-2 border-[#83b2ac]">
                <CardHeader className="bg-[#83b2ac]/10">
                  <CardTitle className="text-xl text-[#83b2ac] text-center">
                    {content.difference.pneumopediatrician.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {content.difference.pneumopediatrician.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#83b2ac] rounded-full" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-[#fdb4be]/10 p-6 rounded-lg text-center">
              <p className="text-[#83b2ac] font-semibold text-lg">
                💡 {content.difference.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {content.approach.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.approach.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.approach.items.map((item, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[#fdb4be]/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-[#fdb4be]" />
                  </div>
                  <CardTitle className="text-lg text-[#83b2ac]">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-[#83b2ac]/10 p-8 rounded-2xl">
              <Stethoscope className="w-12 h-12 text-[#83b2ac] mx-auto mb-4" />
              <p className="text-lg text-gray-700 italic mb-4">
                "{content.testimonial.text}"
              </p>
              <p className="text-[#83b2ac] font-semibold">
                — {content.testimonial.author}
              </p>
              <p className="text-sm text-gray-500">
                {content.testimonial.source}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#83b2ac]">
        <div className="container mx-auto px-4 text-center">
          <Stethoscope className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {content.cta.title}
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {content.cta.description}
          </p>
          
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <a 
              href={getWhatsAppUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>📱</span>
              {content.cta.button}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pneumopediatrics;

