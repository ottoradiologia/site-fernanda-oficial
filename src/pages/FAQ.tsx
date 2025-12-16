import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Moon, Stethoscope, Syringe } from 'lucide-react';

const FAQ = () => {
  const { t, language } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.consultation);
    return `https://wa.me/5511994077447?text=${message}`;
  };

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  // Novas categorias específicas por serviço
  const specializedFaqData = language === 'pt' ? {
    sleep: {
      title: "Consultoria do Sono Infantil",
      icon: Moon,
      link: "/consultoria-do-sono",
      questions: [
        {
          question: "Quando procurar consultoria do sono?",
          answer: "Você deve considerar a consultoria do sono quando seu bebê/criança: demora mais de 30 minutos para adormecer, acorda várias vezes à noite, só dorme no colo ou mamando, tem sonecas muito curtas ou irregulares, ou apresenta irritabilidade frequente por cansaço."
        },
        {
          question: "A partir de que idade posso fazer consultoria do sono?",
          answer: "A consultoria do sono pode ser feita desde o nascimento! Para recém-nascidos (0-3 meses), trabalhamos orientações para estabelecer bons hábitos. A partir dos 4 meses, já podemos trabalhar a autonomia do sono de forma mais estruturada."
        },
        {
          question: "Quanto tempo dura o processo de consultoria do sono?",
          answer: "O processo geralmente leva de 2 a 4 semanas para ver resultados significativos. Inclui avaliação inicial, criação do plano personalizado, acompanhamento durante a implementação e ajustes conforme necessário."
        },
        {
          question: "A consultoria do sono funciona mesmo?",
          answer: "Sim! Com a abordagem correta e consistência por parte dos pais, a grande maioria das famílias vê melhoras significativas. Usamos métodos gentis e respeitosos, adaptados ao temperamento do bebê e às necessidades da família."
        }
      ]
    },
    pneumo: {
      title: "Pneumopediatria",
      icon: Stethoscope,
      link: "/pneumopediatria",
      questions: [
        {
          question: "Qual a diferença entre pediatra e pneumopediatra?",
          answer: "O pediatra cuida da saúde geral da criança, enquanto o pneumopediatra é especialista em doenças respiratórias. Como sou ambos, posso oferecer um cuidado completo e integrado, identificando quando uma questão respiratória precisa de atenção especializada."
        },
        {
          question: "Meu filho tem chiado no peito frequente. Devo procurar um pneumopediatra?",
          answer: "Sim! Chiado no peito (sibilância) recorrente é um dos principais motivos para consultar um pneumopediatra. Pode indicar asma, bronquite ou outras condições que precisam de investigação e tratamento adequados."
        },
        {
          question: "Bronquite e asma têm cura?",
          answer: "A bronquite aguda geralmente melhora com o tratamento adequado. Já a asma é uma condição crônica que pode ser muito bem controlada com o tratamento correto, permitindo que a criança tenha uma vida completamente normal."
        },
        {
          question: "Quando devo levar meu filho ao pneumopediatra?",
          answer: "Procure um pneumopediatra quando houver: chiado frequente, tosse que não melhora há mais de 4 semanas, bronquites ou pneumonias de repetição, dificuldade para respirar, cansaço durante atividades físicas, ou se seu filho é prematuro com histórico respiratório."
        }
      ]
    },
    vaccination: {
      title: "Vacinação",
      icon: Syringe,
      link: "/vacinacao",
      questions: [
        {
          question: "Quais vacinas não estão disponíveis no SUS?",
          answer: "Algumas vacinas importantes disponíveis apenas na rede privada incluem: Meningocócica B, Hexavalente (6 em 1), Rotavírus com mais cepas, Pneumocócica 13-valente para todas as doses, HPV 9-valente, entre outras. Na Mil Vacinas, oferecemos todas essas opções."
        },
        {
          question: "Posso vacinar meu filho se ele estiver gripado?",
          answer: "Depende! Se for apenas um resfriado leve, sem febre, geralmente a vacinação pode ser realizada. Porém, em caso de febre ou doença mais significativa, é recomendado aguardar a recuperação. Consulte-nos para avaliar cada caso."
        },
        {
          question: "A vacina dói? Como reduzir o desconforto do meu filho?",
          answer: "Na Mil Vacinas, usamos técnicas de distração e acolhimento para minimizar o desconforto. Também orientamos sobre o uso de anestésico tópico antes da aplicação e a importância do aconchego dos pais durante o procedimento."
        },
        {
          question: "Qual é o calendário vacinal recomendado?",
          answer: "Seguimos o calendário da Sociedade Brasileira de Pediatria (SBP), que pode incluir vacinas além do calendário básico do Ministério da Saúde. Na consulta, faço uma análise individual e recomendo as vacinas mais adequadas para seu filho."
        }
      ]
    }
  } : {
    sleep: {
      title: "Pediatric Sleep Consulting",
      icon: Moon,
      link: "/consultoria-do-sono",
      questions: [
        {
          question: "When should I seek sleep consulting?",
          answer: "You should consider sleep consulting when your baby/child: takes more than 30 minutes to fall asleep, wakes up multiple times at night, only sleeps while being held or nursing, has very short or irregular naps, or frequently shows irritability from tiredness."
        },
        {
          question: "From what age can I do sleep consulting?",
          answer: "Sleep consulting can be done from birth! For newborns (0-3 months), we work on guidance to establish good habits. From 4 months on, we can work on sleep independence in a more structured way."
        },
        {
          question: "How long does the sleep consulting process take?",
          answer: "The process usually takes 2 to 4 weeks to see significant results. It includes initial assessment, creating a personalized plan, monitoring during implementation, and adjustments as needed."
        },
        {
          question: "Does sleep consulting really work?",
          answer: "Yes! With the right approach and consistency from parents, the vast majority of families see significant improvements. We use gentle and respectful methods, adapted to the baby's temperament and family needs."
        }
      ]
    },
    pneumo: {
      title: "Pediatric Pulmonology",
      icon: Stethoscope,
      link: "/pneumopediatria",
      questions: [
        {
          question: "What's the difference between a pediatrician and a pediatric pulmonologist?",
          answer: "A pediatrician takes care of the child's general health, while a pediatric pulmonologist specializes in respiratory diseases. Since I'm both, I can offer complete and integrated care, identifying when a respiratory issue needs specialized attention."
        },
        {
          question: "My child has frequent wheezing. Should I see a pediatric pulmonologist?",
          answer: "Yes! Recurrent wheezing is one of the main reasons to consult a pediatric pulmonologist. It may indicate asthma, bronchitis, or other conditions that need proper investigation and treatment."
        },
        {
          question: "Can bronchitis and asthma be cured?",
          answer: "Acute bronchitis usually improves with proper treatment. Asthma is a chronic condition that can be very well controlled with the right treatment, allowing the child to have a completely normal life."
        },
        {
          question: "When should I take my child to a pediatric pulmonologist?",
          answer: "See a pediatric pulmonologist when there is: frequent wheezing, cough that hasn't improved for more than 4 weeks, recurrent bronchitis or pneumonia, difficulty breathing, fatigue during physical activities, or if your child is premature with respiratory history."
        }
      ]
    },
    vaccination: {
      title: "Vaccination",
      icon: Syringe,
      link: "/vacinacao",
      questions: [
        {
          question: "Which vaccines are not available in the public health system?",
          answer: "Some important vaccines available only in private clinics include: Meningococcal B, Hexavalent (6 in 1), Rotavirus with more strains, Pneumococcal 13-valent for all doses, HPV 9-valent, among others. At Mil Vacinas, we offer all these options."
        },
        {
          question: "Can I vaccinate my child if they have a cold?",
          answer: "It depends! If it's just a mild cold without fever, vaccination can usually be done. However, in case of fever or more significant illness, it's recommended to wait for recovery. Contact us to evaluate each case."
        },
        {
          question: "Does the vaccine hurt? How to reduce my child's discomfort?",
          answer: "At Mil Vacinas, we use distraction and comfort techniques to minimize discomfort. We also guide on using topical anesthetic before application and the importance of parents' comfort during the procedure."
        },
        {
          question: "What is the recommended vaccination schedule?",
          answer: "We follow the Brazilian Society of Pediatrics (SBP) schedule, which may include vaccines beyond the basic Ministry of Health schedule. During the consultation, I do an individual analysis and recommend the most suitable vaccines for your child."
        }
      ]
    }
  };
  
  const faqData = [
    {
      category: t.pages.faq.categories.services.title,
      questions: [
        {
          question: t.pages.faq.categories.services.q1.question,
          answer: t.pages.faq.categories.services.q1.answer
        },
        {
          question: t.pages.faq.categories.services.q2.question,
          answer: t.pages.faq.categories.services.q2.answer
        }
      ]
    },
    {
      category: t.pages.faq.categories.consultations.title,
      questions: [
        {
          question: t.pages.faq.categories.consultations.q1.question,
          answer: t.pages.faq.categories.consultations.q1.answer
        }
      ]
    },
    {
      category: t.pages.faq.categories.scheduling.title,
      questions: [
        {
          question: t.pages.faq.categories.scheduling.q1.question,
          answer: t.pages.faq.categories.scheduling.q1.answer
        },
        {
          question: t.pages.faq.categories.scheduling.q2.question,
          answer: t.pages.faq.categories.scheduling.q2.answer,
          hasLink: true
        },
        {
          question: t.pages.faq.categories.scheduling.q3.question,
          answer: t.pages.faq.categories.scheduling.q3.answer
        },
        {
          question: t.pages.faq.categories.scheduling.q4.question,
          answer: t.pages.faq.categories.scheduling.q4.answer
        }
      ]
    },
    {
      category: t.pages.faq.categories.plans.title,
      questions: [
        {
          question: t.pages.faq.categories.plans.q1.question,
          answer: t.pages.faq.categories.plans.q1.answer
        },
        {
          question: t.pages.faq.categories.plans.q2.question,
          answer: t.pages.faq.categories.plans.q2.answer
        }
      ]
    },
    {
      category: t.pages.faq.categories.local.title,
      questions: [
        {
          question: t.pages.faq.categories.local.q1.question,
          answer: t.pages.faq.categories.local.q1.answer
        },
        {
          question: t.pages.faq.categories.local.q2.question,
          answer: t.pages.faq.categories.local.q2.answer
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              {t.pages.faq.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.pages.faq.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Services FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#83b2ac] mb-8 text-center">
              {language === 'pt' ? 'Serviços Especializados' : 'Specialized Services'}
            </h2>
            
            {Object.entries(specializedFaqData).map(([key, category], categoryIndex) => (
              <div key={key} className="mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#83b2ac]/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#83b2ac]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#83b2ac]">
                    {category.title}
                  </h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`specialized-${categoryIndex}-${index}`}
                      className="bg-white border border-[#83b2ac]/20 rounded-lg shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#83b2ac]/5 rounded-lg">
                        <span className="font-medium text-gray-900">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="text-center mt-4">
                  <Link 
                    to={getLocalizedPath(category.link)}
                    className="text-[#83b2ac] hover:text-[#6a9c96] font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    {language === 'pt' ? 'Saiba mais sobre ' : 'Learn more about '}
                    {category.title}
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQ Content */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#83b2ac] mb-8 text-center">
              {language === 'pt' ? 'Informações Gerais' : 'General Information'}
            </h2>
            
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-xl font-bold text-[#83b2ac] mb-6 text-center">
                  {category.category}
                </h3>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`general-${categoryIndex}-${index}`}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                          {item.hasLink && (
                            <span className="block mt-3">
                              <a 
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2"
                              >
                                <span>📱</span>
                                WhatsApp (11) 99407-7447
                              </a>
                            </span>
                          )}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.pages.faq.cta.title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pages.faq.cta.description}
          </p>
          <div className="flex justify-center">
            <a 
              href={getWhatsAppUrl()}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>📱</span>
              {t.pages.faq.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
