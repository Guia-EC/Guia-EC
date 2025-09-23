import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "./global.css";

import muiTheme from "../theme";

export const metadata = {
  title: 'Roteirize',
  description: 'Sua descrição aqui',
  manifest: '/manifest.json', // <-- ESSA LINHA É ESSENCIAL!
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
