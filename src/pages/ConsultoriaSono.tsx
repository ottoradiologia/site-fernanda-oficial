import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Moon, Heart, Clock, Baby, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const serif = { fontFamily: "'Fraunces', Georgia, serif" };

// Estrelas decorativas do céu noturno da abertura (posição em %)
const stars = [
  { top: 14, left: 22, size: 10 },
  { top: 24, left: 74, size: 14 },
  { top: 62, left: 16, size: 12 },
  { top: 72, left: 80, size: 9 },
  { top: 40, left: 88, size: 8 },
  { top: 84, left: 44, size: 11 },
];

const ConsultoriaSono = () => {
  const { t, language } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20de%20Sono.";
  const c = t.pages.consultoriaSono;
  const pt = language === 'pt';

  const benefits = [
    { icon: Moon, ...c.benefits.benefit1 },
    { icon: Heart, ...c.benefits.benefit2 },
    { icon: Clock, ...c.benefits.benefit3 },
    { icon: Baby, ...c.benefits.benefit4 },
  ];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Abertura com céu noturno suave */}
        <section className="overflow-hidden bg-gradient-to-b from-brand-sage to-brand-paper">
          <div className="container mx-auto grid items-center gap-12 px-4 py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:py-20">
            <div className="text-center lg:text-left">
              <span className="eyebrow">{pt ? 'Bebês e famílias' : 'Babies and families'}</span>
              <h1 className="mt-3 text-[36px] font-normal leading-[1.06] text-brand-tealDeep lg:text-[56px]">
                {c.hero.title}
              </h1>
              <p className="mt-4 text-[24px] italic leading-snug text-brand-roseDeep lg:text-[30px]" style={{ ...serif, fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                {c.hero.subtitle}
              </p>
              <p className="mx-auto mt-5 max-w-[32em] text-lg text-brand-muted lg:mx-0">{c.hero.description}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${roseButton} mt-7`}>
                {c.cta.button}
              </a>
            </div>

            <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#CFE0DC] via-[#E6EEF2] to-brand-roseWash shadow-[0_40px_80px_-50px_rgba(52,65,62,.6)]" />
              <div className="absolute inset-[18%] rounded-full bg-white/50 backdrop-blur-sm" />
              <div className="absolute inset-0 grid place-items-center">
                <Moon className="h-[38%] w-[38%] fill-brand-rose text-brand-roseDeep" strokeWidth={1.2} />
              </div>
              {stars.map((s, i) => (
                <Sparkles
                  key={i}
                  className="absolute fill-white text-brand-tealDeep"
                  style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size * 2, height: s.size * 2 }}
                  strokeWidth={1.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div>
              <span className="eyebrow">{pt ? 'Abordagem gentil e respeitosa' : 'Gentle, respectful approach'}</span>
              <h2 className="mb-5 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">{c.howItWorks.title}</h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-brand-muted">
                <p>{c.howItWorks.paragraph1}</p>
                <p>{c.howItWorks.paragraph2}</p>
              </div>
            </div>
            <blockquote className="self-center rounded-[28px] bg-brand-roseWash p-7 lg:p-10">
              <Moon className="mb-4 h-7 w-7 text-brand-roseDeep" strokeWidth={1.5} />
              <p className="text-[22px] leading-snug text-brand-ink lg:text-[26px]" style={{ ...serif, fontVariationSettings: '"SOFT" 100' }}>
                “{c.howItWorks.paragraph3}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-roseText">Dra. Fernanda Favali Kruger</footer>
            </blockquote>
          </div>
        </section>

        {/* Benefícios */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <h2 className="mb-8 text-center text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-12 lg:text-[42px]">{c.benefits.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <div key={b.title} className="group rounded-[24px] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_44px_-30px_rgba(52,65,62,.55)]">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#CFE0DC] to-brand-roseWash">
                    <b.icon className="h-5 w-5 text-brand-tealDeep" />
                  </span>
                  <h3 className="font-display-soft mb-2 text-[22px] leading-tight text-brand-tealDeep">{b.title}</h3>
                  <p className="text-[15px] leading-relaxed text-brand-muted">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que está incluído, em etapas */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <span className="eyebrow">{pt ? 'Passo a passo' : 'Step by step'}</span>
            <h2 className="mb-8 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-12 lg:text-[42px]">{c.includes.title}</h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {c.includes.items.map((item, i) => (
                <li key={item} className="relative rounded-[24px] border border-brand-line bg-white p-6">
                  <span className="block text-[40px] leading-none text-brand-rose" style={serif}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-[15.5px] leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Chamada final */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-roseWash via-white to-[#E6EEF2] px-6 py-14 text-center lg:py-16">
              <Moon aria-hidden="true" className="absolute -right-6 -top-6 h-40 w-40 text-brand-rose/40" strokeWidth={1} />
              <span className="eyebrow">{c.cta.title}</span>
              <h2 className="mx-auto mt-3 max-w-[20em] text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">{c.cta.finalTitle}</h2>
              <p className="mx-auto mb-7 mt-3 max-w-[34em] text-brand-muted">{c.cta.finalDescription}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
                {c.cta.finalButton}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultoriaSono;
