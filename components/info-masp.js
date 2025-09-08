"use client";
import { useCallback } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CarrosselMasp from "./carrossel-masp";
import PropTypes from "prop-types";
import styles from "./info-masp.module.css";

const InfoMasp = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <main
      className={[styles.infoMasp, className].join(" ")}
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
            <div className={styles.coneDaArquiteturaContainer}>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
              >
                Í
              </Typography>
              <Typography
                className={styles.coneDaArquitetura}
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ fontSize: "var(--font-size-15)" }}
              >
                cone da arquitetura moderna brasileira, o masp é não apenas uma
                das obras mais emblemáticas de Lina Bo Bardi como também um dos
                maiores símbolos de São Paulo. Com a determinação de garantir a
                continuidade entre o Parque Siqueira Campos e a vista do Vale do
                Saracura em direção ao Centro, Lina concebe seu projeto
                desenhando um belvedere como um hall cívico que se consagra como
                sede de reuniões públicas e políticas, além de espaço de
                fruição, encontro e lazer.
              </Typography>
            </div>
          </Box>
          <FormControl
            className={styles.botoArtigoCompleto}
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              backgroundColor: "#959595",
              borderRadius: "60px",
              width: "84.7328244274809%",
              height: "46px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "46px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "46px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "46px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "46px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fafafa",
                fontSize: 15,
                fontWeight: "Bold",
                fontFamily: "Poppins",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "82px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="12px"
                  height="7px"
                  src="/article-icon.svg"
                  style={{ marginRight: "82px" }}
                />
              )}
            >
              <MenuItem>Ler artigo completo</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <CarrosselMasp property1="Default" />
        </section>
        <Box className={styles.ttulo}>
          <Box className={styles.infoMaspTtulo}>
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
            <div className={styles.linaBoBardi}>1957-1968 Lina Bo Bardi</div>
            <div className={styles.avenidaPaulista1578}>
              Avenida Paulista, 1578 Cerqueira César
            </div>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

InfoMasp.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  estado: PropTypes.string,
};

export default InfoMasp;
