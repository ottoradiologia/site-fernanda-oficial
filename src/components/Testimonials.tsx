import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = language === 'pt' ? [
    {
      name: "Mariana S.",
      role: "Mãe do Pedro, 2 anos",
      text: "A Dra. Fernanda é incrível! Meu filho tinha muita dificuldade para dormir e após as consultas de consultoria do sono, nossa rotina mudou completamente. Atendimento humanizado e sem pressa.",
      rating: 5,
      highlight: "Consultoria do Sono"
    },
    {
      name: "Carolina M.",
      role: "Mãe da Sofia, 8 meses",
      text: "Levei minha filha para vacinar na Mil Vacinas e fiquei encantada. A equipe é super acolhedora e a Dra. Fernanda explicou tudinho sobre cada vacina. Sofia nem chorou!",
      rating: 5,
      highlight: "Vacinação Humanizada"
    },
    {
      name: "Juliana R.",
      role: "Mãe do Lucas, 4 anos",
      text: "Depois de passar por vários pediatras, finalmente encontramos a Dra. Fernanda. Ela trata meu filho com tanto carinho! Ele adora ir às consultas. Recomendo demais!",
      rating: 5,
      highlight: "Pediatria"
    },
    {
      name: "Amanda L.",
      role: "Mãe do Theo, 1 ano",
      text: "Meu filho tinha bronquiolite de repetição e a Dra. Fernanda, como pneumopediatra, fez toda diferença no tratamento. Hoje ele está muito melhor. Profissional excepcional!",
      rating: 5,
      highlight: "Pneumopediatria"
    }
  ] : [
    {
      name: "Mariana S.",
      role: "Pedro's mom, 2 years old",
      text: "Dr. Fernanda is amazing! My son had great difficulty sleeping and after the sleep consulting sessions, our routine changed completely. Humanized care without rushing.",
      rating: 5,
      highlight: "Sleep Consulting"
    },
    {
      name: "Carolina M.",
      role: "Sofia's mom, 8 months old",
      text: "I took my daughter to get vaccinated at Mil Vacinas and I was delighted. The team is super welcoming and Dr. Fernanda explained everything about each vaccine. Sofia didn't even cry!",
      rating: 5,
      highlight: "Humanized Vaccination"
    },
    {
      name: "Juliana R.",
      role: "Lucas' mom, 4 years old",
      text: "After going through several pediatricians, we finally found Dr. Fernanda. She treats my son with such care! He loves going to appointments. Highly recommend!",
      rating: 5,
      highlight: "Pediatrics"
    },
    {
      name: "Amanda L.",
      role: "Theo's mom, 1 year old",
      text: "My son had recurrent bronchiolitis and Dr. Fernanda, as a pediatric pulmonologist, made all the difference in the treatment. Today he is much better. Exceptional professional!",
      rating: 5,
      highlight: "Pediatric Pulmonology"
    }
  ];

  const title = language === 'pt' 
    ? "O que as mães dizem" 
    : "What mothers say";
  
  const subtitle = language === 'pt'
    ? "Histórias reais de famílias que confiam em nosso cuidado"
    : "Real stories from families who trust our care";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative flex-grow mb-4">
                  <Quote className="w-8 h-8 text-[#83b2ac]/20 absolute -top-2 -left-2" />
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10 pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-[#83b2ac]/10 text-[#83b2ac]">
                    {testimonial.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

