import React from 'react';

const StructuredData = () => {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dra. Fernanda Kruger - Pediatra e Pneumopediatra",
      "image": "https://www.drafernandakruger.com.br/images/hero/logo-principal.png",
      "description": "Pediatra e Pneumopediatra no Paraíso, São Paulo. Especialista em Consultoria do Sono e Vacinação Infantil (Mil Vacinas).",
      "url": "https://www.drafernandakruger.com.br",
      "telephone": "+5511994077447",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Afonso de Freitas, 59, sala 94",
        "addressLocality": "Paraíso",
        "addressRegion": "SP",
        "postalCode": "04006-050",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-23.5735",
        "longitude": "-46.6437"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "medicalSpecialty": [
        "Pediatrician",
        "Pediatric Pulmonologist",
        "Vaccination Service"
      ],
      "department": {
        "@type": "MedicalBusiness",
        "name": "Mil Vacinas - Clínica de Vacinação",
        "image": "https://www.drafernandakruger.com.br/images/milvacinas.png",
        "description": "Clínica de Vacinação Integrada e Consultoria em Imunização"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "30",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dra. Fernanda Kruger",
      "jobTitle": "Pediatra e Pneumopediatra",
      "medicalSpecialty": [
        "Pediatrics",
        "PediatricPulmonology"
      ],
      "knowsAbout": ["Consultoria do Sono Infantil", "Vacinação", "Puericultura"],
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Consultório Dra. Fernanda Kruger"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Consultoria do Sono Infantil",
      "provider": {
        "@type": "Physician",
        "name": "Dra. Fernanda Kruger"
      },
      "description": "Consultoria especializada para melhorar o sono e rotina de bebês e crianças."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Consultoria de Vacinação",
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Mil Vacinas"
      },
      "description": "Análise de carteirinha de vacinação, planejamento vacinal e aplicação de vacinas."
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};

export default StructuredData;

