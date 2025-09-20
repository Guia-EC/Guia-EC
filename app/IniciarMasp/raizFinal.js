"use client";
import { useCallback } from "react";
import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import Body from "../../components/body";
import styles from "./raizFinal.module.css";
import { useRouter } from "next/navigation";

const IniciarRoteiro20 = () => {

  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro207");
  }, [router]);

  const onBotoIniciarRoteiroClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Mirante+9+de+Julho&waypoints=Museu+de+Arte+de+São+Paulo|Charme+da+Paulista+Restaurante"
    );
  }, []);

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
      <section
        className={styles.botoIniciarRoteiro}
        onClick={onBotoIniciarRoteiroClick}
      >
        <Typography
          className={styles.iniciarRotaCom}
          variantMapping={{ inherit: "Button" }}
          sx={{ fontWeight: "600", fontSize: "30px", color: "white"}}
          
        >
          Iniciar rota com Google
        </Typography>
      </section>
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
