import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Cuidados Essenciais ao Receber Visitas para o Recém-Nascido: Um Guia Completo para Pais e Familiares",
      slug: "guia-visitas-recem-nascido",
      coverImage: "/images/posts/1.jpg",
      excerpt: "A chegada de um bebê é um momento mágico e cheio de expectativas. Saiba como proteger a saúde frágil do novo membro da família e acolher o carinho de quem amamos.",
      author: "Dra. Fernanda Kruger",
      date: "15 de Janeiro, 2024",
      content: `
        <div class="space-y-6">
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/3.jpg" alt="Momento certo para receber visitas" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/4.jpg" alt="Saúde dos visitantes" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/5.jpg" alt="Dicas práticas para visitantes" class="w-full h-full object-cover" />
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: "4 Formas de Introduzir a Alimentação: Um Guia Completo para uma Jornada Saborosa e Segura",
      slug: "guia-introducao-alimentar",
      coverImage: "/images/posts/6.jpg",
      excerpt: "A introdução alimentar é um dos marcos mais aguardados no desenvolvimento do bebê! Conheça as 4 principais formas de introduzir a alimentação.",
      author: "Dra. Fernanda Kruger",
      date: "10 de Janeiro, 2024",
      content: `
        <div class="space-y-6">
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/8.jpg" alt="Método BLW" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/9.jpg" alt="Método BLISS" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/10.jpg" alt="Método Misto" class="w-full h-full object-cover" />
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: "A Hora do Banho do Bebê: 4 Passos para um Momento Seguro, Relaxante e Especial",
      slug: "guia-banho-bebe",
      coverImage: "/images/posts/11.jpg",
      excerpt: "A hora do banho é muito mais do que apenas um momento de higiene. É um ritual diário de conexão, relaxamento e carinho entre pais e bebê.",
      author: "Dra. Fernanda Kruger",
      date: "5 de Janeiro, 2024",
      content: `
        <div class="space-y-6">
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/13.jpg" alt="Segurança no banho" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/14.jpg" alt="Temperatura da água" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img src="/images/posts/15.jpg" alt="Cuidados após o banho" class="w-full h-full object-cover" />
          </div>
        </div>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#83b2ac] mb-4">
              Posts e Artigos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conhecimento e orientações da Dra. Fernanda Kruger para cuidar melhor do seu filho
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Style Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Posts */}
      {posts.map((post) => (
        <section key={post.id} id={`post-${post.id}`} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back to top button */}
              <div className="mb-8">
                <Button 
                  variant="outline" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao Topo
                </Button>
              </div>

              {/* Post Header */}
              <div className="mb-12">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#83b2ac] mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                </div>
              </div>

              {/* Post Content - Instagram Style */}
              <div className="flex justify-center">
                <div className="max-w-2xl">
                  <div 
                    className="space-y-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Posts;
