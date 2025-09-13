// components/FiltroDeRoteiros.js

"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

// O componente recebe uma prop 'filtroAtivo' para saber qual botão destacar
const FiltroTiposDeRoteiros = ({ filtroAtivo }) => {
  const router = useRouter();

  // Função para aplicar estilos dinamicamente
  const getButtonStyles = (buttonName) => {
    const isActive = filtroAtivo === buttonName;

    // Mapeamento das cores para cada tipo de filtro
    const activeColors = {
      Cultural: "#8662b4", 
      Natural: "#519328",
      Raiz: "#FF9F1C", 
    };

    // Seleciona a cor com base no nome do botão
    const activeColor = activeColors[buttonName] || "#9c9696ff"; // Usa uma cor padrão caso não encontre

    return {
      textTransform: "none",
      fontSize: "12px",
      width: 88,
      height: 22,
      borderRadius: "5px",
      color: isActive ? "#fff" : "#0f0f0f",
      background: isActive ? activeColor : "transparent",
      borderColor: isActive ? activeColor : "#0f0f0f",
      "&:hover": {
        background: isActive ? activeColor : "rgba(0,0,0,0.04)",
        borderColor: isActive ? activeColor : "#0f0f0f",
      },
    };
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant={filtroAtivo === "Cultural" ? "contained" : "outlined"}
          onClick={() => router.push("/roteiros-culturais204")} 
          sx={getButtonStyles("Cultural")}
        >
          Cultural
        </Button>
        <Button
          variant={filtroAtivo === "Natural" ? "contained" : "outlined"}
          onClick={() => router.push("/roteiros-naturais204")} 
          sx={getButtonStyles("Natural")}
        >
          Natural
        </Button>
        <Button
          variant={filtroAtivo === "Raiz" ? "contained" : "outlined"}
          onClick={() => router.push("/roteiros-raiz204")} 
          sx={getButtonStyles("Raiz")}
        >
          Raiz
        </Button>
      </Box>
    </Box>
  );
};

FiltroTiposDeRoteiros.propTypes = {
  filtroAtivo: PropTypes.oneOf(["Cultural", "Natural", "Raiz"]).isRequired,
};

export default FiltroTiposDeRoteiros;
