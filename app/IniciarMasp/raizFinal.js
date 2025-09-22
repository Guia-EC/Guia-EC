"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Body from "../../components/body"; // Certifique-se que este caminho está correto
import styles from "./raizFinal.module.css"; // Certifique-se que este caminho está correto
import { useRouter } from "next/navigation";

// Imports da funcionalidade de impressão
import { useBluetoothPrinter } from "../../hooks/useBluetoothPrinter"; // Certifique-se que este caminho está correto
import Encoder from 'esc-pos-encoder';

const IniciarRoteiro20 = () => {
  const router = useRouter();

  // Instancia o hook para ter acesso às funções e ao estado da impressora
  const { connect, print, isConnected, isConnecting, device, error } = useBluetoothPrinter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro207");
  }, [router]);

  // Função que formata e prepara os dados para impressão
  const onPrintRoteiroClick = useCallback(() => {
    if (!isConnected) return; // Checagem de segurança

    let encoder = new Encoder({ characterSet: 'pc850' });
    const commands = encoder
      .initialize()
      .align('center')
      .bold(true)
      .line('Seu Roteiro')
      .bold(false)
      .drawLine()
      .align('left')
      .newline()
      .bold(true)
      .line('MASP')
      .bold(false)
      .line('Museu de Arte de São Paulo')
      .line('1957-1968 Lina Bo Bardi')
      .line('Avenida Paulista, 1578 Cerqueira César')
      .feed(3)
      .cut()
      .encode();

    print(commands);
  }, [isConnected, print]);

  // Manipulador de clique principal que decide entre conectar e imprimir
  const handleMainButtonClick = useCallback(() => {
    if (isConnected) {
      onPrintRoteiroClick();
    } else {
      connect();
    }
  }, [isConnected, connect, onPrintRoteiroClick]);

  return (
    <Box className={styles.iniciarRoteiro20}>
      <section className={styles.imagemHero}>
        <Image
          className={styles.voltarIcon}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          src="/botao-voltar-branco.svg"
          onClick={onVoltarIconClick}
        />
      </section>
      <Body />

      <Box // Botão De conectar impressora!
        className={styles.botoIniciarRoteiro}
        onClick={handleMainButtonClick}
        sx={{ 
          cursor: isConnecting ? 'wait' : 'pointer',
          opacity: isConnecting ? 0.7 : 1,
          display: 'none !important', // Escondido por padrão (mobile)
          '@media (min-width: 768px)': {
            display: 'block' 
          }
        }}
      >
        <Typography
          className={styles.iniciarRotaCom}
          variantMapping={{ inherit: "Button" }}
          sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center'}}
        >
          {isConnecting ? 'Conectando...' : isConnected ? 'Imprimir Roteiro' : 'Conectar à Impressora'}
        </Typography>
      </Box>

      <Box //Botão de Iniciar Roteiro!
        className={styles.botoIniciarRoteiro}
      >
        <Typography
          className={styles.iniciarRotaCom}
          variantMapping={{ inherit: "Button" }}
          sx={{ fontWeight: "600", fontSize: "20px", color: "white", textAlign: 'center'}}
        >
          Iniciar Rota com Google
        </Typography>
      </Box>

      <section className={styles.ttulo}>
        <Box className={styles.iniciarRoteiro20Ttulo}>
          <Typography
            className={styles.masp}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700", lineHeight: "4.375rem" }}
          >
            MASP
          </Typography>
          <Typography
            className={styles.museuDeArte}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
          >
            Museu de Arte de São Paulo
          </Typography>
        </Box>
        <Box className={styles.descrio}>
          <div className={styles.iniciarRotaCom}>1957-1968 Lina Bo Bardi</div>
          <div className={styles.avenidaPaulista1578}>
            Avenida Paulista, 1578 Cerqueira César
          </div>
        </Box>
      </section>
    </Box>
  );
};

export default IniciarRoteiro20;