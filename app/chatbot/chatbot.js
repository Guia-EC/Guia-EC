"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Send,
  Mic,
  Map,
  Clock,
  CircleQuestionMark,
  Navigation,
} from "lucide-react";
import "./chatbot.css";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    {
     icon: <CircleQuestionMark size={16} />,
      text: "Descrição dos tipos de roteiros",
      category: "Sobre o App",
    },
    {
      icon: <Clock size={16} />,
      text: "Qual o horário de funcionamento do MASP?",
      category: "Horários e Funcionamento",
    },
    {
      icon: <Map size={16} />,
      text: "É minha primeira vez em SP. Qual roteiro devo fazer?",
      category: "Roteiros",
    },
    {
      icon: <Navigation size={16} />,
      text: "Como chegar no Copan?",
      category: "Navegação",
    },
  ];

  return (
    <div className="chat-container">
      {/* Header */}
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

      {/* Chat Area */}
      <div className="chat-body">
        {/* Welcome Message */}
        <div className="message">
          <div className="avatar">M</div>
          <div className="message-bubble">
            <p className="welcome">Olá! 👋</p>
            <p>Sou a Maia, como posso te ajudar hoje?</p>
          </div>
        </div>

        {/* Suggestions */}
        <div className="suggestions">
          <p className="suggestions-title">Sugestões para começar:</p>
          <div className="suggestions-grid">
            {suggestions.map((s, i) => (
              <button key={i} className="suggestion">
                <div className="suggestion-icon">{s.icon}</div>
                <div>
                  <p className="suggestion-text">{s.text}</p>
                  <p className="suggestion-category">{s.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Typing Indicator */}
        {isTyping && (
          <div className="message">
            <div className="avatar">M</div>
            <div className="typing-indicator">
              <div className="dot"></div>
              <div className="dot delay1"></div>
              <div className="dot delay2"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Pergunte alguma coisa"
        />
        <button className="icon-button">
          <Mic size={16} />
        </button>
        <button className="send-button" disabled={!message.trim()}>
          <Send size={16} />
        </button>
      </div>
      <p className="disclaimer">
        Maia pode cometer erros. Verifique informações importantes.
      </p>
    </div>
  );
}
