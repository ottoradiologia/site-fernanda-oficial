# 📸 Instruções para Adicionar Fotos ao Site

## 📁 Estrutura de Pastas Criada

```
public/
└── images/
    ├── clinic/     (Fotos do consultório)
    ├── doctor/     (Fotos da Dra. Fernanda)
    └── hero/       (Fotos principais/banner)
```

## 🏥 **Fotos do Consultório** → `public/images/clinic/`

**Fotos necessárias:**
1. `recepcao.jpg` - Recepção moderna e aconchegante
2. `consultorio.jpg` - Consultório com decoração infantil  
3. `espaco-ludico.jpg` - Espaço lúdico para as crianças
4. `mesa-exames.jpg` - Mesa de exames pediátricos
5. `decoracao.jpg` - Detalhes da decoração especial
6. `ambiente.jpg` - Ambiente seguro e confortável

## 👩‍⚕️ **Fotos da Dra. Fernanda** → `public/images/doctor/`

**Fotos necessárias:**
1. `fernanda-perfil.jpg` - Foto de perfil da Dra. Fernanda (circular)
2. `fernanda-about.jpg` - Foto para a seção "Sobre Mim"

## 🎨 **Fotos do Banner Principal** → `public/images/hero/`

**Fotos necessárias:**
1. `banner-principal.jpg` - Foto principal do banner (opcional)

## 📝 **Como usar as fotos:**

### 1. **Fotos do Consultório**
Substitua no arquivo `src/pages/Clinic.tsx`:
```javascript
const clinicImages = [
  { src: "/images/clinic/recepcao.jpg", alt: "Recepção moderna e aconchegante" },
  { src: "/images/clinic/consultorio.jpg", alt: "Consultório com decoração infantil" },
  { src: "/images/clinic/espaco-ludico.jpg", alt: "Espaço lúdico para as crianças" },
  { src: "/images/clinic/mesa-exames.jpg", alt: "Mesa de exames pediátricos" },
  { src: "/images/clinic/decoracao.jpg", alt: "Detalhes da decoração especial" },
  { src: "/images/clinic/ambiente.jpg", alt: "Ambiente seguro e confortável" }
];
```

### 2. **Fotos da Dra. Fernanda**
Substitua no arquivo `src/pages/Index.tsx`:
```javascript
// Foto circular no banner principal
<img 
  src="/images/doctor/fernanda-perfil.jpg" 
  alt="Dra. Fernanda Kruger" 
  className="w-72 h-72 rounded-full object-cover"
/>

// Foto na seção "Sobre Mim"
<img 
  src="/images/doctor/fernanda-about.jpg" 
  alt="Dra. Fernanda" 
  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
/>
```

## ⚠️ **Dicas importantes:**

1. **Formatos aceitos:** JPG, PNG, WebP
2. **Tamanhos recomendados:**
   - Fotos do consultório: 800x600px ou 1200x800px
   - Foto de perfil: 400x400px (será cortada em círculo)
   - Foto "Sobre Mim": 600x800px
3. **Qualidade:** Use imagens de boa qualidade, mas otimize para web (não muito pesadas)
4. **Nomes dos arquivos:** Use nomes simples, sem espaços ou acentos

## 🔄 **Após adicionar as fotos:**

1. Salve as fotos nas pastas corretas
2. Atualize os caminhos no código conforme mostrado acima
3. O site atualizará automaticamente (hot reload)

## 📞 **Precisa de ajuda?**

Se tiver dúvidas sobre onde colocar alguma foto específica ou como atualizar o código, é só perguntar! 