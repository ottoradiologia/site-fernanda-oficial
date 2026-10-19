import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppContent } from './App';
import { ROUTE_META, SITE_URL } from './components/SEOHead';

// Usado só no build: gera o HTML de cada rota para robôs que não executam JavaScript.
export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}

export { ROUTE_META, SITE_URL };
