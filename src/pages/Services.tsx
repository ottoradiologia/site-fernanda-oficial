import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const Services = () => {
  const { t, language } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";
  const p = t.pages.services;
  const s = t.pages.index.services;
  const h = t.common.header;
  const pt = language === 'pt';

  const otherServices = [
    { tag: pt ? 'Asma · bronquiolite · chiado' : 'Asthma · bronchiolitis · wheezing', title: s.service7?.title, description: s.service7?.description, to: '/pneumologia' },
    { tag: pt ? 'Gestação' : 'Pregnancy', title: s.service6?.title, description: s.service6?.description, to: '/consulta-pre-natal' },
    { tag: pt ? 'Bebês e famílias' : 'Babies and families', title: s.service3.title, description: s.service3.description, to: '/consultoria-sono' },
    { tag: pt ? 'Programa' : 'Program', title: h.milCuidados || 'Programa Mil Cuidados', description: s.service5.description, to: '/mil-cuidados' },
  ];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Abertura */}
        <section className="bg-gradient-to-b from-brand-sage to-brand-paper py-14 lg:py-20">
          <div className="container mx-auto px-4 text-center lg:px-12">
            <span className="eyebrow">{h.atendimento || h.services}</span>
            <h1 className="mx-auto mt-3 max-w-[18em] text-[34px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[52px]">
              {p.hero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[34em] text-lg text-brand-muted">
              {p.hero.subtitle1} {p.hero.subtitle2}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${roseButton} mt-7`}>
              {p.cta.button}
            </a>
          </div>
        </section>

        {/* Consulta pediátrica em destaque */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-12">
            <img
              src="/images/clinic/assinando.webp"
              alt="Dra. Fernanda atendendo no consultório"
              width={867}
              height={1300}
              loading="lazy"
              decoding="async"
              className="mx-auto block aspect-[4/5] w-full max-w-[460px] rounded-[28px] object-cover lg:max-w-none"
            />
            <div>
              <span className="eyebrow">{pt ? '0 a 12 anos' : '0 to 12 years'}</span>
              <h2 className="mb-5 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">
                {p.practice.title}
              </h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-brand-muted">
                <p>{p.practice.paragraph1}</p>
                <p>{p.practice.paragraph2}</p>
                <p>{p.practice.paragraph3}</p>
                <p className="font-semibold text-brand-ink">{p.practice.paragraph4}</p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.practice.highlights.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-2xl bg-brand-sage px-4 py-3 text-[15px]">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-tealDeep" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${roseButton} mt-8`}>
                {h.scheduleAppointment}
              </a>
            </div>
          </div>
        </section>

        {/* Outros atendimentos */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <span className="eyebrow">{pt ? 'Outros atendimentos' : 'Other services'}</span>
            <h2 className="mb-8 mt-2.5 text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:mb-11 lg:text-[42px]">
              {s.title}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group flex flex-col rounded-[24px] border border-brand-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(52,65,62,.45)]"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-roseText">{service.tag}</span>
                  <h3 className="font-display-soft mb-2 mt-2 text-[22px] leading-tight text-brand-tealDeep">{service.title}</h3>
                  <p className="flex-1 text-[15px] leading-relaxed text-brand-muted">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-tealDeep">
                    {pt ? 'Saiba mais' : 'Learn more'} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Vacinação */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="grid items-center gap-8 rounded-[28px] bg-brand-roseWash p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-14 lg:p-14">
              <img
                src="/images/milvacinas.png"
                alt="Mil Vacinas"
                loading="lazy"
                className="mx-auto h-auto w-[180px] lg:w-[220px]"
              />
              <div>
                <span className="eyebrow">{pt ? 'No mesmo endereço' : 'Same address'}</span>
                <h2 className="mb-4 mt-2.5 text-[28px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[38px]">
                  {p.vaccination.title}
                </h2>
                <p className="mb-3 max-w-[36em] text-brand-muted">{p.vaccination.paragraph1}</p>
                <p className="mb-6 max-w-[36em] text-brand-muted">{p.vaccination.paragraph2}</p>
                <a
                  href="https://www.milvacinas.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border-b-[1.5px] border-brand-rose pb-0.5 font-semibold text-brand-tealDeep"
                >
                  {p.vaccination.knowOurVaccines} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-brand-mist py-16 text-center lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-[30px] font-normal leading-[1.1] text-brand-tealDeep lg:text-[42px]">{p.cta.title}</h2>
            <p className="mx-auto mb-7 mt-3 max-w-[32em] text-brand-muted">{p.cta.description}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
              {p.cta.button}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
