// Importações existentes...
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { AuthProvider } from "../context/AuthContext";

import "./global.css";
import muiTheme from "../theme";
import { Toaster } from "react-hot-toast";
import PWAServiceWorker from '@/components/PWAServiceWorker';


import DesktopBlocker from "../components/DesktopBlocker"; 

export const metadata = {
  title: "Guia-EC",
  description: "Sua descrição aqui",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover', // <-- ESSA LINHA É A CHAVE!
  },
  manifest: "/manifest.json", // <-- ESSA LINHA É ESSENCIAL!
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
              <PWAServiceWorker />
              {/* O {children} (seu app) fica no centro de tudo */}
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </body>
    </html>
  );
}