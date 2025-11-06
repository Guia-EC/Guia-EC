// components/filtro-tipos-de-roteiro.js

"use client";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

// 1. O componente agora recebe 'onMudarFiltro' junto com 'filtroAtivo'
const FiltroTiposDeRoteiros = ({ filtroAtivo, onMudarFiltro }) => {

  // 2. O 'useRouter' não é mais necessário aqui para a lógica do filtro.
  // const router = useRouter(); 

  // Sua função de estilos está perfeita e será mantida exatamente como está!
  const getButtonStyles = (buttonName) => {
    const isActive = filtroAtivo === buttonName;
    const activeColors = {
      Cultural: "#8662b4", 
      Natural: "#519328",
      Raiz: "#FF9F1C", 
    };
    const activeColor = activeColors[buttonName] || "#9c9696ff";

    return {
      textTransform: "none",
      fontSize: "12px",
      width: 88,
      height: 22,
      borderRadius: "5px",
      color: isActive ? "#fff" : "#0f0f0f",
      backgroundColor: isActive ? activeColor : "transparent", // Note: 'background' foi trocado por 'backgroundColor' para melhor compatibilidade com MUI
      borderColor: isActive ? activeColor : "#0f0f0f",
      "&:hover": {
        backgroundColor: isActive ? activeColor : "rgba(0,0,0,0.04)",
        borderColor: isActive ? activeColor : "#0f0f0f",
      },

      '@media (min-width: 786px)': {
        fontSize: "17px",
        width: 140,
        height: 30,
        margintop: 10,  
      }
    };
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined" // Usamos um variant base para o sx sobrescrever
          // 3. A MÁGICA ACONTECE AQUI: trocamos router.push por onMudarFiltro
          onClick={() => onMudarFiltro("Cultural")} 
          sx={getButtonStyles("Cultural")}
        >
          Cultural
        </Button>
        <Button
          variant="outlined"
          // 3. A MÁGICA ACONTECE AQUI: trocamos router.push por onMudarFiltro
          onClick={() => onMudarFiltro("Natural")} 
          sx={getButtonStyles("Natural")}
        >
          Natural
        </Button>
        <Button
          variant="outlined"
          // 3. A MÁGICA ACONTECE AQUI: trocamos router.push por onMudarFiltro
          onClick={() => onMudarFiltro("Raiz")} 
          sx={getButtonStyles("Raiz")}
        >
          Raiz
        </Button>
      </Box>
    </Box>
  );
};

// 4. Adicionamos a nova prop 'onMudarFiltro' aos PropTypes
FiltroTiposDeRoteiros.propTypes = {
  filtroAtivo: PropTypes.oneOf(["Cultural", "Natural", "Raiz"]).isRequired,
  onMudarFiltro: PropTypes.func.isRequired,
};

export default FiltroTiposDeRoteiros;