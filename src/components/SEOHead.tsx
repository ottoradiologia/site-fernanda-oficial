import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

// Endereço público atual do site. Trocar aqui quando o domínio próprio estiver ativo.
export const SITE_URL = 'https://site-fernanda-oficial.vercel.app';

interface PageMeta {
  title: string;
  description: string;
}

const DEFAULT_META: PageMeta = {
  title: 'Pediatra no Paraíso (SP) particular – Dra. Fernanda Kruger',
  description: 'Consultas pediátricas sem pressa (até 1h30), de 0 a 12 anos, a 220 m do Metrô Paraíso. Particular, com nota fiscal para reembolso. Agende pelo WhatsApp.',
};

// Título e descrição de cada rota (o Google usa os valores renderizados)
const ROUTE_META: Record<string, PageMeta> = {
  '/': DEFAULT_META,
  '/sobre-mim': {
    title: 'Dra. Fernanda Favali Kruger – CRM-SP 140.995, RQE 37669',
    description: 'Pediatra (título SBP) e intensivista pediátrica (UNICAMP), com formação em Pneumologia Pediátrica, consultoria do sono e MBA em Imunização.',
  },
  '/servicos': {
    title: 'Consultas e serviços pediátricos no Paraíso, SP',
    description: 'Consulta particular, puericultura, pneumologia pediátrica, consulta pré-natal pediátrica, sono infantil e vacinação. Agendamento pelo WhatsApp.',
  },
  '/vacinacao': {
    title: 'Vacinação infantil no Paraíso (SP) – Mil Vacinas',
    description: 'Sala de vacinação Mil Vacinas integrada ao consultório, com vacinas da rede privada e vacinação domiciliar em até 5 km do Paraíso.',
  },
  '/mil-cuidados': {
    title: 'Programa Mil Cuidados – acompanhamento pediátrico',
    description: 'Programa de acompanhamento integral com consultas pediátricas e vacinação para cuidar da saúde da sua criança em todas as fases.',
  },
  '/pneumologia': {
    title: 'Pneumopediatra no Paraíso (SP) – asma, chiado e tosse',
    description: 'Avaliação de asma, bronquiolite, chiado, tosse crônica e pneumonias de repetição em crianças, com pneumologista pediátrica.',
  },
  '/consultoria-sono': {
    title: 'Consultoria do sono infantil em São Paulo',
    description: 'Plano de sono e rotina para bebês e crianças com pediatra consultora de sono, no Paraíso, em São Paulo.',
  },
  '/consulta-pre-natal': {
    title: 'Consulta pediátrica pré-natal em São Paulo',
    description: 'Prepare-se para a chegada do bebê: amamentação, sono, vacinas e cuidados com o recém-nascido, com a pediatra antes do parto.',
  },
  '/consultorio': {
    title: 'Consultório pediátrico no Paraíso – perto do metrô',
    description: 'Rua Afonso de Freitas, 59, sala 94 (Edifício Upside Paraíso), a 220 m do Metrô Paraíso. Veja fotos e sugestões de estacionamento.',
  },
  '/duvidas-frequentes': {
    title: 'Pediatra particular no Paraíso: dúvidas frequentes',
    description: 'Convênio, reembolso, duração da consulta, idade atendida, estacionamento e como agendar com a Dra. Fernanda Kruger.',
  },
  '/contato': {
    title: 'Agendar consulta com pediatra no Paraíso (WhatsApp)',
    description: 'Agendamento somente pelo WhatsApp (11) 99407-7447. Rua Afonso de Freitas, 59, sala 94, Paraíso, São Paulo – SP.',
  },
};

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const setMeta = (selector: string, content: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', content);
};

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const routeMeta = ROUTE_META[location.pathname] || DEFAULT_META;
    const fullTitle = title ? `${title} | Dra. Fernanda Kruger` : routeMeta.title;
    const fullDescription = description || routeMeta.description;
    const url = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', fullDescription);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', fullDescription);
    setMeta('meta[property="og:url"]', url);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', url);
  }, [title, description, keywords, location.pathname, language]);

  return null;
};

export default SEOHead;
