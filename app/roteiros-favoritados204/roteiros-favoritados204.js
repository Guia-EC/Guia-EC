"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Favoritar13 from "../../components/favoritar13";
import { useRouter } from "next/navigation";
import styles from "./roteiros-favoritados204.module.css";

const RoteirosFavoritados204 = () => {
  const router = useRouter();

  const onHomeButtomIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRoutesButtomContainerClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro2033");
  }, [router]);

  const onIaButtomIconClick = useCallback(() => {
    router.push("/chatbot");
  }, [router]);

  const onUserButtomIconClick = useCallback(() => {
    router.push("/tela-de-usuario202");
  }, [router]);

  return (
    <Box className={styles.roteirosFavoritados20}>
      <Box className={styles.ttulo}>
        <Typography
          className={styles.meusRoteirosFavoritos}
          variant="inherit"
          variantMapping={{ inherit: "h2" }}
          sx={{ fontWeight: "600" }}
        >
          Meus Roteiros Favoritos
        </Typography>
        <Box className={styles.detalhe} />
      </Box>
      <section className={styles.favorito1}>
        <Box className={styles.imagem}>
          <Box className={styles.roteirosFavoritados20Detalhe} />
        </Box>
        <Box className={styles.body}>
          <Box className={styles.ttuloETexto}>
            <Box className={styles.roteirosFavoritados20Ttulo}>
              <Typography
                className={styles.obeliscoRaiz}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
              >
                Obelisco Raiz
              </Typography>
            </Box>
            <Box className={styles.texto}>
              <Typography
                className={styles.memriaLutaE}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "300", letterSpacing: "0.04em" }}
              >
                Memória, luta e orgulho paulista em cada pedra do monumento.
              </Typography>
            </Box>
          </Box>
          <Box className={styles.localizao}>
            <Image
              className={styles.icon}
              loading="lazy"
              width={16.2}
              height={16.2}
              sizes="100vw"
              alt=""
              src="/535239-22@2x.png"
            />
            <div className={styles.ibirapuera}>Ibirapuera</div>
          </Box>
          <Box className={styles.botoEFavorito}>
            <Button
              className={styles.boto}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#0f0f0f",
                fontSize: "12",
                borderColor: "#0f0f0f",
                borderRadius: "5px",
                "&:hover": { borderColor: "#0f0f0f" },
              }}
            >
              Fazer Roteiro
            </Button>
            <Favoritar13 estado="Favoritado" />
          </Box>
        </Box>
      </section>
      <section className={styles.favorito2}>
        <Box className={styles.roteirosFavoritados20Imagem}>
          <Box className={styles.detalhe2} />
        </Box>
        <Box className={styles.body}>
          <Box className={styles.roteirosFavoritados20TtuloETexto}>
            <Box className={styles.roteirosFavoritados20Ttulo}>
              <Typography
                className={styles.obeliscoRaiz}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
              >
                MASP Cultural
              </Typography>
            </Box>
            <Box className={styles.texto}>
              <Typography
                className={styles.memriaLutaE}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "300", letterSpacing: "0.04em" }}
              >
                Do museu à cena artística vibrante da cidade.
              </Typography>
            </Box>
          </Box>
          <Box className={styles.roteirosFavoritados20Localizao}>
            <Image
              className={styles.icon}
              width={16.2}
              height={16.2}
              sizes="100vw"
              alt=""
              src="/535239-22@2x.png"
            />
            <div className={styles.ibirapuera}>Ibirapuera</div>
          </Box>
          <Box className={styles.roteirosFavoritados20BotoEFavorito}>
            <Box className={styles.roteirosFavoritados20Boto}>
              <div className={styles.fazerRoteiro}>Fazer Roteiro</div>
            </Box>
            <Favoritar13 estado="Favoritado" />
          </Box>
        </Box>
      </section>
      <section className={styles.favorito3}>
        <Box className={styles.imagem2}>
          <Box className={styles.detalhe3} />
        </Box>
        <Box className={styles.body}>
          <Box className={styles.ttuloETexto}>
            <Box className={styles.roteirosFavoritados20Ttulo}>
              <Typography
                className={styles.obeliscoRaiz}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
              >
                Museu Do Ipiranga Natural
              </Typography>
            </Box>
            <Box className={styles.texto}>
              <Typography
                className={styles.memriaLutaE}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "300", letterSpacing: "0.04em" }}
              >
                Verde, história e consciência no coração do Ipiranga.
              </Typography>
            </Box>
          </Box>
          <Box className={styles.localizao}>
            <Image
              className={styles.icon}
              loading="lazy"
              width={16.2}
              height={16.2}
              sizes="100vw"
              alt=""
              src="/535239-22@2x.png"
            />
            <div className={styles.ibirapuera}>Ibirapuera</div>
          </Box>
          <Box className={styles.botoEFavorito}>
            <Button
              className={styles.boto}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#0f0f0f",
                fontSize: "12",
                borderColor: "#0f0f0f",
                borderRadius: "5px",
                "&:hover": { borderColor: "#0f0f0f" },
              }}
            >
              Fazer Roteiro
            </Button>
            <Favoritar13 estado="Favoritado" />
          </Box>
        </Box>
      </section>
      <section className={styles.navbar}>
        <Box className={styles.navbarOptions}>
          <Image
            className={styles.homeButtomIcon}
            loading="lazy"
            width={32}
            height={29}
            sizes="100vw"
            alt=""
            src="/Home-Buttom.svg"
            onClick={onHomeButtomIconClick}
          />
          <Image
            className={styles.favoritesButtomIcon}
            loading="lazy"
            width={28.9}
            height={27.9}
            sizes="100vw"
            alt=""
            src="/Favorites-Buttom2.svg"
          />
          <Box
            className={styles.routesButtom}
            onClick={onRoutesButtomContainerClick}
          >
            <Box className={styles.boto3} />
            <Image
              className={styles.imgDistnciaIcon}
              loading="lazy"
              width={44.6}
              height={44.6}
              sizes="100vw"
              alt=""
              src="/Img-Dist-ncia1@2x.png"
            />
          </Box>
          <Image
            className={styles.iaButtomIcon}
            loading="lazy"
            width={31.7}
            height={31.7}
            sizes="100vw"
            alt=""
            src="/Ia-Buttom1@2x.png"
            onClick={onIaButtomIconClick}
          />
          <Image
            className={styles.iaButtomIcon}
            width={31.7}
            height={31.7}
            sizes="100vw"
            alt=""
            src="/User-Buttom1@2x.png"
            onClick={onUserButtomIconClick}
          />
        </Box>
      </section>
    </Box>
  );
};

export default RoteirosFavoritados204;
