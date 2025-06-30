import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Train, Car, Users } from 'lucide-react';

const Clinic = () => {
  const clinicImages = [
    { src: "/images/clinic/sala de espera2.jpg", alt: "Sala de espera" },
    { src: "/images/clinic/maca.jpg.jpeg", alt: "Área de exame" },
    { src: "/images/clinic/consultorio principal (2).jpeg", alt: "Consultório principal" },
    { src: "/images/clinic/diversao.jpg.jpeg", alt: "Área de diversão" },
    { src: "/images/clinic/parede consultorio.jpg.jpeg", alt: "Detalhes do consultório" },
    { src: "/images/clinic/sala de espera3.jpg", alt: "Sala de espera" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              Nosso Local
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um ambiente aconchegante para receber os pequenos com muita alegria!
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Localizados ao lado da estação de metrô Paraíso, estamos no coração do bairro, 
              proporcionando conforto aliado com muita expertise com público infantil. Cada detalhe 
              foi planejado com muito amor e carinho para receber a todos com a maior qualidade e conforto!
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#83b2ac] text-center mb-12">
            Conheça Nosso Espaço
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg bg-white">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-700 font-medium text-center">{image.alt}</p>
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
            Localização e Acesso
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address and Details */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Afonso de Freitas, nº 59, sala comercial 94<br />
                      Bairro Paraíso, São Paulo - SP<br />
                      CEP 04.006-050<br />
                      Edifício Upside Paraíso
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Train className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Como Chegar</h3>
                    <div className="space-y-3 text-gray-600">
                      <p><strong>🚇 Metrô:</strong> Estamos a 220m (cerca de 3 minutos caminhando) da estação Paraíso (Linhas 1-Azul e 2-Verde).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Car className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Estacionamento</h3>
                    <p className="text-gray-600">
                      <strong>🅿️ Estacionamento:</strong> Não possuímos estacionamento próprio, porém há estacionamento pago em frente ao prédio e nos arredores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Acessibilidade</h3>
                    <p className="text-gray-600">
                      <strong>♿ Acessibilidade:</strong> Edifício moderno com elevadores e acesso para pessoas com mobilidade reduzida.
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
