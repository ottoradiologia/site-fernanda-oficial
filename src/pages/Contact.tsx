
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
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
                  <p className="text-gray-600 mb-4">contato@drafernandapediatra.com.br</p>
                  <Button variant="outline" asChild>
                    <a href="mailto:contato@drafernandapediatra.com.br">
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

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Agendamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="responsavel">Nome do Responsável *</Label>
                      <Input 
                        id="responsavel" 
                        name="responsavel"
                        type="text" 
                        required 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="crianca">Nome da Criança *</Label>
                      <Input 
                        id="crianca" 
                        name="crianca"
                        type="text" 
                        required 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="telefone">Telefone (WhatsApp) *</Label>
                      <Input 
                        id="telefone" 
                        name="telefone"
                        type="tel" 
                        required 
                        placeholder="(11) 99999-9999"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        required 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
                      <Textarea 
                        id="mensagem" 
                        name="mensagem"
                        rows={4}
                        placeholder="Descreva brevemente o motivo da consulta ou suas dúvidas..."
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Enviar Solicitação de Agendamento
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossa Localização
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Mapa Interativo do Google Maps</p>
                  <p className="text-sm">Rua Afonso de Freitas, 59 - Paraíso, SP</p>
                  <p className="text-xs text-gray-400 mt-2">
                    A 220m da estação Paraíso do Metrô
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
