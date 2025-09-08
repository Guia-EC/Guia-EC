"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import HistricoDeRoteiros1 from "../../components/histrico-de-roteiros1";
import { useRouter } from "next/navigation";
import styles from "./histrico-de-roteiros.module.css";

const HistricoDeRoteiros = () => {
  const router = useRouter();

  const onHomeButtomIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFavoritesButtomIconClick = useCallback(() => {
    router.push("/roteiros-favoritados204");
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
    <Box className={styles.histricoDeRoteiros}>
      <HistricoDeRoteiros1
        tipoDeFiltro="Mais recente - Antigo"
        favoritarEstado1="Padrão"
      />
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
            src="/Favorites-Buttom1.svg"
            onClick={onFavoritesButtomIconClick}
          />
          <Box
            className={styles.routesButtom}
            onClick={onRoutesButtomContainerClick}
          >
            <Box className={styles.boto} />
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
            loading="lazy"
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

export default HistricoDeRoteiros;
