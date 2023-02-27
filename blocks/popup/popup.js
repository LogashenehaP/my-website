
import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';
/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */ 

export default async function decorate(block) {

  const cfg = readBlockConfig(block);
  console.log(cfg);
  block.textContent = '';
  const popUpPath = cfg.popup || '/popup';
  console.log(fpopUpPath);
   const resp = await fetch(`${popUpPath}.plain.html`, window.location.pathname.endsWith('/popup') ? { cache: 'reload' } : {});
  console.log(resp);
   const html = await resp.text();
  console.log(html);
  const popup = document.createElement('div');
  popup.innerHTML = html;
  console.log(popup);
  block.append(popup);
  console.log(block)
