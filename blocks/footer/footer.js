import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {

  const cfg = readBlockConfig(block);
  console.log(cfg);
  block.textContent = '';
  const footerPath = cfg.footer || '/footer';
  console.log(footerPath);
   const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});
  console.log(resp);
   const html = await resp.text();
  console.log(html);
  const footer = document.createElement('div');
  footer.innerHTML = html;
  console.log(footer);
  await decorateIcons(footer);
  block.append(footer);
}
