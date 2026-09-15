/* =========================================================================
   TODO CON PAPEL — icons.js
   Librería de íconos SVG en línea (placeholders "hechos a mano" mientras no
   hay fotos reales). No hace falta editar este archivo.
   ========================================================================= */

const ICONS = {
  bag: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 24h28l-2 30a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4L18 24Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 24v-6a8 8 0 0 1 16 0v6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M26 34c1.5 3 10.5 3 12 0" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',

  cup: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 22h24l-2.5 30a4 4 0 0 1-4 3.5H26.5a4 4 0 0 1-4-3.5L20 22Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M20 22 22 14h20l2 8" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M26 30c2 2 10 2 12 0" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',

  mug: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="18" width="30" height="30" rx="3" stroke="currentColor" stroke-width="3"/><path d="M42 24h6a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6h-6" stroke="currentColor" stroke-width="3"/><path d="M18 26c3-3 6-3 9 0M28 26c3-3 6-3 9 0" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',

  box: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="26" width="36" height="24" rx="3" stroke="currentColor" stroke-width="3"/><path d="M14 26 32 16l18 10" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M32 16v34" stroke="currentColor" stroke-width="3"/><path d="M24 34l8 4 8-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',

  topper: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 52V22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M44 52V30" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M20 22l16-8 8 6-14 8-10-6Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M44 30l8-4-4-6" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="52" r="3" stroke="currentColor" stroke-width="2.5"/><circle cx="44" cy="52" r="3" stroke="currentColor" stroke-width="2.5"/></svg>',

  table: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 26h44l-4 6H14l-4-6Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M16 32v18M48 32v18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M32 8v14M24 12l8 6 8-6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',

  candy: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="32" rx="12" ry="8" stroke="currentColor" stroke-width="3"/><path d="M20 28 8 20M20 36 8 44M44 28l12-8M44 36l12 8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',

  herb: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20h24v32a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V20Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M20 20l-2-8h28l-2 8" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M27 30c3 6 3 12 0 16M37 30c-3 6-3 12 0 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',

  mate: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 28a10 10 0 0 0 20 0" stroke="currentColor" stroke-width="3"/><path d="M18 28h28l-2 20a6 6 0 0 1-6 5H26a6 6 0 0 1-6-5l-2-20Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M38 22l6-10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',

  photomug: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="16" width="30" height="32" rx="3" stroke="currentColor" stroke-width="3"/><path d="M42 24h6a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-6" stroke="currentColor" stroke-width="3"/><circle cx="20" cy="26" r="3" stroke="currentColor" stroke-width="2.5"/><path d="M14 42l7-8 6 6 5-5 8 9" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/></svg>',

  thermo: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 14h20v6H22z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M20 20h24l-1.5 30a5 5 0 0 1-5 4.5h-11a5 5 0 0 1-5-4.5L20 20Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>',

  shirt: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 14 12 20l4 8 6-3v29a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V25l6 3 4-8-10-6a6 6 0 0 1-12 0Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>',

  backpack: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 26a12 12 0 0 1 24 0v24a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V26Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 26v-4a8 8 0 0 1 16 0v4" stroke="currentColor" stroke-width="3"/><rect x="26" y="34" width="12" height="10" rx="2" stroke="currentColor" stroke-width="2.5"/></svg>',

  notebook: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="10" width="32" height="44" rx="3" stroke="currentColor" stroke-width="3"/><path d="M16 18h32M16 46h32" stroke="currentColor" stroke-width="2" stroke-dasharray="1 4" stroke-linecap="round"/><circle cx="12" cy="18" r="2" fill="currentColor"/><circle cx="12" cy="28" r="2" fill="currentColor"/><circle cx="12" cy="38" r="2" fill="currentColor"/><circle cx="12" cy="48" r="2" fill="currentColor"/></svg>',

  ring: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="28" height="44" rx="3" stroke="currentColor" stroke-width="3"/><circle cx="14" cy="16" r="3" stroke="currentColor" stroke-width="2.5"/><circle cx="14" cy="26" r="3" stroke="currentColor" stroke-width="2.5"/><circle cx="14" cy="36" r="3" stroke="currentColor" stroke-width="2.5"/><circle cx="14" cy="46" r="3" stroke="currentColor" stroke-width="2.5"/></svg>',

  planner: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="14" width="40" height="38" rx="3" stroke="currentColor" stroke-width="3"/><path d="M12 24h40" stroke="currentColor" stroke-width="3"/><path d="M22 10v8M42 10v8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M20 32h6M30 32h6M40 32h4M20 40h6M30 40h6M40 40h4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',

  balloon: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="24" rx="16" ry="18" stroke="currentColor" stroke-width="3"/><path d="M32 42c-1 3 2 4 1 7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M32 49v10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 3"/></svg>',

  star: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 8l6.5 15.5L54 26l-11 11 3 17-14-8-14 8 3-17-11-11 15.5-2.5L32 8Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>',

  gift: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="26" width="40" height="28" rx="3" stroke="currentColor" stroke-width="3"/><path d="M12 34h40" stroke="currentColor" stroke-width="3"/><path d="M32 26v28" stroke="currentColor" stroke-width="3"/><path d="M32 26c-4-10-18-10-16-2 1 5 9 4 16 2Zm0 0c4-10 18-10 16-2-1 5-9 4-16 2Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>',

  scissors: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="3"/><circle cx="16" cy="48" r="6" stroke="currentColor" stroke-width="3"/><path d="M20 20 52 50M20 44 52 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',

  whatsapp: '<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.2.6 4.27 1.63 6.05L3 29l8.16-2.6a11.9 11.9 0 0 0 4.86 1.03H16c6.62 0 12-5.38 12-12S22.64 3 16.02 3Zm0 21.8c-1.68 0-3.3-.44-4.7-1.28l-.34-.2-4.85 1.55 1.58-4.72-.22-.35A9.7 9.7 0 0 1 6.22 15c0-5.4 4.4-9.8 9.8-9.8 5.4 0 9.8 4.4 9.8 9.8 0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.15-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.07 4.48.71.3 1.26.49 1.69.62.71.22 1.35.19 1.86.12.57-.09 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z"/></svg>',

  instagram: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="24" height="24" rx="7" stroke="currentColor" stroke-width="2.2"/><circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="2.2"/><circle cx="23.2" cy="8.8" r="1.6" fill="currentColor"/></svg>',

  location: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 29s10-9.3 10-16.5S22.2 3 16 3 6 5.8 6 12.5 16 29 16 29Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="16" cy="12.5" r="4" stroke="currentColor" stroke-width="2.2"/></svg>',

  cart: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h3l3 16h15l3-11H9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="27" r="2" fill="currentColor"/><circle cx="22" cy="27" r="2" fill="currentColor"/></svg>',

  check: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 17l7 7 13-15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',

  close: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7l18 18M25 7 7 25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',

  plus: '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6v20M6 16h20" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>'
};

function getIcon(name) {
  return ICONS[name] || ICONS.star;
}
