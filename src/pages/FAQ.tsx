import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.consultation);
    return `https://wa.me/5511994077447?text=${message}`;
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

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-[#83b2ac] mb-6 text-center">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
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
