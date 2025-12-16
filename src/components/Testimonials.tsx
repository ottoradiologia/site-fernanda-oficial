import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = language === 'pt' ? [
    {
      name: "Luisa Amorim",
      role: "Avaliação Google",
      text: "Eu não tenho palavras para descrever e agradecer o trabalho da Dra. Fernanda. Ela olha para as crianças com carinho, calma, paciência e amor, sem deixar de lado todo o conhecimento técnico. Por ela ser mãe, entende os desafios das famílias. Recomendo de olhos fechados.",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Reggiani de Sá",
      role: "Avaliação Google",
      text: "Minha filha está em tratamento para bronquite e tive uma ótima experiência, o consultório muito acolhedor e a Dra. Fernanda muito gentil e profissional, fiquei encantada com tudo!",
      rating: 5,
      highlight: "Pneumopediatria"
    },
    {
      name: "Rita Silva",
      role: "Avaliação Google",
      text: "A primeira vez que minha filha foi, eu amei! Excelente médica, atenciosa com o que faz, responde nossas dúvidas, explica tudo muito claramente. Só sei que amei.",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Gabs Paschoin",
      role: "Avaliação Google",
      text: "Uma profissional excelente, muito atenciosa e cuidadosa, tirou todas nossas dúvidas, ótima experiência!!! Consultório impecável!!",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Eyshila Morais",
      role: "Avaliação Google",
      text: "Excelente profissional, atenciosa, paciente! Ambiente aconchegante e divertido ao mesmo tempo! Amei",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Marcileide Apolinario",
      role: "Avaliação Google",
      text: "A médica foi muito atenciosa e carinhosa, eu e minha família nos sentimos extremamente acolhidos. Nota máxima!",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Paty Lima",
      role: "Avaliação Google",
      text: "Uma excelente profissional, muito atenciosa, tira todas as nossas dúvidas. Consultório muito limpo e organizado.",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Michele Passos",
      role: "Avaliação Google",
      text: "Excelente pediatra, muito atenciosa e dedicada.",
      rating: 5,
      highlight: "Pediatria"
    }
  ] : [
    {
      name: "Luisa Amorim",
      role: "Google Review",
      text: "I have no words to describe and thank Dr. Fernanda's work. She looks at children with affection, calm, patience and love, without leaving aside all her technical knowledge. Being a mother herself, she understands families' challenges. I recommend with my eyes closed.",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Reggiani de Sá",
      role: "Google Review",
      text: "My daughter is being treated for bronchitis and I had a great experience, the office is very welcoming and Dr. Fernanda is very kind and professional, I was delighted with everything!",
      rating: 5,
      highlight: "Pediatric Pulmonology"
    },
    {
      name: "Rita Silva",
      role: "Google Review",
      text: "The first time my daughter went, I loved it! Excellent doctor, attentive to what she does, answers our questions, explains everything very clearly. All I know is that I loved it.",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Gabs Paschoin",
      role: "Google Review",
      text: "An excellent professional, very attentive and careful, answered all our questions, great experience!!! Impeccable office!!",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Eyshila Morais",
      role: "Google Review",
      text: "Excellent professional, attentive, patient! Cozy and fun environment at the same time! Loved it",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Marcileide Apolinario",
      role: "Google Review",
      text: "The doctor was very attentive and caring; my family and I felt extremely welcomed. A perfect score!",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Paty Lima",
      role: "Google Review",
      text: "An excellent professional, very attentive, answers all our questions. Very clean and organized office.",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Michele Passos",
      role: "Google Review",
      text: "Excellent pediatrician, very attentive and dedicated.",
      rating: 5,
      highlight: "Pediatrics"
    }
  ];

  const title = language === 'pt' 
    ? "Avaliações do Google" 
    : "Google Reviews";
  
  const subtitle = language === 'pt'
    ? "Veja o que as famílias dizem sobre nosso atendimento"
    : "See what families say about our care";

  return (
    <section className="py-20 bg-gradient-to-br from-[#fdb4be]/10 to-[#83b2ac]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <GoogleIcon />
                </div>
                
                <div className="relative flex-grow mb-4">
                  <Quote className="w-8 h-8 text-[#83b2ac]/20 absolute -top-2 -left-2" />
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10 pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <GoogleIcon />
                    {testimonial.role}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-[#83b2ac]/10 text-[#83b2ac]">
                    {testimonial.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Link para mais avaliações */}
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/maps/place/Dra+Fernanda+Kruger+-+Pediatra/@-23.5745649,-46.6426094,13z/data=!4m8!3m7!1s0x94ce59948838679d:0x78f39d92731204c0!8m2!3d-23.5745649!4d-46.6426094!9m1!1b1!16s%2Fg%2F11w1xvl7gy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#83b2ac] hover:text-[#6a9c96] font-medium transition-colors"
          >
            <GoogleIcon />
            {language === 'pt' ? 'Ver todas as avaliações no Google' : 'See all reviews on Google'}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

