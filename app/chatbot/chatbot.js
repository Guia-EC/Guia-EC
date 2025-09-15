"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Send,
  Mic,
  Map,
  Clock,
  CircleHelp,
  Navigation,
} from "lucide-react";

export default function Chatbot() {
  // --- LÓGICA FUNCIONAL INTEGRADA ---
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([]); // Histórico da conversa
  const [input, setInput] = useState(""); // O que o usuário está digitando
  const [isLoading, setIsLoading] = useState(false); // Controla o indicador "digitando..."
  const chatEndRef = useRef(null); // Para rolar o chat para a última mensagem
  const [userLocation, setUserLocation] = useState(null); // Ex: { latitude: -23.55, longitude: -46.63 }

  // Efeito que roda uma vez para criar o Session ID e pegar a localização
  useEffect(() => {
    let storedSessionId = localStorage.getItem("maiaSessionId");
    if (!storedSessionId) {
      storedSessionId =
        "session_" +
        Date.now() +
        "_" +
        Math.random().toString(36).substring(2, 9);
      localStorage.setItem("maiaSessionId", storedSessionId);
    }
    setSessionId(storedSessionId);

    // Tenta obter a geolocalização assim que o chat carrega
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          // ===== INÍCIO DA LINHA DE DEPURAÇÃO =====
          console.log("GEOLOCALIZAÇÃO OBTIDA NO FRONTEND:", newLocation);
          // ===== FIM DA LINHA DE DEPURAÇÃO =====
          setUserLocation(newLocation);
        },
        (error) => {
          console.error("ERRO DE GEOLOCALIZAÇÃO:", error.message);
          setUserLocation(null); // Garante que a localização seja nula em caso de erro
        }
      );
    }
  }, []);

  // Efeito que rola a tela para baixo a cada nova mensagem
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Função para enviar uma mensagem para a API
  const sendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { sender: "Você", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Limpa o input após o envio
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          sessionId: sessionId,
          location: userLocation, // Envia o objeto de localização (ou null se não tiver)
        }),
      });

      const data = await response.json();

      const aiMessage = {
        sender: "Maia",
        text: data.reply,
        mapUrl: data.mapUrl || null,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        sender: "Maia",
        text: "Desculpe, estou com problemas de conexão.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Erro no chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função chamada quando o formulário é enviado (Enter ou clique no botão)
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Função para lidar com o clique em uma sugestão
  const handleSuggestionClick = (suggestionText) => {
    sendMessage(suggestionText);
  };

  const suggestions = [
    {
      icon: <CircleHelp size={20} />,
      text: "Descrição dos tipos de roteiros",
      category: "Sobre o App",
    },
    {
      icon: <Clock size={20} />,
      text: "Qual o horário de funcionamento do MASP?",
      category: "Horários",
    },
    {
      icon: <Map size={20} />,
      text: "É minha primeira vez em SP. Qual roteiro devo fazer?",
      category: "Roteiros",
    },
    {
      icon: <Navigation size={20} />,
      text: "Como chegar no Copan?",
      category: "Navegação",
    },
  ];

  return (
    <>
      <style>{`
            .chat-container {
              display: flex;
              flex-direction: column;
              height: 100vh; /* Ou a altura desejada */
              max-width: 400px; /* Largura máxima para a visualização */
              margin: 0 auto; /* Centraliza o container */
              border: 1px solid #eee;
              border-radius: 16px;
              overflow: hidden;
              background: #fff;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            }

            /* Header */
            .chat-header {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 12px 16px;
              border-bottom: 1px solid #eee;
              flex-shrink: 0;
            }

            .icon-button {
              background: none;
              border: none;
              cursor: pointer;
              padding: 6px;
              border-radius: 50%;
              transition: background 0.2s;
              color: #555;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .icon-button:hover {
              background: rgba(0, 0, 0, 0.05);
            }

            .header-info {
              display: flex;
              align-items: center;
              gap: 12px;
            }

            .avatar {
              width: 36px;
              height: 36px;
              background: black;
              color: white;
              font-weight: bold;
              font-size: 16px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .chat-title {
              font-size: 16px;
              font-weight: 600;
              margin: 0;
            }

            .status {
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 13px;
              color: #666;
            }

            .status-dot {
              width: 8px;
              height: 8px;
              background: #ff9f1c;
              border-radius: 50%;
              animation: pulse 1.5s infinite;
            }

            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }

            /* Chat Body */
            .chat-body {
              flex: 1;
              padding: 16px;
              overflow-y: auto;
              display: flex;
              flex-direction: column;
              gap: 16px;
            }

            .message {
              display: flex;
              gap: 12px;
              max-width: 90%;
            }

            .message.ai-message {
              align-self: flex-start;
            }

            .message.user-message {
              align-self: flex-end;
              flex-direction: row-reverse;
            }

            .message-bubble {
              padding: 12px 16px;
              border-radius: 18px;
              font-size: 15px;
              line-height: 1.5;
            }

            .message-bubble p {
              margin: 0;
            }

            .message-bubble p:not(:last-child) {
              margin-bottom: 8px;
            }

            .message.ai-message .message-bubble {
              background: #f1f1f1;
              color: #333;
              border-top-left-radius: 6px;
            }

            .message.user-message .message-bubble {
              background: #ff9f1c;
              color: white;
              border-top-right-radius: 6px;
            }


            .welcome {
              font-weight: 600;
              margin-bottom: 6px;
              font-size: 15px;
            }

            /* Suggestions */
            .suggestions {
              margin-top: 12px;
              border-top: 1px solid #f0f0f0;
              padding-top: 20px;
            }

            .suggestions-title {
              font-size: 14px;
              font-weight: 500;
              color: #888;
              margin-bottom: 12px;
            }

            .suggestions-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
            }

            .suggestion {
              display: flex;
              align-items: flex-start;
              padding: 12px;
              border: 1px solid #ddd;
              border-radius: 12px;
              text-align: left;
              background: white;
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              gap: 12px;
            }

            .suggestion:hover {
              border-color: #ff9f1c;
              background: #fffaf0;
              transform: translateY(-2px);
              box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }

            .suggestion-icon {
              margin-top: 2px;
            }

            .suggestion-icon svg {
              width: 20px;
              height: 20px;
              color: #555;
              flex-shrink: 0;
              transition: color 0.2s;
            }

            .suggestion:hover .suggestion-icon svg {
              color: #ff9f1c;
            }

            .suggestion-text {
              font-size: 14px;
              font-weight: 500;
              line-height: 1.4;
              color: #333;
            }

            .suggestion-category {
              font-size: 12px;
              color: gray;
              margin-top: 4px;
            }

            /* Typing Indicator */
            .typing-indicator {
              display: flex;
              align-items: center;
              gap: 5px;
              padding: 14px 16px;
              background: #f1f1f1;
              border-radius: 18px;
              border-top-left-radius: 6px;
            }

            .dot {
              width: 8px;
              height: 8px;
              background: #999;
              border-radius: 50%;
              animation: bounce 0.6s infinite alternate;
            }

            .dot.delay1 { animation-delay: 0.1s; }
            .dot.delay2 { animation-delay: 0.2s; }

            @keyframes bounce {
              from { transform: translateY(0); }
              to { transform: translateY(-4px); }
            }

            /* Input Area */
            .chat-input-form {
              padding: 12px 16px;
              border-top: 1px solid #eee;
              background: #fafafa;
              flex-shrink: 0;
            }
            .chat-input {
              display: flex;
              align-items: center;
              background: #f1f1f1;
              border-radius: 99px;
              padding: 4px 8px;
            }

            .chat-input input {
              flex: 1;
              border: none;
              background: transparent;
              padding: 10px;
              font-size: 16px;
              outline: none;
              color: #333;
            }

            .send-button {
              background: #ff9f1c;
              border: none;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              color: white;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.2s;
              flex-shrink: 0;
            }

            .send-button:hover {
              background: #e68a00;
              transform: scale(1.05);
            }

            .send-button:disabled {
              background: #ddd;
              cursor: not-allowed;
              transform: scale(1);
            }

            .disclaimer {
              font-size: 12px;
              color: #aaa;
              text-align: center;
              padding: 8px 0;
              background: #fafafa;
            }
        `}</style>
        <div className="chat-container">
            {/* Header (Visual) */}
            <div className="chat-header">
                <button className="icon-button">
                <ArrowLeft size={20} />
                </button>
                <div className="header-info">
                <div className="avatar">M</div>
                <div>
                    <h1 className="chat-title">Maia</h1>
                    <div className="status">
                    <div className="status-dot"></div>
                    <span>Online</span>
                    </div>
                </div>
                </div>
            </div>

            {/* Corpo do Chat (Visual + Lógica) */}
            <div className="chat-body">
                
                {/* Mensagem de boas-vindas e sugestões (aparecem apenas no início) */}
                {messages.length === 0 && !isLoading && (
                <>
                    <div className="message ai-message">
                    <div className="avatar">M</div>
                    <div className="message-bubble">
                        <p className="welcome">Olá! 👋</p>
                        <p>Sou a Maia, como posso te ajudar hoje?</p>
                    </div>
                    </div>
                    <div className="suggestions">
                    <p className="suggestions-title">Sugestões para começar:</p>
                    <div className="suggestions-grid">
                        {suggestions.map((s, i) => (
                        <button key={i} className="suggestion" onClick={() => handleSuggestionClick(s.text)}>
                            <div className="suggestion-icon">{s.icon}</div>
                            <div>
                            <p className="suggestion-text">{s.text}</p>
                            <p className="suggestion-category">{s.category}</p>
                            </div>
                        </button>
                        ))}
                    </div>
                    </div>
                </>
                )}

                {/* Histórico da conversa */}
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'Você' ? 'user-message' : 'ai-message'}`}>
                        {msg.sender === 'Maia' && <div className="avatar">M</div>}
                        <div className="message-bubble">
                            {/* Suporte para quebras de linha e verificação de segurança */}
                            {msg.text && msg.text.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}

                            {/* Renderização condicional do mapa */}
                            {msg.mapUrl && (
                                <iframe
                                    src={msg.mapUrl}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, marginTop: '10px', borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            )}
                        </div>
                    </div>
                ))}

                {/* Indicador "digitando..." */}
                {isLoading && (
                <div className="message ai-message">
                    <div className="avatar">M</div>
                    <div className="typing-indicator">
                    <div className="dot"></div>
                    <div className="dot delay1"></div>
                    <div className="dot delay2"></div>
                    </div>
                </div>
                )}
                {/* Elemento invisível para rolar a tela */}
                <div ref={chatEndRef} />
            </div>

            {/* Input (Visual + Lógica) */}
            <form className="chat-input-form" onSubmit={handleSubmit}>
                <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pergunte alguma coisa"
                    disabled={isLoading}
                />
                <button type="button" className="icon-button">
                    <Mic size={20} />
                </button>
                <button type="submit" className="send-button" disabled={!input.trim() || isLoading}>
                    <Send size={16} />
                </button>
                </div>
            </form>

            <p className="disclaimer">
                Maia pode cometer erros. Verifique informações importantes.
            </p>
        </div>
    </>
  );
}