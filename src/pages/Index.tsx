import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParkingList from '@/components/ParkingList';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { homeDesign } from '@/translations/homeDesign';

const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";
const googleReviewsUrl = "https://www.google.com/search?q=Dra+Fernanda+Kruger+Pediatra+Para%C3%ADso+avalia%C3%A7%C3%B5es";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}`;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px] flex-none">
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.3A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 23.9 11.9a11.8 11.8 0 0 0-3.5-8.4Z" />
  </svg>
);

const roseButton =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-rose px-7 py-3.5 text-[15px] font-semibold text-brand-btnInk shadow-[0_8px_20px_-12px_rgba(199,116,134,.7)] transition hover:-translate-y-0.5 hover:bg-brand-roseHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tealDeep focus-visible:ring-offset-2';

const Index = () => {
  const { t, language } = useLanguage();
  const d = homeDesign[language];
  const s = t.pages.index.services;

  const services = [
    { who: d.services.who[1], title: s.service1.title, description: s.service1.description, to: '/servicos' },
    { who: d.services.who[0], title: s.service6?.title, description: s.service6?.description, to: '/consulta-pre-natal' },
    { who: d.services.who[2], title: s.service7?.title, description: s.service7?.description, to: '/pneumologia' },
    { who: d.services.who[3], title: s.service3.title, description: s.service3.description, to: '/consultoria-sono' },
  ];

  const reviews = (t.pages.index.reviews?.items || []).slice(0, 3);

  const clinicPhotos = [
    { src: '/images/clinic/sala-de-espera-3.webp', w: 900, h: 1350 },
    { src: '/images/clinic/consultorio-principal-2.webp', w: 900, h: 1200 },
    { src: '/images/clinic/diversao.webp', w: 800, h: 1067 },
    { src: '/images/clinic/maca.webp', w: 900, h: 1350 },
    { src: '/images/clinic/parede-consultorio.webp', w: 800, h: 1067 },
  ];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink">
      <Header />

      <main>
        {/* Topo clean: foto, frase curta e agendamento */}
        <section className="overflow-hidden bg-gradient-to-b from-brand-sage to-brand-paper">
          <div className="container mx-auto grid items-end gap-0 px-4 lg:min-h-[600px] lg:grid-cols-2 lg:gap-10 lg:px-12">
            <div className="py-7 text-center lg:self-center lg:py-14 lg:text-left">
              <img
                src="/images/hero/logo-principal-recortado.webp"
                alt="Dra. Fernanda Kruger – Pediatria"
                width={900}
                height={634}
                fetchPriority="high"
                className="mx-auto mb-5 h-auto w-[190px] lg:mx-0 lg:mb-7 lg:w-[250px]"
              />
              <h1>
                <span className="eyebrow mb-2.5 block font-montserrat text-[11px] lg:mb-5 lg:text-xs">{d.hero.eyebrow}</span>
                <span className="block text-[36px] font-normal leading-[1.06] text-brand-tealDeep lg:text-[60px]">
                  {d.hero.phrase}{' '}
                  <em className="italic text-brand-roseDeep" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                    {d.hero.highlight}
                  </em>
                </span>
              </h1>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${roseButton} mt-6 w-full px-8 py-4 text-base sm:w-auto lg:mt-9`}>
                {d.hero.button}
              </a>
            </div>
            <figure className="relative order-first m-0 flex justify-center pt-5 lg:order-none lg:self-end lg:pt-9">
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[86%] w-[92%] -translate-x-1/2 rounded-t-full lg:h-[88%] lg:w-[84%]"
                style={{ background: 'linear-gradient(180deg, #FBE6EA, #F9DCE1)' }}
              />
              <img
                src="/images/doctor/fer-hero-clean.webp"
                alt={d.hero.photoAlt}
                width={700}
                height={1025}
                fetchPriority="high"
                className="relative block h-auto w-[76%] lg:w-[min(100%,440px)]"
              />
            </figure>
          </div>
        </section>

        {/* Fatos rápidos (inclui o aviso de atendimento particular) */}
        <section className="border-y border-brand-line bg-brand-paper">
          <div className="container mx-auto px-4 lg:px-12">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {d.facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`py-4 pr-4 lg:border-r lg:border-brand-line lg:py-5 lg:pl-6 ${index === 0 ? 'lg:pl-0' : ''} ${index === 3 ? 'lg:border-r-0' : ''} ${index < 2 ? 'border-b border-brand-line lg:border-b-0' : ''}`}
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-brand-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            {t.pages.index.hero.privateOnly && (
              <p className="my-3 flex items-center justify-center gap-2 rounded-full bg-brand-rose px-4 py-3 text-center text-[15px] font-semibold text-brand-btnInk sm:text-base">
                <Info className="h-5 w-5 flex-shrink-0" />
                {t.pages.index.hero.privateOnly}
              </p>
            )}
          </div>
        </section>

        {/* Atendimentos */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:mb-11 lg:flex-row lg:items-end">
              <div>
                <span className="eyebrow">{d.services.eyebrow}</span>
                <h2 className="mt-2.5 text-[32px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[44px]">{d.services.title}</h2>
              </div>
              <p className="max-w-[28em] text-brand-muted">{d.services.subtitle}</p>
            </div>

            <div className="grid gap-7 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
              <Link to="/mil-cuidados" className="group flex flex-col overflow-hidden rounded-[28px] bg-[#83B2AC] text-white">
                {/* Foto em cima e texto embaixo, para não cobrir os rostos */}
                <div className="relative h-72 overflow-hidden sm:h-80 lg:h-[340px]">
                  <img
                    src="/images/doctor/fernanda-e-filho.webp"
                    alt="Dra. Fernanda examinando uma criança com o estetoscópio"
                    width={800}
                    height={1066}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[50%_18%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex-1 p-6 lg:p-8">
                  <span className="inline-block rounded-full bg-brand-rose px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-btnInk">
                    {d.services.tag}
                  </span>
                  <h3 className="font-display-soft mb-2 mt-3.5 text-[27px] leading-tight lg:text-[34px]">
                    {t.pages.index.milCuidados?.title || 'Programa Mil Cuidados'}
                  </h3>
                  <p className="mb-4 max-w-[30em] text-white/90">{t.pages.index.milCuidados?.description}</p>
                  <span className="inline-flex items-center gap-2 border-b-[1.5px] border-brand-rose pb-0.5 font-semibold">
                    {t.pages.index.milCuidados?.knowProgram || 'Conhecer o Programa'} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>

              <ul className="border-t border-brand-line">
                {services.map((service) => (
                  <li key={service.to + service.title} className="border-b border-brand-line">
                    <Link
                      to={service.to}
                      className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-1.5 py-5 transition-all hover:bg-brand-sage hover:px-4"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-roseText">{service.who}</span>
                      <span className="font-display-soft col-start-1 text-xl leading-snug text-brand-tealDeep lg:text-[23px]">{service.title}</span>
                      <span className="col-start-1 text-[14.5px] text-brand-muted">{service.description}</span>
                      <span className="col-start-2 row-span-3 row-start-1 grid h-10 w-10 place-items-center rounded-full border border-brand-line text-brand-tealDeep transition-colors group-hover:border-brand-tealDeep group-hover:bg-brand-tealDeep group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="border-b border-brand-line">
                  <a
                    href="https://www.milvacinas.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-1.5 py-5 transition-all hover:bg-brand-sage hover:px-4"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-roseText">{d.services.who[4]}</span>
                    <span className="font-display-soft col-start-1 text-xl leading-snug text-brand-tealDeep lg:text-[23px]">{d.services.milVacinasTitle}</span>
                    <span className="col-start-1 text-[14.5px] text-brand-muted">{d.services.milVacinasText}</span>
                    <span className="col-start-2 row-span-3 row-start-1 grid h-10 w-10 place-items-center rounded-full border border-brand-line text-brand-tealDeep transition-colors group-hover:border-brand-tealDeep group-hover:bg-brand-tealDeep group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sobre mim com linha do tempo */}
        <section className="bg-brand-sage py-16 lg:py-24">
          <div className="container mx-auto grid items-start gap-8 px-4 lg:grid-cols-[.85fr_1.15fr] lg:gap-[72px] lg:px-12">
            <img
              src="/images/doctor/fer-sobre-mim.webp"
              alt="Dra. Fernanda Kruger com o estetoscópio"
              width={1000}
              height={1500}
              loading="lazy"
              decoding="async"
              className="mx-auto block aspect-[2/3] w-full max-w-[420px] rounded-[28px] object-cover object-[50%_22%] lg:max-w-none lg:aspect-[3/4]"
            />
            <div>
              <span className="eyebrow">{d.about.eyebrow}</span>
              <h2 className="mb-4 mt-2.5 text-[32px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[44px]">{t.pages.index.about.title}</h2>
              <p className="mb-3.5 max-w-[36em]">{t.pages.index.about.paragraph1}</p>
              <p className="max-w-[36em]">{t.pages.index.about.paragraph2}</p>
              <ol className="my-7">
                {d.about.timeline.map((item) => (
                  <li key={item.year} className="grid grid-cols-[64px_1fr] gap-4 border-t border-[#DCE3D6] py-3">
                    <span className="font-display-soft text-xl text-brand-roseText" style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>{item.year}</span>
                    <span>
                      <b className="font-semibold">{item.title}</b> <span className="text-sm text-brand-muted">· {item.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link to="/sobre-mim" className="link-underline">
                {t.pages.index.about.knowMyStory} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Avaliações */}
        {reviews.length > 0 && (
          <section className="bg-brand-roseWash py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-12">
              <span className="eyebrow">{d.reviews.eyebrow}</span>
              <h2 className="mb-8 mt-2.5 text-[32px] font-normal leading-[1.08] text-brand-tealDeep lg:mb-11 lg:text-[44px]">
                {t.pages.index.reviews?.title}
              </h2>
              <div className="-mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:px-0">
                {reviews.map((review) => (
                  <figure key={review.author} className="m-0 flex w-[85%] flex-none snap-start flex-col gap-4 rounded-[22px] bg-brand-paper px-7 py-7 lg:w-auto">
                    <span aria-hidden="true" className="font-display-soft block text-[56px] leading-[0.6] text-brand-rose">“</span>
                    <blockquote className="font-display-soft m-0 text-[17px] italic leading-relaxed text-brand-ink lg:text-[18px]">
                      {review.text}
                    </blockquote>
                    <figcaption className="mt-auto text-[13px] text-brand-muted">
                      <b className="text-brand-tealDeep">{review.author}</b> · Google
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {t.pages.index.reviews?.seeAllReviews} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Consultório: mosaico de fotos */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:mb-11 lg:flex-row lg:items-end">
              <div>
                <span className="eyebrow">{d.clinic.eyebrow}</span>
                <h2 className="mt-2.5 text-[32px] font-normal leading-[1.08] text-brand-tealDeep lg:text-[44px]">{d.clinic.title}</h2>
              </div>
              <p className="max-w-[28em] text-brand-muted">{d.clinic.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:grid-rows-[260px_260px] lg:gap-4">
              {clinicPhotos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`group relative m-0 overflow-hidden rounded-[20px] ${index === 0 ? 'col-span-2 h-[220px] lg:col-span-1 lg:row-span-2 lg:h-auto' : 'h-[150px] lg:h-auto'}`}
                >
                  <img
                    src={photo.src}
                    alt={d.clinic.captions[index]}
                    width={photo.w}
                    height={photo.h}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-brand-paper/90 px-3 py-1 text-[12.5px] font-semibold text-brand-tealDeep">
                    {d.clinic.captions[index]}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-7">
              <Link to="/consultorio" className="link-underline">
                {t.pages.index.clinic.knowOurSpace} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Agendamento + como chegar */}
        <section className="bg-brand-mist py-16 lg:py-24">
          <div className="container mx-auto grid items-start gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div>
              <span className="eyebrow text-brand-roseText">{d.visit.eyebrow}</span>
              <h2 className="mb-4 mt-2.5 text-[34px] font-normal leading-[1.05] text-brand-tealDeep lg:text-[48px]">{t.pages.index.cta.title}</h2>
              <p className="mb-6 max-w-[30em] text-brand-muted">{t.pages.index.cta.description}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={roseButton}>
                <WhatsAppIcon /> {t.pages.index.cta.scheduleByWhatsApp}
              </a>
              <p className="mt-3.5 text-sm font-semibold text-brand-tealDeep" style={{ fontVariantNumeric: 'tabular-nums' }}>(11) 99407-7447</p>
            </div>
            <dl className="border-t border-[#D6E0D5]">
              <div className="grid gap-1 border-b border-[#D6E0D5] py-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-roseText">{d.visit.address}</dt>
                <dd className="m-0">
                  {t.pages.index.location.address.street}
                  <small className="block text-[13px] text-brand-muted">
                    {t.pages.index.location.address.city} · {t.pages.index.location.address.zip} · {t.pages.index.location.address.building}
                  </small>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-[#D6E0D5] py-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-roseText">{d.visit.metro}</dt>
                <dd className="m-0">
                  {d.visit.metroValue}
                  <small className="block text-[13px] text-brand-muted">{d.visit.metroDetail}</small>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-[#D6E0D5] py-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-roseText">{d.visit.parking}</dt>
                <dd className="m-0">
                  <ParkingList />
                </dd>
              </div>
              <div className="grid gap-1 border-b border-[#D6E0D5] py-4 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-roseText">{d.visit.map}</dt>
                <dd className="m-0">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {d.visit.openMap} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="container mx-auto mt-10 px-4 lg:px-12">
            <div className="overflow-hidden rounded-2xl border border-[#D6E0D5] bg-white shadow-sm">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}&z=17&output=embed`}
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório da Dra. Fernanda Kruger"
                className="block h-80 w-full lg:h-[380px]"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
