"use client"; // ESSENCIAL: Garanta que esta linha esteja no topo.

// Hooks do React que vamos usar para gerenciar o estado do chat
import { useState, useEffect, useRef } from 'react';

// Seus imports existentes
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./chatbot.module.css";

// Usando o seu componente Chatbot!
export default function Chatbot() {
  // --- INÍCIO DA LÓGICA DO CHAT (copiada do exemplo anterior) ---

  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState([]); // Guarda o histórico da conversa
  const [input, setInput] = useState('');       // O que o usuário está digitando
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null); // Usado para rolar o chat para a última mensagem

  // Efeito que roda uma vez para criar o Session ID e a mensagem de boas-vindas
  useEffect(() => {
    let storedSessionId = localStorage.getItem('maiaSessionId');
    if (!storedSessionId) {
      storedSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('maiaSessionId', storedSessionId);
    }
    setSessionId(storedSessionId);
    
    setMessages([{ sender: 'MaIA', text: 'Olá! Como posso te ajudar a descobrir seu roteiro ideal?' }]);
  }, []);

  // Efeito que rola a tela para baixo a cada nova mensagem
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Função chamada quando o usuário envia uma mensagem
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: 'Você', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, sessionId: sessionId }),
      });

      const data = await response.json();

      // ADICIONE ESTA LINHA PARA VER A RESPOSTA DA NOSSA API
      console.log("RESPOSTA DA NOSSA API /api/chat:", JSON.stringify(data, null, 2));
      
      const aiMessage = { sender: 'MaIA', text: data.reply };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      const errorMessage = { sender: 'MaIA', text: 'Desculpe, estou com problemas de conexão.' };
      setMessages(prev => [...prev, errorMessage]);
      console.error("Erro no chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- FIM DA LÓGICA DO CHAT ---

  return (
    <Box className={styles.chatbot}>
      {/* Área onde as mensagens da conversa serão exibidas */}
      <Box className={styles.interactionWrapper}>
        {messages.map((msg, index) => (
          <Box key={index} className={msg.sender === 'Você' ? styles.userMessage : styles.aiMessage}>
            <Typography variant="body1"><strong>{msg.sender}:</strong> {msg.text}</Typography>
          </Box>
        ))}
        {/* Mostra "digitando..." enquanto a IA pensa */}
        {isLoading && <Typography variant="body2">MaIA está digitando...</Typography>}
        {/* Elemento invisível para ajudar a rolar a tela */}
        <div ref={chatEndRef} />
      </Box>

      {/* Formulário para o usuário digitar a mensagem */}
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          className={styles.textInput}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Converse com a MaIA..."
          disabled={isLoading}
        />
        <button type="submit" className={styles.sendButton} disabled={isLoading}>
          Enviar
        </button>
      </form>
    </Box>
  );
}