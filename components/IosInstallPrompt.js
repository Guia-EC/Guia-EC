"use client";

import { useState, useEffect } from 'react';
import styles from './IosInstallPrompt.module.css';
import { X, Share } from 'lucide-react'; // Ícones para fechar e compartilhar

const IosInstallPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Função para detectar dispositivos iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    // Verifica se o app já está rodando como um PWA instalado
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
    
    // Verifica se o usuário já fechou o banner antes
    const hasDismissed = localStorage.getItem('iosInstallPromptDismissed') === 'true';

    // Mostra o banner apenas se for iOS, não estiver instalado, e não tiver sido fechado antes
    if (isIos() && !isInStandaloneMode() && !hasDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    // Esconde o banner
    setIsVisible(false);
    // Salva a escolha do usuário para não mostrar novamente
    localStorage.setItem('iosInstallPromptDismissed', 'true');
  };

  // Se não for para mostrar o banner, não renderiza nada
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.promptBanner}>
      <div className={styles.promptContent}>
        <p className={styles.promptText}>
          Para instalar, toque em <Share size={16} className={styles.shareIcon} /> e depois em "Adicionar à Tela de Início".
        </p>
        <button onClick={handleClose} className={styles.closeButton} aria-label="Fechar">
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default IosInstallPrompt;
