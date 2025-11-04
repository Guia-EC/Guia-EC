// // public/sw.js

// self.addEventListener('install', (event) => {
//   console.log('Service Worker installing.');
// });

// self.addEventListener('activate', (event) => {
//   console.log('Service Worker activating.');
// });

// // Um listener de fetch é o mínimo necessário para o PWA ser "instalável"
// self.addEventListener('fetch', (event) => {
//   // Você pode adicionar lógicas de cache aqui depois, se quiser
// });

// public/sw.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

// OBRIGATÓRIO: O ouvinte de 'fetch' precisa RESPONDER ao evento.
self.addEventListener('fetch', (event) => {
  // Esta linha é a que estava faltando:
  event.respondWith(fetch(event.request));
});