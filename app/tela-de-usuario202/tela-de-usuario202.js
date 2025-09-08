"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import TelaDeUsurio from "../../components/tela-de-usurio";
import { useRouter } from "next/navigation";
import styles from "./tela-de-usuario202.module.css";

const TelaDeUsuario202 = () => {
  const router = useRouter();

  const onFavoritesButtomIconClick = useCallback(() => {
    router.push("/roteiros-favoritados204");
  }, [router]);

  const onIaButtomIconClick = useCallback(() => {
    router.push("/chatbot");
  }, [router]);

  return (
    <Box className={styles.telaDeUsuario20}>
      <TelaDeUsurio tela="Home" />
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
          <Box className={styles.routesButtom}>
            <Box className={styles.boto} />
            <Image
              className={styles.imgDistnciaIcon}
              loading="lazy"
              width={44.6}
              height={44.6}
              sizes="100vw"
              alt=""
              src="/Img-Dist-ncia2@2x.png"
            />
          </Box>
          <Image
            className={styles.iaButtomIcon}
            loading="lazy"
            width={31.7}
            height={31.7}
            sizes="100vw"
            alt=""
            src="/Ia-Buttom2@2x.png"
            onClick={onIaButtomIconClick}
          />
          <Image
            className={styles.sombraDeUsuarioMasculino7Icon}
            loading="lazy"
            width={32}
            height={32}
            sizes="100vw"
            alt=""
            src="/sombra-de-usuario-masculino-7@2x.png"
          />
        </Box>
      </section>
    </Box>
  );
};

export default TelaDeUsuario202;
