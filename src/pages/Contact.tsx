import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Stethoscope, MessageCircle, Info, Car } from 'lucide-react';
import ParkingList from '@/components/ParkingList';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/5511994077447?text=Olá!%20Eu%20vim%20pelo%20site%20da%20Dra%20Fernanda.%20Gostaria%20de%20agendar%20uma%20consulta.";
  const scheduling = t.pages.contact.scheduling;
  const parking = t.pages.contact.parking;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83B2AC] mb-4">
              {t.pages.contact.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.pages.contact.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#83B2AC] mb-8">
                  Informações de Contato
                </h2>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-green-600" />
                    WhatsApp (Agendamento)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">(11) 99407-7447</p>
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <a 
                      href={whatsappUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Enviar Mensagem
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">fernandafavalikruger@gmail.com</p>
                  <Button variant="outline" asChild>
                    <a href="mailto:fernandafavalikruger@gmail.com">
                      Enviar E-mail
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Rua Afonso de Freitas, nº 59, sala 94<br />
                    Paraíso, São Paulo - SP<br />
                    CEP 04.006-050
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Stethoscope className="w-6 h-6 text-[#83B2AC]" />
                    Informações Profissionais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dra. Fernanda Favali Kruger<br />
                    CRM-SP 140.995 | RQE 37669
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Agendamento exclusivo por WhatsApp */}
            {scheduling && (
              <div>
                <Card className="border-2 border-green-600/30 bg-green-50 lg:sticky lg:top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-green-700">
                      <MessageCircle className="w-7 h-7" />
                      {scheduling.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {scheduling.description}
                    </p>
                    <p className="text-3xl font-bold text-gray-800">(11) 99407-7447</p>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        {scheduling.button}
                      </a>
                    </Button>
                    <div className="flex items-start gap-3 rounded-lg bg-white border border-[#fdb4be] p-4">
                      <Info className="w-5 h-5 text-[#C77486] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{scheduling.privateOnly}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#83B2AC] text-center mb-12">
            Nossa Localização
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {parking && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#83B2AC]" />
                  {parking.title}
                </h3>
                <ParkingList />
              </div>
            )}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                title="Mapa do Google"
                src="https://www.google.com/maps?q=Rua+Afonso+de+Freitas,+59,+Para%C3%ADso,+S%C3%A3o+Paulo+-+SP&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
