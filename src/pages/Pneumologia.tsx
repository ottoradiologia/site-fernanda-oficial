import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wind, Heart, Shield, Baby, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const Pneumologia = () => {
  const { t, language } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta%20de%20Pneumologia%20Pediátrica.";
  const p = t.pages.pneumologia;
  const pt = language === 'pt';

  const conditions = [
    { icon: Wind, ...p.conditions.condition1 },
    { icon: Baby, ...p.conditions.condition2 },
    { icon: Shield, ...p.conditions.condition3 },
    { icon: Heart, ...p.conditions.condition4 },
  ];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Abertura */}
        <section className="overflow-hidden bg-gradient-to-b from-brand-sage to-brand-paper">
          <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:py-20">
            <div className="text-center lg:text-left">
              <span className="eyebrow">{pt ? 'Asma · bronquiolite · chiado' : 'Asthma · bronchiolitis · wheezing'}</span>
              <h1 className="mt-3 text-[34px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[52px]">
                {p.hero.title}
              </h1>
              <p
                className="mt-4 text-[22px] italic leading-snug text-brand-roseDeep lg:text-[28px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                {p.hero.subtitle}
              </p>
              <p className="mx-auto mt-5 max-w-[32em] text-lg text-brand-muted lg:mx-0">{p.hero.description}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${roseButton} mt-7`}>
                {p.cta.button}
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-[400px]">
              <span aria-hidden="true" className="absolute inset-x-3 bottom-0 top-[16%] rounded-t-full bg-brand-rose/35" />
              <img
                src="/images/doctor/fer-espacador.webp"
                alt="Dra. Fernanda Kruger demonstrando o espaçador para bombinha de asma"
                width={930}
                height={1400}
                fetchPriority="high"
                className="relative mx-auto block h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* A consulta */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12">
            <div>
              <span className="eyebrow">{pt ? 'Formação pela UNICAMP' : 'Trained at UNICAMP'}</span>
              <h2 className="mb-5 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
                {p.consultation.title}
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-brand-muted">
                <p>{p.consultation.paragraph1}</p>
                <p>{p.consultation.paragraph3}</p>
              </div>
            </div>
            <div className="self-center rounded-[28px] bg-brand-roseWash p-7 lg:p-10">
              <span className="eyebrow text-brand-roseText">{pt ? 'Quando procurar' : 'When to come'}</span>
              <p className="mt-3 text-[18px] leading-relaxed text-brand-ink lg:text-[20px]">{p.consultation.paragraph2}</p>
            </div>
          </div>
        </section>

        {/* Condições tratadas */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <h2 className="mb-8 text-center text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-12 lg:text-[42px]">
              {p.conditions.title}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {conditions.map((condition) => (
                <div key={condition.title} className="rounded-[24px] border border-brand-line bg-white p-6">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand-mist">
                    <condition.icon className="h-5 w-5 text-brand-tealDeep" />
                  </span>
                  <h3 className="font-display-soft mb-2 text-[22px] leading-tight text-brand-tealDeep">{condition.title}</h3>
                  <p className="text-[15px] leading-relaxed text-brand-muted">{condition.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que está incluído */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-10 lg:text-[42px]">
              {p.includes.title}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {p.includes.items.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white px-5 py-4">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-tealDeep" />
                  <span className="text-[16px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-brand-mist py-16 text-center lg:py-20">
          <div className="container mx-auto px-4">
            <span className="eyebrow">{p.cta.title}</span>
            <h2 className="mx-auto mt-3 max-w-[20em] text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
              {p.cta.finalTitle}
            </h2>
            <p className="mx-auto mb-7 mt-3 max-w-[34em] text-brand-muted">{p.cta.finalDescription}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
              {p.cta.finalButton}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pneumologia;
