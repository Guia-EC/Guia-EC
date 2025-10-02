// Seu arquivo de componente: Chatbot.js / Chatbot.jsx

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  Send,
  Mic,
  Map,
  Clock,
  CircleHelp,
  Navigation,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "./chatbot.css";

export default function Chatbot() {
  const router = useRouter();

  const onVoltarClick = useCallback(() => {
    router.back();
  }, [router]);

  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log("GEOLOCALIZAÇÃO OBTIDA NO FRONTEND:", newLocation);
          setUserLocation(newLocation);
        },
        (error) => {
          console.error("ERRO DE GEOLOCALIZAÇÃO:", error.message);
          setUserLocation(null);
        }
      );
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { sender: "Você", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          sessionId: sessionId,
          location: userLocation,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestionText) => {
    sendMessage(suggestionText);
  };

  const suggestions = [
    { icon: <CircleHelp size={20} />, text: "Me fale sobre o Roteiro Raiz!", category: "Sobre o App" },
    { icon: <Clock size={20} />, text: "Qual o horário de funcionamento do MASP?", category: "Horários" },
    { icon: <Map size={20} />, text: "É minha primeira vez em SP. Qual roteiro devo fazer?", category: "Roteiros" },
    { icon: <Navigation size={20} />, text: "Como chegar no Copan?", category: "Navegação" },
  ];

  return (
    <>
      <div className="chat-container">
        {/* Header (Visual) */}
        <div className="chat-header">
          <button className="icon-button" onClick={onVoltarClick}>
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

          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "Você" ? "user-message" : "ai-message"}`}>
              {msg.sender === "Maia" && <div className="avatar">M</div>}
              <div className="message-bubble">
                {msg.text && msg.text.split("\n").map((line, i) => <p key={i}>{line}</p>)}
                {msg.mapUrl && (
                  <iframe
                    src={msg.mapUrl}
                    width="100%"
                    height="250"
                    style={{ border: 0, marginTop: "10px", borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
          ))}

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
          <div ref={chatEndRef} />
        </div>

        {/* ===== ESTRUTURA DO RODAPÉ AJUSTADA ===== */}
        <div className="chat-footer">
            <form className="chat-input" onSubmit={handleSubmit}>
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
                <button
                    type="submit"
                    className="send-button"
                    disabled={!input.trim() || isLoading}
                >
                    <Send size={16} />
                </button>
            </form>
            <p className="disclaimer">
                Maia pode cometer erros. Verifique detalhes importantes.
            </p>
        </div>
      </div>
    </>
  );
}