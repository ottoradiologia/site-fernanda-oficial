import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const About = () => {
  const { t, language } = useLanguage();
  const a = t.pages.about;
  const pt = language === 'pt';
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";

  // Cada parágrafo da trajetória com o ano correspondente
  const story = [
    { year: '2009', text: a.content.paragraph3 },
    { year: '2016', text: a.content.paragraph4 },
    { year: '2020', text: a.content.paragraph5 },
    { year: '2022', text: a.content.paragraph6 },
    { year: '2025', text: a.content.paragraph7 },
    { year: '2025', text: a.content.paragraph8 },
  ];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Abertura */}
        <section className="overflow-hidden bg-gradient-to-b from-brand-sage to-brand-paper">
          <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:py-20">
            <div className="text-center lg:text-left">
              <img
                src="/images/hero/logo-principal-recortado.webp"
                alt="Dra. Fernanda Kruger – Pediatria"
                width={900}
                height={634}
                className="mx-auto mb-6 h-auto w-[170px] lg:mx-0 lg:w-[210px]"
              />
              <span className="eyebrow">{pt ? 'Sobre mim' : 'About me'}</span>
              <h1 className="mt-3 text-[34px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[50px]">
                {a.hero.title}
              </h1>
              <p
                className="mt-4 text-[22px] italic leading-snug text-brand-roseDeep lg:text-[26px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                {a.content.paragraph1}
              </p>
              <p className="mx-auto mt-4 max-w-[32em] text-lg text-brand-muted lg:mx-0">{a.hero.subtitle}</p>
            </div>
            <div className="relative mx-auto w-full max-w-[440px]">
              <span aria-hidden="true" className="absolute inset-x-2 bottom-0 top-[14%] rounded-t-full bg-brand-rose/35" />
              <img
                src="/images/doctor/fernanda-e-filho-sem-fundo.webp"
                alt="Dra. Fernanda Kruger com seu filho"
                width={950}
                height={1200}
                fetchPriority="high"
                className="relative mx-auto h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Trajetória em linha do tempo */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <span className="eyebrow">{pt ? 'Minha história' : 'My story'}</span>
            <h2 className="mb-10 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
              {a.content.paragraph2}
            </h2>
            <ol className="relative border-l-2 border-brand-rose/50 pl-7 sm:pl-9">
              {story.map((item, index) => (
                <li key={index} className="relative pb-9 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-[3px] border-brand-paper bg-brand-rose sm:-left-[45px]" />
                  <span
                    className="block text-[26px] leading-none text-brand-roseDeep"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {item.year}
                  </span>
                  <p className="mt-2 text-[17px] leading-relaxed text-brand-muted">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Formação e qualificações */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
              <div className="relative mx-auto w-full max-w-[420px]">
                <span aria-hidden="true" className="absolute inset-x-4 bottom-0 top-[18%] rounded-t-full bg-brand-rose/35" />
                <img
                  src="/images/doctor/fer-sentada-sem-fundo.webp"
                  alt="Dra. Fernanda Favali Kruger, pediatra"
                  width={823}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="relative mx-auto h-auto w-full"
                />
              </div>
              <div>
                <span className="eyebrow">{a.qualifications.cardTitle}</span>
                <h2 className="mb-6 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
                  {a.qualifications.title}
                </h2>
                <ul className="grid gap-3">
                  {a.qualifications.items.map((item) => (
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

        {/* Missão e diferencial */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <h2 className="mb-8 text-center text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-12 lg:text-[42px]">
              {a.philosophy.title}
            </h2>
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
              <div className="rounded-[24px] bg-brand-roseWash p-7 lg:p-9">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-white">
                  <Heart className="h-5 w-5 text-brand-roseDeep" />
                </span>
                <h3 className="font-display-soft mb-2 text-[24px] text-brand-tealDeep">{a.philosophy.mission.title}</h3>
                <p className="leading-relaxed text-brand-muted">{a.philosophy.mission.description}</p>
              </div>
              <div className="rounded-[24px] bg-brand-mist p-7 lg:p-9">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-white">
                  <Sparkles className="h-5 w-5 text-brand-tealDeep" />
                </span>
                <h3 className="font-display-soft mb-2 text-[24px] text-brand-tealDeep">{a.philosophy.differential.title}</h3>
                <p className="leading-relaxed text-brand-muted">{a.philosophy.differential.description}</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
                {t.common.header.scheduleAppointment}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
