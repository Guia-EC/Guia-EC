"use client"; // A linha MAIS IMPORTANTE!

import { useEffect } from 'react';

export default function SWManager() {
  
  // Este é o código de registro do "Passo 3"
  useEffect(() => {
    // Este código só roda no navegador (client-side)
    // e depois que a página é carregada
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
          })
          .catch(error => {
            console.log('Falha ao registrar Service Worker:', error);
          });
      });
    }
  }, []); // O array vazio [] garante que isso só rode uma vez

  // Este componente não renderiza nada na tela,
  // ele só existe para rodar o código acima.
  return null;
}