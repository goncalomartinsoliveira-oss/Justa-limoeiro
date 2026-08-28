# Pátio Justa Limoeiro

Site institucional do Pátio Justa Limoeiro, alojamento local em Santa Justa, Coruche.

Construído com [Next.js](https://nextjs.org) (App Router, export estático), em três idiomas: Português (`/`), Inglês (`/en`) e Espanhol (`/es`).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de produção (site estático)

```bash
npm run build
```

Gera o site estático na pasta `out/`, pronto a publicar em qualquer alojamento estático (Netlify, Vercel, GitHub Pages, etc.).

## Estrutura de conteúdo

- `src/data/home.ts` — textos da página principal, por idioma.
- `src/data/poi.ts` — pontos de interesse (categorias, distâncias, descrições), por idioma.
- `src/data/nav.ts` — textos do menu e rodapé, por idioma.
- `public/images/` — imagens do site. As imagens `placeholder-*.svg` são provisórias e devem ser substituídas por fotografias reais da casa.

## Por confirmar

- Fotografias profissionais da casa (a substituir os placeholders em `public/images/`).
- Pontos de interesse adicionais na página "Pontos de Interesse" (marcados como "Brevemente").
- Ligação do formulário de reserva direta a um serviço de envio de email.
