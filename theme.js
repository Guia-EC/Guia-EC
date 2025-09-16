"use client";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  // Adicione esta seção de tipografia
  typography: {
    fontFamily: [
      'Poppins',      // Sua fonte principal
      'sans-serif',   // Fonte de segurança
    ].join(','),
  },
});

export default muiTheme;