"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CarrosselIbira from "./carrossel-ibira";
import PropTypes from "prop-types";
import styles from "./info-ibirapuera.module.css";

const InfoIbirapuera = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <main
      className={[styles.infoIbirapuera, className].join(" ")}
      data-estado={estado}
    >
      <Box className={styles.scrollvel}>
        <Box className={styles.imagemHero}>
          <Image
            className={styles.voltarIcon}
            loading="lazy"
            width={35}
            height={35}
            sizes="100vw"
            alt=""
            src="/botao-voltar-branco.svg"
            onClick={onVoltarIconClick}
          />
        </Box>
        <section className={styles.body}>
          <Box className={styles.infos}>
            <Typography
              className={styles.informaes}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600" }}
            >
              Informações
            </Typography>
            <div className={styles.oIbirapueraFoiContainer}>
              <Typography variant="inherit" variantMapping={{ inherit: "span" }}>
                O
              </Typography>
              <Typography
                className={styles.ibirapueraFoiProjetado}
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ fontSize: "var(--font-size-15)" }}
              >
                {" "}
                Ibirapuera foi projetado como parte das comemorações do iV
                Centenário de São Paulo para ser o primeiro parque metropolitano
                quando a cidade passava por uma forte expansão do setor
                industrial, em meio a uma década de grande crescimento
                populacional e de transformações urbanas.
              </Typography>
            </div>
          </Box>
          <Box className={styles.botoArtigoCompleto}>
            <Box className={styles.buttonContainer}>
              <Typography
                className={styles.lerArtigoCompleto}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                Ler artigo completo
              </Typography>
              <Image
                className={styles.vectorIcon}
                loading="lazy"
                width={12}
                height={7}
                sizes="100vw"
                alt=""
                src="/Vector.svg"
              />
            </Box>
          </Box>
          <CarrosselIbira property1="Default" />
        </section>
        <Box className={styles.ttulo}>
          <Box className={styles.infoIbirapueraTtulo}>
            <Typography
              className={styles.prqIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700", lineHeight: "3.438rem" }}
            >
              Prq. Ibirapuera
            </Typography>
            <Typography
              className={styles.parqueIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Parque Ibirapuera
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div className={styles.oscarNyemeierZenon}>
              1951-2005: Oscar Nyemeier, Zenon Lotufo, Hélio Uchôa e Eduardo
              Kneese de Melo.
            </div>
            <div className={styles.avenidaPedroLvares}>
              Avenida Pedro Álvares Cabral com avenida República do Líbano
            </div>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

InfoIbirapuera.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  estado: PropTypes.string,
};

export default InfoIbirapuera;
