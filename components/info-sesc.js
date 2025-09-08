"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CarrosselSesc from "./carrossel-sesc";
import PropTypes from "prop-types";
import styles from "./info-sesc.module.css";

const InfoSesc = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <main
      className={[styles.infoSesc, className].join(" ")}
      data-estado={estado}
    >
      <Box className={styles.scrollvel}>
        <Box className={styles.imagemHero}>
          <Image
            className={styles.voltarIcon}
            loading="lazy"
            width={24}
            height={38}
            sizes="100vw"
            alt=""
            src="/Voltar.svg"
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
            <div className={styles.reformaEAmpliaoContainer}>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                R
              </Typography>
              <Typography
                className={styles.eformaEAmpliao}
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ fontSize: "var(--font-size-15)" }}
              >
                eforma e ampliação de um edifício ocupado a princípio por uma
                loja de departamentos, na esquina de ruas importantes no Centro
                Novo, o Sesc 24 de Maio é uma das mais interessantes
                experiências arquitetônicas que se podem fruir em São Paulo: uma
                unidade completa, com programas ligados a esportes, lazer,
                cultura e saúde que se sobrepõem naturalmente, como praças
                superpostas.
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
          <CarrosselSesc property1="Default" />
        </section>
        <Box className={styles.ttulo}>
          <Box className={styles.infoSescTtulo}>
            <Typography
              className={styles.sesc24}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700" }}
            >{`Sesc 24 `}</Typography>
            <Typography
              className={styles.sesc24De}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Sesc 24 de Maio
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div className={styles.pauloMendesDa}>
              2000-2017: Paulo Mendes da Rocha, MMBB (Fernando de Mello Franco,
              Marta Moreira, Milton Braga)
            </div>
            <div className={styles.rua24De}>Rua 24 de Maio, 109 - Centro</div>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

InfoSesc.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  estado: PropTypes.string,
};

export default InfoSesc;
