export type Language = 'pt' | 'en';

export interface Translations {
  common: {
    header: {
      home: string;
      about: string;
      services: string;
      vaccination: string;
      clinic: string;
      contact: string;
      faq: string;
      scheduleAppointment: string;
      milCuidados?: string;
      pneumopediatria?: string;
      sleepConsulting?: string;
      prenatalConsultation?: string;
      viewAllServices?: string;
    };
    footer: {
      tagline: string;
      quickLinks: string;
      contact: string;
      allRightsReserved: string;
    };
    buttons: {
      scheduleAppointment: string;
      scheduleByWhatsApp: string;
      sendMessage: string;
      sendEmail: string;
      learnMore: string;
      knowMore: string;
      returnHome: string;
    };
    whatsapp: {
      consultation: string;
      vaccination: string;
    };
  };
  pages: {
    index: {
      hero: {
        title: string;
        titleHighlight: string;
        subtitle: string;
        description: string;
        credentials: string;
        scheduleButton: string;
        knowMyStory: string;
      };
      about: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        knowMyStory: string;
      };
      services: {
        title: string;
        description: string;
        service1: { title: string; description: string };
        service2: { title: string; description: string };
        service3: { title: string; description: string };
        service4: { title: string; description: string };
        service5: { title: string; description: string };
        service6?: { title: string; description: string };
        service7?: { title: string; description: string };
      };
      milCuidados?: {
        title: string;
        subtitle: string;
        description: string;
        knowProgram: string;
        talkWhatsApp: string;
      };
      vaccination: {
        title: string;
        subtitle: string;
        description: string;
        knowMilVacinas: string;
        scheduleVaccine: string;
      };
      doctoralia: {
        title: string;
        description: string;
      };
      clinic: {
        title: string;
        description: string;
        knowOurSpace: string;
        clinicImages: {
          video: string;
          reception: string;
          playful: string;
          modern: string;
          care: string;
        };
      };
      location: {
        title: string;
        description: string;
        address: {
          title: string;
          street: string;
          city: string;
          zip: string;
          building: string;
        };
        howToGet: {
          title: string;
          metro: string;
          time: string;
        };
        parking: {
          title: string;
          description: string;
        };
      };
      cta: {
        title: string;
        description: string;
        scheduleByWhatsApp: string;
        sendEmail: string;
      };
    };
    about: {
      hero: {
        title: string;
        subtitle: string;
      };
      content: {
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        paragraph4: string;
        paragraph5: string;
        paragraph6: string;
        paragraph7: string;
        paragraph8: string;
      };
      qualifications: {
        title: string;
        cardTitle: string;
        items: string[];
      };
      philosophy: {
        title: string;
        mission: {
          title: string;
          description: string;
        };
        differential: {
          title: string;
          description: string;
        };
      };
    };
    services: {
      hero: {
        title: string;
        subtitle1: string;
        subtitle2: string;
      };
      practice: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        paragraph4: string;
        highlights: {
          title: string;
          items: string[];
        };
      };
      followup: {
        title: string;
        paragraph1: string;
        paragraph2: string;
      };
      vaccination: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        knowOurVaccines: string;
      };
      cta: {
        title: string;
        description: string;
        button: string;
      };
    };
    clinic: {
      hero: {
        title: string;
        subtitle: string;
      };
      description: {
        paragraph: string;
      };
      gallery: {
        title: string;
        images: {
          signing: string;
          cafe: string;
          office1: string;
          office2: string;
          fun: string;
          fercafe: string;
          table: string;
          wall: string;
          building: string;
          waiting1: string;
          waiting2: string;
          sitting: string;
          video: string;
        };
      };
      location: {
        title: string;
        address: {
          title: string;
          street: string;
          city: string;
          zip: string;
          building: string;
        };
        howToGet: {
          title: string;
          metro: string;
        };
        parking: {
          title: string;
          description: string;
        };
        accessibility: {
          title: string;
          description: string;
        };
      };
    };
    contact: {
      hero: {
        title: string;
        subtitle: string;
      };
      info: {
        title: string;
        whatsapp: {
          title: string;
          phone: string;
          button: string;
        };
        email: {
          title: string;
          address: string;
          button: string;
        };
        address: {
          title: string;
          street: string;
          city: string;
          zip: string;
        };
        professional: {
          title: string;
          name: string;
          credentials: string;
        };
      };
      schedule: {
        title: string;
      };
      map: {
        title: string;
      };
    };
    faq: {
      hero: {
        title: string;
        subtitle: string;
      };
      categories: {
        services: {
          title: string;
          q1: { question: string; answer: string };
          q2: { question: string; answer: string };
        };
        consultations: {
          title: string;
          q1: { question: string; answer: string };
        };
        scheduling: {
          title: string;
          q1: { question: string; answer: string };
          q2: { question: string; answer: string };
          q3: { question: string; answer: string };
        };
        plans: {
          title: string;
          q1: { question: string; answer: string };
          q2: { question: string; answer: string };
        };
        local: {
          title: string;
          q1: { question: string; answer: string };
          q2: { question: string; answer: string };
        };
      };
      cta: {
        title: string;
        description: string;
        button: string;
      };
    };
    vaccination: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
        accessMilVacinas: string;
        scheduleByWhatsApp: string;
      };
      features: {
        title: string;
        subtitle: string;
        feature1: { title: string; description: string };
        feature2: { title: string; description: string };
        feature3: { title: string; description: string };
      };
      ageGroups: {
        title: string;
        subtitle: string;
        group1: { title: string; description: string };
        group2: { title: string; description: string };
        group3: { title: string; description: string };
      };
      integration: {
        title: string;
        description: string;
        button: string;
      };
      cta: {
        title: string;
        description: string;
        scheduleButton: string;
        visitButton: string;
      };
    };
    notfound: {
      title: string;
      message: string;
      returnHome: string;
    };
    milcuidados: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      whatIs: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        paragraph4: string;
      };
      benefits: {
        title: string;
        benefit1: { title: string; description: string };
        benefit2: { title: string; description: string };
        benefit3: { title: string; description: string };
        benefit4: { title: string; description: string };
        benefit5: { title: string; description: string };
        benefit6: { title: string; description: string };
      };
      areas: {
        title: string;
        description: string;
        area1: { title: string; description: string };
        area2: { title: string; description: string };
        area3: { title: string; description: string };
        area4: { title: string; description: string };
      };
      includes: {
        title: string;
        items: string[];
      };
      cta: {
        title: string;
        description: string;
        button: string;
        finalTitle: string;
        finalDescription: string;
        finalButton: string;
      };
    };
    pneumologia: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      consultation: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
      };
      conditions: {
        title: string;
        condition1: { title: string; description: string };
        condition2: { title: string; description: string };
        condition3: { title: string; description: string };
        condition4: { title: string; description: string };
      };
      includes: {
        title: string;
        items: string[];
      };
      cta: {
        title: string;
        description: string;
        button: string;
        finalTitle: string;
        finalDescription: string;
        finalButton: string;
      };
    };
    consultoriaSono: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      howItWorks: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
      };
      benefits: {
        title: string;
        benefit1: { title: string; description: string };
        benefit2: { title: string; description: string };
        benefit3: { title: string; description: string };
        benefit4: { title: string; description: string };
      };
      includes: {
        title: string;
        items: string[];
      };
      cta: {
        title: string;
        description: string;
        button: string;
        finalTitle: string;
        finalDescription: string;
        finalButton: string;
      };
    };
    consultaPreNatal: {
      hero: {
        title: string;
        subtitle: string;
        description: string;
      };
      whatIs: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
      };
      benefits: {
        title: string;
        benefit1: { title: string; description: string };
        benefit2: { title: string; description: string };
        benefit3: { title: string; description: string };
        benefit4: { title: string; description: string };
      };
      topics: {
        title: string;
        items: string[];
      };
      whenToSchedule: {
        title: string;
        paragraph1: string;
        paragraph2: string;
      };
      cta: {
        title: string;
        description: string;
        button: string;
        finalTitle: string;
        finalDescription: string;
        finalButton: string;
      };
    };
  };
}

