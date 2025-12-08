import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Train, Car, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Clinic = () => {
  const { t, language } = useLanguage();
  
  const clinicImages = [
    { src: "/images/clinic/assinando.jpg", alt: t.pages.clinic.gallery.images.signing, type: "image" },
    { src: "/images/clinic/cafe.jpg", alt: t.pages.clinic.gallery.images.cafe, type: "image" },
    { src: "/images/clinic/consultorio principal (1).jpeg", alt: t.pages.clinic.gallery.images.office1, type: "image" },
    { src: "/images/clinic/consultorio principal (2).jpeg", alt: t.pages.clinic.gallery.images.office2, type: "image" },
    { src: "/images/clinic/diversao.jpg.jpeg", alt: t.pages.clinic.gallery.images.fun, type: "image" },
    { src: "/images/clinic/fercafe.jpg", alt: t.pages.clinic.gallery.images.fercafe, type: "image" },
    { src: "/images/clinic/maca.jpg", alt: t.pages.clinic.gallery.images.table, type: "image" },
    { src: "/images/clinic/parede consultorio.jpg.jpeg", alt: t.pages.clinic.gallery.images.wall, type: "image" },
    { src: "/images/clinic/prédio.jpg.jpeg", alt: t.pages.clinic.gallery.images.building, type: "image" },
    { src: "/images/clinic/sala de espera2.jpg", alt: t.pages.clinic.gallery.images.waiting1, type: "image" },
    { src: "/images/clinic/sala de espera3.jpg", alt: t.pages.clinic.gallery.images.waiting2, type: "image" },
    { src: "/images/clinic/sentadaconsultorio.jpg", alt: t.pages.clinic.gallery.images.sitting, type: "image" },
    { src: "/images/clinic/video_optimized.mp4", alt: t.pages.clinic.gallery.images.video, type: "video" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              {t.pages.clinic.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.pages.clinic.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.pages.clinic.description.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#83b2ac] text-center mb-12">
            {t.pages.clinic.gallery.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicImages.map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg bg-white">
                {item.type === 'video' ? (
                  <div className="relative bg-gray-50">
                    <video 
                      className="w-full h-96 object-contain"
                      controls
                      poster="/images/clinic/maca.jpg"
                    >
                      <source src={item.src} type="video/mp4" />
                      {language === 'pt' ? 'Seu navegador não suporta vídeos HTML5.' : 'Your browser does not support HTML5 videos.'}
                    </video>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      ▶️ Vídeo
                    </div>
                  </div>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-96 object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium text-center">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Access */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#83b2ac] text-center mb-12">
            {t.pages.clinic.location.title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address and Details */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.pages.clinic.location.address.title}</h3>
                    <p className="text-gray-600">
                      {t.pages.clinic.location.address.street}<br />
                      {t.pages.clinic.location.address.city}<br />
                      {t.pages.clinic.location.address.zip}<br />
                      {t.pages.clinic.location.address.building}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Train className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.pages.clinic.location.howToGet.title}</h3>
                    <div className="space-y-3 text-gray-600">
                      <p><strong>{t.pages.clinic.location.howToGet.metro}</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Car className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.pages.clinic.location.parking.title}</h3>
                    <p className="text-gray-600">
                      <strong>{t.pages.clinic.location.parking.description}</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.pages.clinic.location.accessibility.title}</h3>
                    <p className="text-gray-600">
                      <strong>{t.pages.clinic.location.accessibility.description}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Afonso+de+Freitas,+59,+Paraíso,+São+Paulo,+SP,+04006-050"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório - Dra. Fernanda Kruger"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clinic;
