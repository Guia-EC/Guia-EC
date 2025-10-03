import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import DesktopBlocker from "../components/DesktopBlocker";

// 1. Importe o AuthProvider que criamos
import { AuthProvider } from "../context/AuthContext"; // Ajuste o caminho se necessário
import "./global.css";
import muiTheme from "../theme";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Guia-EC",
  description: "Sua descrição aqui",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <DesktopBlocker />
        <AuthProvider>
          <Toaster position="top-center" />
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={muiTheme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
