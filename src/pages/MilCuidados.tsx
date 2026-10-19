import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Baby, Heart, Calendar, Syringe, Stethoscope, Shield, Check, Star, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const serif = { fontFamily: "'Fraunces', Georgia, serif" };

const MilCuidados = () => {
  const { t, language } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Programa%20Mil%20Cuidados.";
  const m = t.pages.milcuidados;
  const pt = language === 'pt';

  const facts = pt
    ? [
        { label: 'Para quem', value: 'Do bebê ao adolescente' },
        { label: 'Duração', value: 'A partir de 3 meses' },
        { label: 'Consultas', value: 'Sem pressa, regulares' },
        { label: 'Vacinas', value: 'Podem entrar no pacote' },
      ]
    : [
        { label: 'For', value: 'From babies to teens' },
        { label: 'Duration', value: 'From 3 months' },
        { label: 'Consultations', value: 'Unhurried, regular' },
        { label: 'Vaccines', value: 'Can be included' },
      ];

  const benefits = [
    { icon: Baby, ...m.benefits.benefit1 },
    { icon: Calendar, ...m.benefits.benefit2 },
    { icon: Syringe, ...m.benefits.benefit3 },
    { icon: Stethoscope, ...m.benefits.benefit4 },
    { icon: Heart, ...m.benefits.benefit5 },
    { icon: Shield, ...m.benefits.benefit6 },
  ];

  const areas = [m.areas.area1, m.areas.area2, m.areas.area3, m.areas.area4];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Abertura em destaque */}
        <section className="overflow-hidden bg-gradient-to-br from-brand-roseWash via-brand-paper to-brand-sage">
          <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-12 lg:py-20">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-rose px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-brand-btnInk">
                <Star className="h-3.5 w-3.5 fill-current" />
                {pt ? 'Programa de acompanhamento' : 'Follow-up program'}
              </span>
              <h1 className="mt-5 text-[40px] font-normal leading-[1.02] text-brand-tealDeep lg:text-[64px]">
                {m.hero.title}
              </h1>
              <p className="mt-4 text-[22px] italic leading-snug text-brand-roseDeep lg:text-[27px]" style={{ ...serif, fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                {m.hero.subtitle}
              </p>
              <p className="mx-auto mt-5 max-w-[32em] text-lg text-brand-muted lg:mx-0">{m.hero.description}</p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
                  {m.cta.button}
                </a>
                <a href="#incluido" className="inline-flex items-center gap-1.5 border-b-[1.5px] border-brand-rose pb-0.5 font-semibold text-brand-tealDeep">
                  {m.includes.title} <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[480px]">
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[10%] rounded-t-full bg-brand-rose/40" />
              <img
                src="/images/doctor/fernanda-e-filho-sem-fundo.webp"
                alt="Dra. Fernanda examinando uma criança com o estetoscópio"
                width={950}
                height={1200}
                fetchPriority="high"
                className="relative mx-auto h-auto w-[92%]"
              />
            </div>
          </div>
        </section>

        {/* Faixa de destaques */}
        <section className="border-y border-brand-line bg-white">
          <dl className="container mx-auto grid grid-cols-2 px-4 lg:grid-cols-4 lg:px-12">
            {facts.map((fact, i) => (
              <div key={fact.label} className={`py-5 lg:py-6 ${i % 2 === 1 ? 'pl-5' : ''} ${i > 0 ? 'lg:border-l lg:border-brand-line lg:pl-6' : ''}`}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-roseText">{fact.label}</dt>
                <dd className="mt-1 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* O que é + vídeo */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12">
            <div>
              <span className="eyebrow">{pt ? 'Conheça o programa' : 'About the program'}</span>
              <h2 className="mb-5 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">{m.whatIs.title}</h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-brand-muted">
                <p>{m.whatIs.paragraph1}</p>
                <p>{m.whatIs.paragraph2}</p>
                <p>{m.whatIs.paragraph3}</p>
              </div>
              <p className="mt-6 border-l-4 border-brand-rose pl-4 text-[18px] leading-relaxed text-brand-ink" style={serif}>
                {m.whatIs.paragraph4}
              </p>
            </div>
            <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[28px] bg-brand-sage shadow-[0_24px_50px_-30px_rgba(52,65,62,.55)]">
              <video
                className="block h-auto w-full"
                controls
                playsInline
                preload="metadata"
                poster="/images/clinic/maca.webp"
              >
                <source src="/images/clinic/milcuidados.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Áreas de acompanhamento */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="mb-8 max-w-[40em] lg:mb-12">
              <span className="eyebrow">{pt ? 'Como funciona' : 'How it works'}</span>
              <h2 className="mb-3 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">{m.areas.title}</h2>
              <p className="text-brand-muted">{m.areas.description}</p>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area, i) => (
                <li key={area.title} className="relative rounded-[24px] bg-white p-6 pt-7">
                  <span className="block text-[44px] leading-none text-brand-rose" style={serif}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display-soft mb-2 mt-3 text-[22px] leading-tight text-brand-tealDeep">{area.title}</h3>
                  <p className="text-[15px] leading-relaxed text-brand-muted">{area.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <h2 className="mb-8 text-center text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-12 lg:text-[42px]">{m.benefits.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[24px] border border-brand-line bg-white p-6 lg:p-7">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-brand-roseWash">
                    <benefit.icon className="h-5 w-5 text-brand-roseDeep" />
                  </span>
                  <h3 className="font-display-soft mb-2 text-[22px] leading-tight text-brand-tealDeep">{benefit.title}</h3>
                  <p className="text-[15px] leading-relaxed text-brand-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que está incluído */}
        <section id="incluido" className="scroll-mt-24 pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="rounded-[32px] bg-brand-roseWash p-7 sm:p-10 lg:p-14">
              <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
                <div>
                  <span className="eyebrow text-brand-roseText">{pt ? 'Programa Mil Cuidados' : 'Mil Cuidados Program'}</span>
                  <h2 className="mb-4 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">{m.includes.title}</h2>
                  <p className="mb-7 text-brand-muted">{m.cta.description}</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
                    {m.cta.button}
                  </a>
                </div>
                <ul className="grid gap-3">
                  {m.includes.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-tealDeep" />
                      <span className="text-[15.5px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-brand-tealDeep py-16 text-center text-white lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mx-auto max-w-[20em] text-[30px] font-normal leading-[1.1] text-white lg:text-[44px]">{m.cta.finalTitle}</h2>
            <p className="mx-auto mb-8 mt-4 max-w-[34em] text-lg font-medium text-white">{m.cta.finalDescription}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
              {m.cta.finalButton}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MilCuidados;
