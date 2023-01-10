// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeSetting } from '../router';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = p => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('../../dist/index.html'), 'utf-8');
const { render } = await import('../../dist/server/entry-server.js');

// determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('../pages')).map(file => {
    console.log(55, file);
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'home' ? `/` : `/${name}`;
});

(async () => {
    const { default: manifest } = await import('../../dist/ssr-manifest.json');
    // pre-render each route...
    for (const url of routesToPrerender) {
        const [appHtml] = await render(url, manifest);

        let html = template.replace(`<!--app-html-->`, appHtml);

        const meta = routeSetting.find(item => item.path === url);
        const title = meta?.title || 'Default 主題';
        html = html.replace(
            `<!--index-title-->`,
            `<title>${title}</title>
        <meta property="og:title" content="${title}" />
        <meta name="twitter:title" content="${title}" />`
        );
        const description = meta?.description || 'Default 描述';
        html = html.replace(
            `<!--index-description-->`,
            `<meta name="description" content="${description}" />
        <meta property="og:description" content="${description}" />
        <meta name="twitter:description" content="${description}" />`
        );

        const filePath = `../../dist${url === '/' ? '/index' : url}.html`;
        fs.writeFileSync(toAbsolute(filePath), html);
        console.log('pre-rendered:', filePath);
    }

    // done, delete server
    fs.unlinkSync(toAbsolute('../../dist/server/entry-server.js'));
    fs.unlinkSync(toAbsolute('../../dist/server/favicon.ico'));
    fs.unlinkSync(toAbsolute('../../dist/server/fb.jpg'));
    fs.rmdirSync(toAbsolute('../../dist/server'));
})();
