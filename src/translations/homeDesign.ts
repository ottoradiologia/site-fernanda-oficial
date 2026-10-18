// Textos novos da home refinada (topo clean, fatos, rótulos e linha do tempo).
// Ficam separados de pt.ts/en.ts para não misturar com o conteúdo das páginas.
import type { Language } from '@/types/translations';

export interface HomeDesignCopy {
  hero: { eyebrow: string; phrase: string; highlight: string; button: string; photoAlt: string };
  facts: { label: string; value: string }[];
  services: { eyebrow: string; title: string; subtitle: string; tag: string; who: string[]; milVacinasTitle: string; milVacinasText: string };
  about: { eyebrow: string; timeline: { year: string; title: string; detail: string }[] };
  reviews: { eyebrow: string };
  clinic: { eyebrow: string; title: string; subtitle: string; captions: string[] };
  visit: { eyebrow: string; address: string; metro: string; metroValue: string; metroDetail: string; parking: string; map: string; openMap: string };
}

export const homeDesign: Record<Language, HomeDesignCopy> = {
  pt: {
    hero: {
      eyebrow: 'Pediatra no Paraíso · São Paulo',
      phrase: 'Cuidado sem pressa para o seu',
      highlight: 'maior tesouro',
      button: 'Agendar consulta',
      photoAlt: 'Dra. Fernanda Favali Kruger, pediatra',
    },
    facts: [
      { label: 'Idade', value: '0 a 12 anos' },
      { label: 'Consulta', value: 'Até 1h30' },
      { label: 'Metrô Paraíso', value: '220 m' },
      { label: 'Particular', value: 'Nota para reembolso' },
    ],
    services: {
      eyebrow: 'Atendimentos',
      title: 'Como posso cuidar da sua família',
      subtitle: 'Da gestação à pré-adolescência, com uma pediatra que também é especialista em pulmão e sono infantil.',
      tag: 'Programa',
      who: ['Gestação', '0 a 12 anos', 'Asma · bronquiolite · chiado', 'Bebês e famílias', 'No mesmo endereço'],
      milVacinasTitle: 'Vacinação na Mil Vacinas',
      milVacinasText: 'Sala de vacinação integrada ao consultório, também com vacina em casa.',
    },
    about: {
      eyebrow: 'Sobre mim',
      timeline: [
        { year: '2009', title: 'Medicina', detail: 'Universidade São Francisco' },
        { year: '2012', title: 'Pediatria', detail: 'HUSF, título SBP (RQE 37669)' },
        { year: '2014', title: 'Terapia Intensiva Pediátrica', detail: 'UNICAMP' },
        { year: '2016', title: 'Pneumologia Pediátrica', detail: 'UNICAMP' },
        { year: '2022', title: 'Consultoria do sono', detail: 'sono e rotina do bebê' },
        { year: '2025', title: 'Consultório próprio', detail: 'e MBA em Imunização Humana' },
      ],
    },
    reviews: { eyebrow: 'Avaliações no Google' },
    clinic: {
      eyebrow: 'O consultório',
      title: 'Um cantinho pensado para a infância',
      subtitle: 'Edifício Upside Paraíso, sala 94. Recepção tranquila, espaço lúdico e um consultório sem pressa.',
      captions: ['Recepção', 'Consultório', 'Espaço lúdico', 'Exame', 'Detalhes'],
    },
    visit: {
      eyebrow: 'Agendamento',
      address: 'Endereço',
      metro: 'Metrô',
      metroValue: 'Estação Paraíso, a 220 m',
      metroDetail: 'Linhas 1-Azul e 2-Verde · 3 min a pé',
      parking: 'Estacionar',
      map: 'Mapa',
      openMap: 'Abrir no Google Maps',
    },
  },
  en: {
    hero: {
      eyebrow: 'Pediatrician in Paraíso · São Paulo',
      phrase: 'Unhurried care for your',
      highlight: 'greatest treasure',
      button: 'Book an appointment',
      photoAlt: 'Dr. Fernanda Favali Kruger, pediatrician',
    },
    facts: [
      { label: 'Age', value: '0 to 12 years' },
      { label: 'Visit', value: 'Up to 1h30' },
      { label: 'Paraíso subway', value: '220 m' },
      { label: 'Private', value: 'Receipt for reimbursement' },
    ],
    services: {
      eyebrow: 'Services',
      title: 'How I can care for your family',
      subtitle: 'From pregnancy to pre-adolescence, with a pediatrician who is also a specialist in children’s lungs and sleep.',
      tag: 'Program',
      who: ['Pregnancy', '0 to 12 years', 'Asthma · bronchiolitis · wheezing', 'Babies and families', 'Same address'],
      milVacinasTitle: 'Vaccination at Mil Vacinas',
      milVacinasText: 'Vaccination room next to the practice, with home vaccination too.',
    },
    about: {
      eyebrow: 'About me',
      timeline: [
        { year: '2009', title: 'Medicine', detail: 'Universidade São Francisco' },
        { year: '2012', title: 'Pediatrics', detail: 'HUSF, SBP board certification (RQE 37669)' },
        { year: '2014', title: 'Pediatric Intensive Care', detail: 'UNICAMP' },
        { year: '2016', title: 'Pediatric Pulmonology', detail: 'UNICAMP' },
        { year: '2022', title: 'Sleep consulting', detail: 'baby sleep and routine' },
        { year: '2025', title: 'Own practice', detail: 'and MBA in Human Immunization' },
      ],
    },
    reviews: { eyebrow: 'Google reviews' },
    clinic: {
      eyebrow: 'The practice',
      title: 'A little corner designed for childhood',
      subtitle: 'Upside Paraíso building, room 94. A calm reception, a play area and an unhurried consultation room.',
      captions: ['Reception', 'Consultation room', 'Play area', 'Examination', 'Details'],
    },
    visit: {
      eyebrow: 'Appointments',
      address: 'Address',
      metro: 'Subway',
      metroValue: 'Paraíso station, 220 m away',
      metroDetail: 'Lines 1-Blue and 2-Green · 3 min walk',
      parking: 'Parking',
      map: 'Map',
      openMap: 'Open in Google Maps',
    },
  },
};
