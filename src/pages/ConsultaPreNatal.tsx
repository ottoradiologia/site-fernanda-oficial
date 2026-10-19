import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, Heart, Baby, Calendar, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const ConsultaPreNatal = () => {
  const { t, language } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20Consulta%20Pediátrica%20Pré-Natal.";
  const c = t.pages.consultaPreNatal;
  const pt = language === 'pt';

  const benefits = [
    { icon: Sparkles, ...c.benefits.benefit1 },
    { icon: Heart, ...c.benefits.benefit2 },
    { icon: Baby, ...c.benefits.benefit3 },
    { icon: Calendar, ...c.benefits.benefit4 },
  ];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Abertura */}
        <section className="overflow-hidden bg-gradient-to-b from-brand-sage to-brand-paper">
          <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:py-20">
            <div className="text-center lg:text-left">
              <span className="eyebrow">{pt ? 'Gestação' : 'Pregnancy'}</span>
              <h1 className="mt-3 text-[34px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[52px]">
                {c.hero.title}
              </h1>
              <p
                className="mt-4 text-[24px] italic leading-snug text-brand-roseDeep lg:text-[30px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                {pt ? 'O cuidado pediátrico começa antes do nascimento.' : 'Pediatric care begins before birth.'}
              </p>
              <p className="mx-auto mt-5 max-w-[32em] text-lg text-brand-muted lg:mx-0">
                {c.hero.description}
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${roseButton} mt-7`}>
                {c.cta.button}
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-[420px]">
              <span aria-hidden="true" className="absolute -inset-3 rounded-t-full rounded-b-[32px] bg-brand-rose/30" />
              <img
                src="/images/doctor/fer-mesa.webp"
                alt="Dra. Fernanda Kruger no consultório"
                width={800}
                height={1200}
                fetchPriority="high"
                className="relative block aspect-[4/5] w-full rounded-t-full rounded-b-[28px] object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </section>

        {/* O que é */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12">
            <div>
              <span className="eyebrow">{c.hero.subtitle}</span>
              <h2 className="mb-5 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
                {c.whatIs.title}
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-brand-muted">
                <p>{c.whatIs.paragraph1}</p>
                <p>{c.whatIs.paragraph2}</p>
              </div>
            </div>
            <blockquote className="self-center rounded-[28px] bg-brand-roseWash p-7 lg:p-10">
              <p
                className="text-[22px] leading-snug text-brand-ink lg:text-[26px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontVariationSettings: '"SOFT" 100' }}
              >
                “{c.whatIs.paragraph3}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-roseText">Dra. Fernanda Favali Kruger</footer>
            </blockquote>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <h2 className="mb-8 text-center text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-12 lg:text-[42px]">
              {c.benefits.title}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[24px] border border-brand-line bg-white p-6">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand-roseWash">
                    <benefit.icon className="h-5 w-5 text-brand-roseDeep" />
                  </span>
                  <h3 className="font-display-soft mb-2 text-[21px] leading-tight text-brand-tealDeep">{benefit.title}</h3>
                  <p className="text-[15px] leading-relaxed text-brand-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que abordamos */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <h2 className="mb-8 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-10 lg:text-[42px]">
              {c.topics.title}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {c.topics.items.map((topic) => (
                <li key={topic} className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white px-5 py-4">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-tealDeep" />
                  <span className="text-[16px]">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quando agendar */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="grid items-center gap-6 rounded-[28px] bg-brand-roseWash p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-14">
              <div className="text-center lg:text-left">
                <span className="block text-[64px] font-normal leading-none text-brand-roseDeep lg:text-[88px]" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  32ª
                </span>
                <span className="eyebrow mt-2 block">{pt ? 'semana de gestação' : 'week of pregnancy'}</span>
              </div>
              <div>
                <h2 className="mb-3 text-[28px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[36px]">{c.whenToSchedule.title}</h2>
                <p className="mb-2 text-brand-muted">{c.whenToSchedule.paragraph1}</p>
                <p className="text-brand-muted">{c.whenToSchedule.paragraph2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-brand-mist py-16 text-center lg:py-20">
          <div className="container mx-auto px-4">
            <span className="eyebrow">{c.cta.title}</span>
            <h2 className="mx-auto mt-3 max-w-[20em] text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
              {c.cta.finalTitle}
            </h2>
            <p className="mx-auto mb-7 mt-3 max-w-[34em] text-brand-muted">{c.cta.finalDescription}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
              {c.cta.finalButton}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultaPreNatal;
