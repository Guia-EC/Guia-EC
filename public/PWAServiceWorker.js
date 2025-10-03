'use client';

import { useEffect } from 'react';

const PWAServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('Service Worker registrado com sucesso:', registration))
        .catch((error) => console.error('Falha ao registrar Service Worker:', error));
    }
  }, []);

  return null; // O componente não renderiza nada na tela
};

export default PWAServiceWorker;