
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const qualifications = [
    "Graduação em Medicina pela Universidade São Francisco (USF).",
    "Residência Médica em Pediatria pelo Hospital Universitário São Francisco (HUSF), com Título de Especialista pela SBP e RQE 37669.",
    "Residência Médica em Terapia Intensiva Pediátrica pela Universidade Estadual de Campinas (UNICAMP), com RQE 37669-1.",
    "Programa de Treinamento em Serviço em Pneumologia Pediátrica pela Universidade Estadual de Campinas (UNICAMP).",
    "Capacitação em Sono e Rotina do Bebê pela Faculdade Brasília, ministrada pela Dra. Ana Bárbara Jannuzzi Lagoeiro.",
    "MBA em Gestão em Imunização Humana pela Faculdade Focus, ministrado pelo Dr. Rafael Tavares da Hora."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Minha Trajetória: Da Medicina à Maternidade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de dedicação, aprendizado e amor pela pediatria
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <img 
                src="/placeholder.svg" 
                alt="Dra. Fernanda Kruger" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Olá! Sou Fernanda, médica pediatra apaixonada pela Saúde Infantil!
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Vou contar um pouquinho sobre a minha trajetória.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Após minha graduação em Medicina pela Universidade São Francisco em 2009, decidi pelas 
                  especializações em Pediatria e Terapia Intensiva Pediátrica, concluídas em 2012 e 2014 
                  respectivamente.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Porém, sentia que faltava algo a mais na minha formação e busquei a Pneumologia Pediátrica, 
                  concluída em 2016, como complementação das atividades hospitalares que já realizava.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Em 2020 ganhei o meu maior presente! Me tornei mãe de um menino lindo e saudável, que me 
                  ensina todos os dias que a Maternidade não está sobre o nosso controle e que acolhimento 
                  e paciência são fundamentais nessa caminhada!
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Com o desafio da Maternidade, veio também o interesse em me capacitar em uma das principais 
                  demandas das famílias com bebês pequenos, o sono infantil. Em 2022 me tornei consultora de 
                  Sono e Rotina do Bebê, visando agregar qualidade aos atendimentos em Pediatria.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Em 2024 realizei o sonho de ter meu próprio consultório, planejado com muito amor e carinho, 
                  para atender a todos com a maior qualidade e conforto!
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  E não parei por ai... também em 2024 conclui um MBA em Imunização Humana e em breve teremos 
                  uma Sala de Vacinação agregada ao meu consultório, proporcionando mais proteção e saúde a 
                  toda família!
                </p>
                
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Agora que você já me conhece, estou aqui para oferecer cuidados de qualidade e atenção 
                  especializada às crianças e suas famílias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Formação e Qualificações
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Trajetória Acadêmica e Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Missão, Diferencial e Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Com muita excelência e dedicação, Dra. Fernanda acolhe a criança e sua família com 
                  empatia e escuta ativa. Está sempre atualizada com as melhores práticas e diretrizes 
                  para garantir o bem-estar dos pequenos pacientes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-secondary">Nosso Diferencial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Além do conhecimento, somos uma equipe especializada e acessível, que faz o atendimento 
                  ser único e especial!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
