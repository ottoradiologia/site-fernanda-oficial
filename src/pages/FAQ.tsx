import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqData = [
    {
      category: "Sobre os Serviços",
      questions: [
        {
          question: "Quais serviços a Dra. Fernanda Kruger oferece?",
          answer: "A Dra. Fernanda Kruger oferece uma ampla gama de serviços pediátricos, incluindo consulta médica particular para avaliação de rotina, vacinas (EM BREVE), tratamento de doenças e orientação sobre saúde infantil."
        },
        {
          question: "Qual é a faixa etária atendida?",
          answer: "A Dra. Fernanda atende crianças desde o nascimento até os 12 anos, garantindo cuidados adequados para cada fase do desenvolvimento."
        }
      ]
    },
    {
      category: "Sobre as Consultas",
      questions: [
        {
          question: "Qual o tempo de duração da consulta?",
          answer: "As consultas particulares duram cerca de 1 hora, para conversar, orientar e examinar sua criança sem pressa e com todo o cuidado que ela merece."
        },
        {
          question: "As consultas têm retorno?",
          answer: "As consultas não têm retorno presencial. Todos os pacientes terão acompanhamento por 30 dias pelo WhatsApp para dúvidas e envio de resultados de exames. Orientações sobre resultados serão feitas por telemedicina. Em caso de necessidade de um novo exame físico, a Dra. Fernanda irá solicitar sem custos adicionais, conforme avaliação individualizada."
        }
      ]
    },
    {
      category: "Agendamento e Pagamento",
      questions: [
        {
          question: "Como agendar uma consulta?",
          answer: "Você pode agendar uma consulta enviando uma mensagem para nosso WhatsApp (11) 99407-7447, clicando no botão \"Agende uma consulta\", ou preenchendo o formulário de agendamento em nosso site."
        },
        {
          question: "Atende Convênio Médico?",
          answer: "Não, somente consultas particulares para proporcionar um atendimento humanizado e personalizado. Estamos em fase de credenciamento em alguns convênios. Em breve, mais informações."
        },
        {
          question: "Emite Nota Fiscal para reembolso?",
          answer: "Sim, emitimos nota fiscal para que você possa solicitar o reembolso pelo seu convênio médico."
        }
      ]
    },
    {
      category: "Informações Locais",
      questions: [
        {
          question: "O consultório possui estacionamento?",
          answer: "Não possuímos estacionamento próprio, porém há estacionamentos pagos em frente ao prédio e nos arredores."
        },
        {
          question: "Qual a estação de Metrô mais próxima?",
          answer: "Estamos localizados a 220m (cerca de 3 minutos caminhando) da estação Paraíso do Metrô (linhas 1-Azul e 2-Verde)."
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
              Dúvidas Frequentes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre respostas para as principais perguntas sobre nossos serviços e atendimento
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
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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
            Não encontrou sua resposta?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e teremos prazer em esclarecer suas dúvidas
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/5511994077447" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
