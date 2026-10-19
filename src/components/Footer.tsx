import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const h = t.common.header;

  return (
    <footer className="border-t border-brand-line bg-brand-paper text-sm text-brand-muted">
      <div className="container mx-auto grid gap-10 px-4 pb-10 pt-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:px-12 lg:pb-7">
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
          <p>
            WhatsApp (11) 99407-7447<br />
            fernandafavalikruger@gmail.com
          </p>
          <p className="mt-2">
            Rua Afonso de Freitas, 59, sala 94<br />
            Paraíso, São Paulo – SP · CEP 04006-050
          </p>
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
