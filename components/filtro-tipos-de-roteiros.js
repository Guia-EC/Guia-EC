// components/filtro-tipos-de-roteiro.js

"use client";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./filtro-tipos-de-roteiros.module.css"; // Importação continua a mesma

const FiltroTiposDeRoteiros = ({ filtroAtivo, onMudarFiltro }) => {
  
  // 1. Função 'getButtonStyles' REMOVIDA.

  // 2. NOVA FUNÇÃO para gerar as classes CSS dinamicamente
  const getButtonClassName = (buttonName) => {
    const isActive = filtroAtivo === buttonName;
    
    // Todos os botões recebem a classe base
    const baseClass = styles.filtroButton;

    if (!isActive) {
      return baseClass; // Retorna apenas a classe base se não estiver ativo
    }

    // Mapeia o nome do botão para sua classe ativa correspondente
    const activeClassMap = {
      Cultural: styles.culturalActive,
      Natural: styles.naturalActive,
      Raiz: styles.raizActive,
    };

    // Retorna a classe base E a classe ativa específica
    return `${baseClass} ${activeClassMap[buttonName] || ''}`;
  };

  return (
    <Box>
      {/* O 'sx' foi removido deste Box, mas mantido onde faz sentido */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined" // Mantemos o variant para o efeito de clique (ripple)
          onClick={() => onMudarFiltro("Cultural")}
          // 3. TROCADO: 'sx' por 'className'
          className={getButtonClassName("Cultural")}
        >
          Cultural
        </Button>
        <Button
          variant="outlined"
          onClick={() => onMudarFiltro("Natural")}
          // 3. TROCADO: 'sx' por 'className'
          className={getButtonClassName("Natural")}
        >
          Natural
        </Button>
        <Button
          variant="outlined"
          onClick={() => onMudarFiltro("Raiz")}
          // 3. TROCADO: 'sx' por 'className'
          className={getButtonClassName("Raiz")}
        >
          Raiz
        </Button>
      </Box>
    </Box>
  );
};

// PropTypes permanecem os mesmos
FiltroTiposDeRoteiros.propTypes = {
  filtroAtivo: PropTypes.oneOf(["Cultural", "Natural", "Raiz"]).isRequired,
  onMudarFiltro: PropTypes.func.isRequired,
};

export default FiltroTiposDeRoteiros;