import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Carrega o script do Doctoralia
    const script = document.createElement('script');
    script.innerHTML = `
      !function($_x,_s,id){
        var js,fjs=$_x.getElementsByTagName(_s)[0];
        if(!$_x.getElementById(id)){
          js = $_x.createElement(_s);
          js.id = id;
          js.src = "//platform.docplanner.com/js/widget.js";
          fjs.parentNode.insertBefore(js,fjs);
        }
      }(document,"script","zl-widget-s");
    `;
    document.head.appendChild(script);

    return () => {
      // Remove o script quando o componente for desmontado
      const existingScript = document.getElementById('zl-widget-s');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              Vamos Conversar?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende sua consulta ou entre em contato para tirar suas dúvidas
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
                <h2 className="text-3xl font-bold text-[#83b2ac] mb-8">
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
                      href="https://wa.me/5511994077447" 
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
                    <Clock className="w-6 h-6 text-yellow-600" />
                    CRM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dra. Fernanda Favali Kruger - CRM-SP 140.995
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Doctoralia Widget */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Agende sua Consulta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<a id="zl-url" class="zl-url" href="https://www.doctoralia.com.br/fernanda-favali-kruger/pediatra-pneumologista-pediatrico/sao-paulo" rel="nofollow" data-zlw-doctor="fernanda-favali-kruger" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="true" data-zlw-a11y-title="Widget de marcação de consultas médicas">Fernanda Favali Kruger - Doctoralia.com.br</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>`
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#83b2ac] text-center mb-12">
            Nossa Localização
          </h2>
          
          <div className="max-w-4xl mx-auto">
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
