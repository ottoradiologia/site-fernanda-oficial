import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Base title
    const baseTitle = "Dra. Fernanda Kruger";
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} - Pediatra e Pneumopediatra no Paraíso, SP`;

    // Update document title
    document.title = fullTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "Pediatra e Pneumopediatra no Paraíso, SP. Consultoria do Sono e Vacinação Infantil (Mil Vacinas). Atendimento humanizado e sem pressa.");
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || "Atendimento humanizado em Pediatria, Pneumologia e Vacinação no coração do Paraíso, São Paulo.");
    }

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const canonicalUrl = `https://www.drafernandakruger.com.br${location.pathname}`;
    linkCanonical.setAttribute('href', canonicalUrl);

  }, [title, description, keywords, location.pathname, language]);

  return null;
};

export default SEOHead;

