import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/5511994077447?text=Ol%C3%A1!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}`;

const WhatsAppIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${className} flex-none`}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.3A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 23.9 11.9a11.8 11.8 0 0 0-3.5-8.4Z" />
  </svg>
);

const Footer = () => {
  const { t, language } = useLanguage();
  const h = t.common.header;

  return (
    <footer className="border-t border-brand-line bg-brand-paper text-sm text-brand-muted">
      {/* Onde nos encontrar: foto do prédio + mapa */}
      <div className="container mx-auto px-4 pt-12 lg:px-12">
        <h2 className="eyebrow mb-4 text-[11px]">{language === 'pt' ? 'Onde nos encontrar' : 'Where to find us'}</h2>
        <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <figure className="overflow-hidden rounded-[18px] bg-white shadow-sm">
            <img
              src="/images/clinic/predio.webp"
              alt="Fachada do Edifício Upside Paraíso"
              width={842}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover md:h-80"
              style={{ objectPosition: '50% 70%' }}
            />
            <figcaption className="px-4 py-2.5 text-center font-medium text-brand-ink">
              Edifício Upside Paraíso · Rua Afonso de Freitas, 59
            </figcaption>
          </figure>
          <div className="h-72 overflow-hidden rounded-[18px] bg-white shadow-sm md:h-auto md:min-h-[20rem]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent('Rua Afonso de Freitas, 59, Paraíso, São Paulo - SP, 04006-050')}&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Dra. Fernanda Kruger"
              className="block h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Faixa de agendamento */}
      <div className="container mx-auto px-4 pt-12 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-5 rounded-[24px] bg-brand-sage px-6 py-7 text-center md:flex-row md:text-left lg:px-10">
          <div>
            <p className="font-display-soft text-[24px] leading-tight text-brand-tealDeep lg:text-[28px]">
              {language === 'pt' ? 'Vamos cuidar juntos do seu pequeno?' : "Let's care for your little one together?"}
            </p>
            <p className="mt-1 text-[15px]">
              {language === 'pt' ? 'Agendamento somente pelo WhatsApp · Não atendemos convênio' : 'Appointments via WhatsApp only · No health insurance'}
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-14px_rgba(37,211,102,.9)] transition hover:-translate-y-0.5 hover:bg-[#1fbe5a]"
          >
            <WhatsAppIcon /> (11) 99407-7447
          </a>
        </div>
      </div>

      <div className="container mx-auto grid gap-10 px-4 pb-10 pt-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-12 lg:pb-7">
        <div>
          <img
            src="/images/hero/logo-principal-recortado.webp"
            alt="Dra. Fernanda Kruger – Pediatria"
            width={900}
            height={634}
            loading="lazy"
            className="h-auto w-[210px]"
          />
          <p className="mt-3 font-semibold text-brand-ink">Dra. Fernanda Favali Kruger</p>
          <p className="mt-1">
            Pediatra · CRM-SP 140.995 · RQE 37669<br />
            Pneumopediatra
          </p>
          <p className="mt-3 max-w-[22em]">{t.common.footer.tagline}</p>
        </div>

        <div>
          <h4 className="eyebrow mb-3.5 text-[11px]">{h.atendimento || h.services}</h4>
          <ul className="grid gap-2">
            <li><Link to="/servicos" className="hover:text-brand-tealDeep">{h.pediatricConsultation || 'Consulta Pediátrica'}</Link></li>
            <li><Link to="/mil-cuidados" className="hover:text-brand-tealDeep">{h.milCuidados}</Link></li>
            <li><Link to="/consulta-pre-natal" className="hover:text-brand-tealDeep">{h.prenatalConsultation}</Link></li>
            <li><Link to="/pneumologia" className="hover:text-brand-tealDeep">{h.pneumopediatria}</Link></li>
            <li><Link to="/consultoria-sono" className="hover:text-brand-tealDeep">{h.sleepConsulting}</Link></li>
            <li><Link to="/servicos" className="hover:text-brand-tealDeep">{h.viewAllServices}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-3.5 text-[11px]">{t.common.footer.quickLinks}</h4>
          <ul className="grid gap-2">
            <li><Link to="/sobre-mim" className="hover:text-brand-tealDeep">{h.about}</Link></li>
            <li><Link to="/consultorio" className="hover:text-brand-tealDeep">{h.clinic}</Link></li>
            <li><Link to="/duvidas-frequentes" className="hover:text-brand-tealDeep">{h.faq}</Link></li>
            <li><Link to="/contato" className="hover:text-brand-tealDeep">{h.contact}</Link></li>
            <li>
              <a
                href="https://www.instagram.com/drafernandakruger/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-brand-tealDeep"
              >
                <Instagram size={16} /> @drafernandakruger
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-3.5 text-[11px]">{t.common.footer.contact}</h4>
          <ul className="grid gap-3">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <b className="block font-semibold text-brand-ink group-hover:text-brand-tealDeep">(11) 99407-7447</b>
                  {language === 'pt' ? 'Agendar pelo WhatsApp' : 'Book via WhatsApp'}
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:fernandafavalikruger@gmail.com" className="group flex items-start gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-brand-mist text-brand-tealDeep">
                  <Mail className="h-[18px] w-[18px]" />
                </span>
                <span className="break-all pt-2 group-hover:text-brand-tealDeep">fernandafavalikruger@gmail.com</span>
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-brand-roseWash text-brand-roseDeep">
                  <MapPin className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <b className="block font-semibold text-brand-ink group-hover:text-brand-tealDeep">Rua Afonso de Freitas, 59, sala 94</b>
                  Paraíso, São Paulo – SP · CEP 04006-050
                  <span className="mt-0.5 block text-[13px] font-semibold text-brand-tealDeep">{language === 'pt' ? 'Ver no mapa ↗' : 'View on map ↗'}</span>
                </span>
              </a>
            </li>
          </ul>
          <a
            href="https://www.milvacinas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 rounded-[14px] bg-brand-sage p-3 transition-colors hover:bg-brand-mist"
          >
            <img src="/images/milvacinas-simbolo.webp" alt="" width="40" height="40" className="h-10 w-10 rounded-[10px] bg-white p-1" />
            <span>
              <b className="block font-semibold text-brand-tealDeep">Mil Vacinas</b>
              Vacinação no mesmo endereço ↗
            </span>
          </a>
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-brand-line pt-5 text-xs md:col-span-2 lg:col-span-4">
          <span>© {t.common.footer.allRightsReserved}</span>
          <span>CRM-SP 140.995 · RQE 37669</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
