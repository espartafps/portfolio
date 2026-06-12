# Portfolio — Felipe Silva

Portfolio pessoal construído com Astro, TypeScript e Tailwind CSS.

## Stack

- **[Astro](https://astro.build)** v5 — framework de sites estáticos
- **TypeScript** — tipagem dos dados de projetos
- **Tailwind CSS** v3 — estilização utility-first
- Dark mode por padrão, com toggle persistido no `localStorage`

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento em localhost:4321
npm run dev

# Build de produção (gera ./dist/)
npm run build

# Pré-visualizar o build
npm run preview
```

## Deploy

### Vercel (recomendado)

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. O Vercel detecta Astro automaticamente — nenhuma configuração extra necessária
4. Clique em **Deploy**

> O arquivo `vercel.json` já está configurado com `outputDirectory: "dist"`.

### Cloudflare Pages

1. Faça push para o GitHub
2. No Cloudflare Pages, clique em **Create a project → Connect to Git**
3. Selecione o repositório
4. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Clique em **Save and Deploy**

### GitHub Pages

1. Instale o adaptador estático do Astro (já é o padrão, nenhum adaptador extra necessário)
2. Em `astro.config.mjs`, adicione `base: '/nome-do-repo'` se o site não for na raiz
3. Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

4. Em **Settings → Pages**, selecione **GitHub Actions** como fonte

## OG Image (preview no LinkedIn)

Adicione uma imagem `public/og-image.png` com **1200 × 630 px** para que o link do seu portfolio renderize corretamente no LinkedIn e no WhatsApp.

Você pode gerar uma via [og-image.vercel.app](https://og-image.vercel.app) ou qualquer ferramenta de design.

## Adicionar um novo projeto

Edite [`src/data/projects.ts`](src/data/projects.ts) e adicione um novo objeto ao array `projects`:

```ts
{
  id: 'meu-projeto',
  title: 'Título do Projeto',
  tagline: 'Uma frase que resume o projeto.',
  problem: 'O problema que ele resolve.',
  approach: 'Como você o resolveu tecnicamente.',
  result: 'O resultado ou impacto.',
  stack: ['Python', 'FastAPI'],
  github: 'https://github.com/espartafps/meu-projeto',
  status: 'active', // ou 'wip'
}
```

O card aparece automaticamente na seção de projetos.

## Personalização rápida

| O que mudar | Onde |
|---|---|
| Cor de destaque | `tailwind.config.mjs` → `colors.accent` |
| Conteúdo da seção "Sobre" | `src/components/About.astro` |
| Links de contato | `src/components/Contact.astro` |
| Projetos | `src/data/projects.ts` |
| Metadados SEO (título, descrição) | `src/layouts/Layout.astro` |
| URL do site | `astro.config.mjs` → `site` |
