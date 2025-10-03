"use client";

import { useState, useEffect } from 'react';
import Chatbot from '../app/chatbot/chatbot'; // Verifique se o caminho para seu componente Chatbot está correto
import styles from './FloatingChat.module.css';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingChat({ cor }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

    // 1. Novo estado para controlar a visibilidade do tooltip
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    // --- INÍCIO DA LÓGICA ATUALIZADA DO TOOLTIP ---
  useEffect(() => {
    // Variáveis para controlar o tempo
    const showDelay = 2000; // Espera 2s para mostrar a primeira vez
    const visibleDuration = 5000; // Fica visível por 5s
    const repeatInterval = 20000; // O ciclo todo se repete a cada 20s

    let hideTimeout;
    
    // Função que controla um ciclo de "mostrar e esconder"
    const runTooltipCycle = () => {
      setIsTooltipVisible(true);
      
      hideTimeout = setTimeout(() => {
        setIsTooltipVisible(false);
      }, visibleDuration);
    };

    // Roda o ciclo pela primeira vez após o delay inicial
    const initialTimeout = setTimeout(runTooltipCycle, showDelay);
    
    // Inicia o loop para repetir o ciclo a cada 'repeatInterval'
    const intervalId = setInterval(runTooltipCycle, repeatInterval);

    // Função de limpeza: ESSENCIAL para evitar bugs
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearInterval(intervalId);
    };
  }, []);  
 
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const estiloVariavel = {
    '--cor-tema': cor 
  };

  return (
    <>
      <div className={styles.floatingButtonWrapper}>

        {isTooltipVisible && !isChatOpen && (
          <div className={`${styles.tooltip} ${isTooltipVisible && !isChatOpen ? styles.visible : ''}`}>
            Converse com a MaIA!
          </div>
        )}

      {/* O Botão Flutuante */}
        <button
            style={estiloVariavel}
            className={styles.floatingButton}
            onClick={toggleChat}
        >
            <MessageCircle size={24} />
        </button>
      </div>   
      {/* O Painel do Chat que desliza da direita */}
      <div className={`${styles.chatPanel} ${isChatOpen ? styles.open : ''}`}>
         {/* O Cabeçalho do Painel com o botão de fechar */}
         <div className={styles.chatPanelHeader}>
             <h2>MaIA</h2>
             <button onClick={toggleChat} className={styles.closeButton}>
                 <X size={20} />
             </button>
         </div>

         {/* Renderiza seu componente de chatbot já existente aqui dentro */}
         <div className="home-chat-overrides"> 
          <Chatbot />
         </div>
      </div>
    </>
  );
}