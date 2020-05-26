import path from 'path';
import fs from 'fs';

export default function renderFullPage(html, preloadedState) {
  // TODO: Its a blocking file read, It should be async
  const contents = fs.readFileSync(path.resolve('./build/index.html'), 'utf8');

  const contentWithHtml = contents.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );

  return contentWithHtml.replace(
    '<div id="initial-state"></div>',
    ` <script>
            window.__STATE__ = ${JSON.stringify(preloadedState)}
        </script>`,
  );
}
