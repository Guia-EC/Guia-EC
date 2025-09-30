"use client";

import { useState } from 'react';
import Chatbot from '../app/chatbot/chatbot'; // Verifique se o caminho para seu componente Chatbot está correto
import styles from './FloatingChat.module.css';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* O Botão Flutuante */}
      <button
        className={styles.floatingButton}
        onClick={toggleChat}
        data-tooltip="Converse com a MaIA!"
      >
        <MessageCircle size={24} />
      </button>

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
         <div className={styles.chatPanelBody}>
          <Chatbot />
         </div>
      </div>
    </>
  );
}