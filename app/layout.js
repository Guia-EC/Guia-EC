import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

// 1. Importe o AuthProvider que criamos
import { AuthProvider } from '../context/AuthContext'; // Ajuste o caminho se necessário

import "./global.css";
import muiTheme from "../theme";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* 2. Envolva todos os outros providers com o AuthProvider */}
        <AuthProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              {/* O {children} (seu app) fica no centro de tudo */}
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}