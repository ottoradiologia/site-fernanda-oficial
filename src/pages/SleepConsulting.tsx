import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Clock, Baby, CheckCircle, Heart, Star, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SleepConsulting = () => {
  const { language } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = language === 'pt' 
      ? "Olá! Gostaria de agendar uma consultoria do sono para meu filho(a)."
      : "Hello! I would like to schedule a sleep consultation for my child.";
    return `https://wa.me/5511994077447?text=${encodeURIComponent(message)}`;
  };

  const content = language === 'pt' ? {
    hero: {
      title: "Consultoria do Sono Infantil",
      subtitle: "Noites tranquilas para toda a família",
      description: "Seu bebê não dorme bem? A consultoria do sono ajuda a estabelecer uma rotina saudável, respeitando o desenvolvimento do seu filho e promovendo noites de descanso para toda a família.",
      cta: "Agendar Consultoria do Sono"
    },
    benefits: {
      title: "Benefícios da Consultoria do Sono",
      subtitle: "Transforme as noites da sua família",
      items: [
        {
          icon: Moon,
          title: "Noites Tranquilas",
          description: "Seu bebê aprenderá a dormir de forma independente, com menos despertares noturnos."
        },
        {
          icon: Clock,
          title: "Rotina Estruturada",
          description: "Criamos uma rotina personalizada que respeita as necessidades do seu filho e da família."
        },
        {
          icon: Heart,
          title: "Abordagem Gentil",
          description: "Métodos respeitosos que consideram o vínculo afetivo e o temperamento do bebê."
        }
      ]
    },
    signs: {
      title: "Sinais de que Seu Filho Precisa de Ajuda",
      subtitle: "Reconheça quando buscar orientação profissional",
      items: [
        "Demora mais de 30 minutos para adormecer",
        "Acorda várias vezes durante a noite",
        "Só dorme no colo ou mamando",
        "Sonecas muito curtas ou irregulares",
        "Acorda muito cedo pela manhã",
        "Resistência na hora de dormir",
        "Cansaço excessivo durante o dia",
        "Irritabilidade frequente"
      ]
    },
    howItWorks: {
      title: "Como Funciona a Consultoria",
      subtitle: "Um processo personalizado e acompanhado",
      steps: [
        {
          number: "1",
          title: "Avaliação Inicial",
          description: "Analisamos a rotina atual, histórico de sono e necessidades específicas do seu filho."
        },
        {
          number: "2",
          title: "Plano Personalizado",
          description: "Desenvolvemos um plano de sono sob medida para sua família."
        },
        {
          number: "3",
          title: "Implementação Guiada",
          description: "Acompanhamento durante a implementação das mudanças na rotina."
        },
        {
          number: "4",
          title: "Suporte Contínuo",
          description: "Ajustes e orientações durante todo o processo de adaptação."
        }
      ]
    },
    ages: {
      title: "Para Todas as Idades",
      subtitle: "Atendemos bebês e crianças em diferentes fases",
      items: [
        {
          icon: Baby,
          title: "Recém-nascidos (0-3 meses)",
          description: "Orientações para estabelecer bons hábitos de sono desde o início."
        },
        {
          icon: Moon,
          title: "Bebês (4-12 meses)",
          description: "Fase ideal para trabalhar a autonomia do sono."
        },
        {
          icon: Star,
          title: "Crianças (1-5 anos)",
          description: "Ajustes de rotina e transições importantes como tirar a chupeta ou mudar de cama."
        }
      ]
    },
    testimonial: {
      text: "A consultoria do sono mudou nossa vida! Meu filho dormia mal há meses e, com as orientações da Dra. Fernanda, em poucas semanas já tínhamos noites tranquilas.",
      author: "Mãe de paciente"
    },
    cta: {
      title: "Pronto para Noites Tranquilas?",
      description: "Agende uma consultoria do sono e transforme a qualidade de vida da sua família.",
      button: "Agendar pelo WhatsApp"
    },
    seo: {
      location: "Consultório no Paraíso, São Paulo - Próximo ao Metrô"
    }
  } : {
    hero: {
      title: "Pediatric Sleep Consulting",
      subtitle: "Peaceful nights for the whole family",
      description: "Is your baby not sleeping well? Sleep consulting helps establish a healthy routine, respecting your child's development and promoting restful nights for the whole family.",
      cta: "Schedule Sleep Consultation"
    },
    benefits: {
      title: "Benefits of Sleep Consulting",
      subtitle: "Transform your family's nights",
      items: [
        {
          icon: Moon,
          title: "Peaceful Nights",
          description: "Your baby will learn to sleep independently, with fewer night wakings."
        },
        {
          icon: Clock,
          title: "Structured Routine",
          description: "We create a personalized routine that respects your child's and family's needs."
        },
        {
          icon: Heart,
          title: "Gentle Approach",
          description: "Respectful methods that consider the emotional bond and baby's temperament."
        }
      ]
    },
    signs: {
      title: "Signs Your Child Needs Help",
      subtitle: "Recognize when to seek professional guidance",
      items: [
        "Takes more than 30 minutes to fall asleep",
        "Wakes up multiple times during the night",
        "Only sleeps while being held or nursing",
        "Very short or irregular naps",
        "Wakes up too early in the morning",
        "Resistance at bedtime",
        "Excessive tiredness during the day",
        "Frequent irritability"
      ]
    },
    howItWorks: {
      title: "How Consulting Works",
      subtitle: "A personalized and guided process",
      steps: [
        {
          number: "1",
          title: "Initial Assessment",
          description: "We analyze the current routine, sleep history and your child's specific needs."
        },
        {
          number: "2",
          title: "Personalized Plan",
          description: "We develop a custom sleep plan for your family."
        },
        {
          number: "3",
          title: "Guided Implementation",
          description: "Support during the implementation of routine changes."
        },
        {
          number: "4",
          title: "Ongoing Support",
          description: "Adjustments and guidance throughout the adaptation process."
        }
      ]
    },
    ages: {
      title: "For All Ages",
      subtitle: "We serve babies and children at different stages",
      items: [
        {
          icon: Baby,
          title: "Newborns (0-3 months)",
          description: "Guidance to establish good sleep habits from the start."
        },
        {
          icon: Moon,
          title: "Babies (4-12 months)",
          description: "Ideal phase to work on sleep independence."
        },
        {
          icon: Star,
          title: "Children (1-5 years)",
          description: "Routine adjustments and important transitions like removing pacifier or changing beds."
        }
      ]
    },
    testimonial: {
      text: "Sleep consulting changed our lives! My son had been sleeping poorly for months and, with Dr. Fernanda's guidance, within a few weeks we had peaceful nights.",
      author: "Patient's mother"
    },
    cta: {
      title: "Ready for Peaceful Nights?",
      description: "Schedule a sleep consultation and transform your family's quality of life.",
      button: "Schedule via WhatsApp"
    },
    seo: {
      location: "Office in Paraíso, São Paulo - Near the Subway"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 text-white relative overflow-hidden">
        {/* Stars decoration */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-10 h-10 text-yellow-300" />
                <span className="text-yellow-300 font-medium">Dra. Fernanda Kruger</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {content.hero.title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-[#fdb4be]">
                {content.hero.subtitle}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {content.hero.description}
              </p>
              <p className="text-sm text-gray-400">
                {content.seo.location}
              </p>
              <Button size="lg" className="bg-[#fdb4be] hover:bg-[#fdb4be]/90 text-gray-900 font-semibold" asChild>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <Moon className="w-5 h-5 mr-2" />
                  {content.hero.cta}
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-gradient-to-br from-[#fdb4be]/30 to-[#83b2ac]/30 rounded-full flex items-center justify-center">
                  <Moon className="w-32 h-32 text-yellow-300" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#fdb4be] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {content.benefits.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.benefits.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.items.map((benefit, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 border-[#83b2ac]/20">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[#83b2ac]/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-[#83b2ac]" />
                  </div>
                  <CardTitle className="text-xl text-[#83b2ac]">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
                {content.signs.title}
              </h2>
              <p className="text-gray-600">
                {content.signs.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.signs.items.map((sign, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <AlertCircle className="w-5 h-5 text-[#fdb4be] flex-shrink-0" />
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {content.howItWorks.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.howItWorks.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.howItWorks.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#fdb4be] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ages Section */}
      <section className="py-20 bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {content.ages.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.ages.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.ages.items.map((age, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[#fdb4be]/10 rounded-full flex items-center justify-center mb-4">
                    <age.icon className="w-8 h-8 text-[#fdb4be]" />
                  </div>
                  <CardTitle className="text-lg text-[#83b2ac]">
                    {age.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 text-sm">
                    {age.description}
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
            <div className="bg-accent/50 p-8 rounded-2xl">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-4">
                "{content.testimonial.text}"
              </p>
              <p className="text-[#83b2ac] font-semibold">
                — {content.testimonial.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
        <div className="container mx-auto px-4 text-center">
          <Moon className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {content.cta.title}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
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

export default SleepConsulting;

