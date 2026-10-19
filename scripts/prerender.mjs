// Pré-renderiza cada rota no build: gera dist/<rota>.html com o HTML do React e
// título, descrição e canonical próprios, para buscadores e robôs de IA.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { render, ROUTE_META, SITE_URL } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const template = readFileSync(path.join(root, 'dist', 'index.html'), 'utf-8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error('Marcador <div id="root"></div> não encontrado em dist/index.html');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const setTag = (html, re, replacement) => {
  if (!re.test(html)) throw new Error(`Tag não encontrada: ${re}`);
  return html.replace(re, replacement);
};

for (const [route, meta] of Object.entries(ROUTE_META)) {
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  let html = template.replace(marker, `<div id="root">${render(route)}</div>`);
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(meta.description)}" />`);
  html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(meta.title)}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(meta.description)}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);

  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  writeFileSync(path.join(root, 'dist', file), html);
  console.log(`Pré-renderizado: ${route} -> dist/${file} (${Math.round(html.length / 1024)} KB)`);
}

rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
