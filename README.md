# Site Dra. Fernanda Kruger - Pediatra

Site institucional da Dra. Fernanda Favali Kruger, pediatra e pneumopediatra no bairro Paraíso, São Paulo.

**URL**: [drafernandakruger.com.br](https://www.drafernandakruger.com.br)

## Tecnologias

- **Vite** - Build tool
- **React** - Interface
- **TypeScript** - Tipagem
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes
- **React Router** - Navegação

## Funcionalidades

- Página inicial com serviços, avaliações do Google e agendamento Doctoralia
- Sobre Mim - trajetória e qualificações
- Cuidados Especializados - consulta pediátrica, pneumologia, sono, vacinação
- Programa Mil Cuidados
- Mil Vacinas - sala de vacinação integrada
- Consultório - galeria e tour virtual
- Contato - WhatsApp, e-mail, mapa
- FAQ - dúvidas frequentes
- Suporte a PT/EN

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/ottoradiologia/site-fernanda-oficial.git
cd site-fernanda-oficial

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse http://localhost:5173

## Build

```bash
npm run build
```

O resultado fica na pasta dist/

## Otimização de imagens

Para reduzir o tamanho das fotos e melhorar o carregamento:

```bash
npm run optimize-images
```

Redimensiona para até 1920px e comprime JPEG/PNG. Use antes de fazer deploy após adicionar novas imagens.

## Deploy

O projeto está configurado para Netlify e Vercel (netlify.toml, vercel.json).

## Projeto Lovable

Este repositório está conectado ao [Lovable](https://lovable.dev/projects/8f6b0532-e9cf-4a5d-8d04-6b878d55c459). Alterações feitas via Lovable são enviadas automaticamente para este repo.