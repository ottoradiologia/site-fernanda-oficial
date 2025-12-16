import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Moon, Syringe, Mail, MapPin, Train, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, language } = useLanguage();
  const [doctoraliaLoaded, setDoctoraliaLoaded] = useState(false);
  const doctoraliaRef = useRef<HTMLDivElement>(null);
  
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.consultation);
    return `https://wa.me/5511994077447?text=${message}`;
  };

  const getVaccinationWhatsAppUrl = () => {
    const message = encodeURIComponent(t.common.whatsapp.vaccination);
    return `https://wa.me/5511973139542?text=${message}`;
  };

  const getLocalizedPath = (path: string) => {
    if (language === 'en') {
      return `/en${path === '/' ? '' : path}`;
    }
    return path;
  };

  // Carrega o script do Doctoralia com lazy loading via Intersection Observer
  const loadDoctoralia = useCallback(() => {
    if (doctoraliaLoaded || document.getElementById('zl-widget-s')) return;
    
    const script = document.createElement('script');
    script.id = 'zl-widget-s';
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;
    document.body.appendChild(script);
    setDoctoraliaLoaded(true);
  }, [doctoraliaLoaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadDoctoralia();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Carrega quando estiver a 200px de ficar visível
    );

    if (doctoraliaRef.current) {
      observer.observe(doctoraliaRef.current);
    }

    return () => {
      observer.disconnect();
      const s = document.getElementById('zl-widget-s');
      if (s) s.remove();
    };
  }, [loadDoctoralia]);

  // Função para atualizar o carrossel da clínica
  const updateClinicCarousel = (index: number) => {
    const wrapper = document.querySelector('.clinic-carousel-wrapper');
    const dots = document.querySelectorAll('.clinic-carousel-dot');
    
    if (wrapper && dots.length === 5) {
      wrapper.style.transform = `translateX(-${index * 100}%)`;
      
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove('bg-gray-300');
          dot.classList.add('bg-[#83b2ac]');
        } else {
          dot.classList.remove('bg-[#83b2ac]');
          dot.classList.add('bg-gray-300');
        }
      });
    }
  };

  useEffect(() => {
    // Carrossel automático da clínica
    let currentIndex = 0;
    const totalSlides = 5;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateClinicCarousel(currentIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Baby,
      title: t.pages.index.services.service1.title,
      description: t.pages.index.services.service1.description
    },
    {
      icon: Heart,
      title: t.pages.index.services.service2.title,
      description: t.pages.index.services.service2.description
    },
    {
      icon: Moon,
      title: t.pages.index.services.service3.title,
      description: t.pages.index.services.service3.description
    },
    {
      icon: Syringe,
      title: t.pages.index.services.service4.title,
      description: t.pages.index.services.service4.description
    },
    {
      icon: Package,
      title: t.pages.index.services.service5.title,
      description: t.pages.index.services.service5.description
    }
  ];

  const clinicImages = [
    { src: "/images/clinic/video_optimized.mp4", alt: t.pages.index.clinic.clinicImages.video, type: "video" },
    { src: "/images/clinic/sala de espera3.jpg", alt: t.pages.index.clinic.clinicImages.reception, type: "image" },
    { src: "/images/clinic/maca.jpg", alt: t.pages.index.clinic.clinicImages.playful, type: "image" },
    { src: "/images/clinic/consultorio principal (2).jpeg", alt: t.pages.index.clinic.clinicImages.modern, type: "image" },
    { src: "/images/clinic/diversao.jpg.jpeg", alt: t.pages.index.clinic.clinicImages.care, type: "image" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] leading-tight">
                {t.pages.index.hero.title} <span className="text-primary">{t.pages.index.hero.titleHighlight}</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-[#83b2ac]">
                {t.pages.index.hero.subtitle}
              </h2>
              <p className="text-lg text-gray-600">
                {t.pages.index.hero.description}
              </p>
              <p className="text-sm text-gray-500 font-medium">
                {t.pages.index.hero.credentials}
              </p>
               <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    {t.pages.index.hero.scheduleButton}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to={getLocalizedPath('/sobre-mim')}>{t.pages.index.hero.knowMyStory}</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-to-br from-[#83b2ac]/20 to-[#fdb4be]/20 rounded-2xl shadow-xl">
                <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/images/doctor/fer_hero.jpg" 
                    alt="Dra. Fernanda Kruger - Pediatra e Pneumopediatra no Paraíso SP, Responsável Técnica Mil Vacinas" 
                    className="w-full max-w-md h-auto object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-[#83b2ac]/20 to-[#fdb4be]/20 rounded-2xl shadow-xl">
                  <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                    <img 
                      src="/images/doctor/fer_mesa.jpg" 
                      alt="Dra. Fernanda Kruger - Pediatra especializada em atendimento humanizado no Paraíso SP" 
                      className="w-full max-w-md h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#83b2ac] mb-2">
                {t.pages.index.about.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-2">
                {t.pages.index.about.paragraph1}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-2">
                {t.pages.index.about.paragraph2}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-semibold">
                {t.pages.index.about.paragraph3}
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link to={getLocalizedPath('/sobre-mim')}>{t.pages.index.about.knowMyStory}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {t.pages.index.services.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.pages.index.services.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    {service.title}
                    {service.badge && (
                      <Badge variant="secondary" className="ml-2 bg-secondary text-white">
                        {service.badge}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex justify-center">
                  <div className="p-6 bg-gradient-to-br from-[#83b2ac]/10 to-[#fdb4be]/10 rounded-2xl shadow-xl">
                    <img 
                      src="/images/milvacinas.png" 
                      alt="Mil Vacinas - Clínica de Vacinação integrada ao consultório da Dra. Fernanda Kruger no Paraíso SP" 
                      className="w-full max-w-md h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac]">
                  {t.pages.index.vaccination.title}
                </h2>
                <h3 className="text-2xl font-semibold text-[#fdb4be]">
                  {t.pages.index.vaccination.subtitle}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.pages.index.vaccination.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <a href="https://www.milvacinas.com.br/" target="_blank" rel="noopener noreferrer">
                      {t.pages.index.vaccination.knowMilVacinas}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={getVaccinationWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      {t.pages.index.vaccination.scheduleVaccine}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctoralia Calendar Section */}
      <section ref={doctoraliaRef} className="py-20 bg-[#f0f4e3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {t.pages.index.doctoralia.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {t.pages.index.doctoralia.description}
            </p>
            <div className="flex justify-center">
              <div style={{maxWidth: 420, width: '100%'}}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<a id=\"zl-url\" class=\"zl-url\" href=\"https://www.doctoralia.com.br/fernanda-favali-kruger/pediatra-pneumologista-pediatrico/sao-paulo\" rel=\"nofollow\" data-zlw-doctor=\"fernanda-favali-kruger\" data-zlw-type=\"big_with_calendar\" data-zlw-opinion=\"false\" data-zlw-hide-branding=\"true\" data-zlw-saas-only=\"true\" data-zlw-a11y-title=\"Widget de marcação de consultas médicas\">Fernanda Favali Kruger - Doctoralia.com.br</a>`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {t.pages.index.clinic.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.pages.index.clinic.description}
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative max-w-md w-full">
              <div className="clinic-carousel-container overflow-hidden rounded-lg shadow-xl">
                <div className="clinic-carousel-wrapper flex transition-transform duration-500 ease-in-out">
                  {clinicImages.map((item, index) => (
                    <div key={index} className="clinic-carousel-slide min-w-full relative bg-gray-50">
                      {item.type === 'video' ? (
                        <video 
                          className="w-full h-[600px] object-contain"
                          controls
                          poster="/images/clinic/maca.jpg"
                        >
                          <source src={item.src} type="video/mp4" />
                          {language === 'pt' ? 'Seu navegador não suporta vídeos HTML5.' : 'Your browser does not support HTML5 videos.'}
                        </video>
                      ) : (
                        <img 
                          src={item.src} 
                          alt={item.alt}
                          className="w-full h-[600px] object-contain"
                        />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-lg font-semibold">{item.alt}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Navigation */}
              <div className="flex justify-center mt-4 space-x-2">
                <button 
                  className="clinic-carousel-dot w-3 h-3 rounded-full bg-[#83b2ac] transition-all duration-300"
                  onClick={() => updateClinicCarousel(0)}
                ></button>
                <button 
                  className="clinic-carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateClinicCarousel(1)}
                ></button>
                <button 
                  className="clinic-carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateClinicCarousel(2)}
                ></button>
                <button 
                  className="clinic-carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateClinicCarousel(3)}
                ></button>
                <button 
                  className="clinic-carousel-dot w-3 h-3 rounded-full bg-gray-300 transition-all duration-300"
                  onClick={() => updateClinicCarousel(4)}
                ></button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to={getLocalizedPath('/consultorio')}>{t.pages.index.clinic.knowOurSpace}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Location Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
              {t.pages.index.location.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.pages.index.location.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {t.pages.index.location.address.title}
                </h3>
                <p className="text-gray-600">
                  {t.pages.index.location.address.street}<br />
                  {t.pages.index.location.address.city}<br />
                  {t.pages.index.location.address.zip}<br />
                  {t.pages.index.location.address.building}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Train className="w-5 h-5 text-secondary" />
                  {t.pages.index.location.howToGet.title}
                </h3>
                <p className="text-gray-600">
                  <strong>{t.pages.index.location.howToGet.metro}</strong><br />
                  <strong>{t.pages.index.location.howToGet.time}</strong>
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-yellow-600">🅿️</span>
                  {t.pages.index.location.parking.title}
                </h3>
                <p className="text-gray-600">
                  {t.pages.index.location.parking.description}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Afonso+de+Freitas,+59,+Paraíso,+São+Paulo,+SP,+04006-050"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório - Dra. Fernanda Kruger"
                className="w-full h-80"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
            {t.pages.index.cta.title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pages.index.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a 
                href={getWhatsAppUrl()}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>📱</span>
                {t.pages.index.cta.scheduleByWhatsApp}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="mailto:fernandafavalikruger@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t.pages.index.cta.sendEmail}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
