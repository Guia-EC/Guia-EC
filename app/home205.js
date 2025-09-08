"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Carroussel143 from "../components/carroussel143";
import Slider142 from "../components/slider142";
import Carroussel243 from "../components/carroussel243";
import Slider343 from "../components/slider343";
import Carroussel343 from "../components/carroussel343";
import { useRouter } from "next/navigation";
import styles from "./home205.module.css";

const Home205 = () => {
  const router = useRouter();

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
    <Box className={styles.home20}>
      <Carroussel143 />
      <Slider142 />
      <Carroussel243 />
      <Slider343 />
      <Carroussel343 />
      <section className={styles.navbar}>
        <Box className={styles.navbarOptions}>
          <Image
            className={styles.casa2Icon}
            loading="lazy"
            width={31.7}
            height={31.7}
            sizes="100vw"
            alt=""
            src="/casa-2@2x.png"
          />
          <Image
            className={styles.favoritesButtomIcon}
            loading="lazy"
            width={28.9}
            height={27.9}
            sizes="100vw"
            alt=""
            src="/Favorites-Buttom.svg"
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
              src="/Img-Dist-ncia@2x.png"
            />
          </Box>
          <Image
            className={styles.iaButtomIcon}
            loading="lazy"
            width={31.7}
            height={31.7}
            sizes="100vw"
            alt=""
            src="/Ia-Buttom@2x.png"
            onClick={onIaButtomIconClick}
          />
          <Image
            className={styles.iaButtomIcon}
            loading="lazy"
            width={31.7}
            height={31.7}
            sizes="100vw"
            alt=""
            src="/User-Buttom@2x.png"
            onClick={onUserButtomIconClick}
          />
        </Box>
      </section>
    </Box>
  );
};

export default Home205;
