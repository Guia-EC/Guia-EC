"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import { useRouter } from "next/navigation";
import styles from "./roteiros-culturais204.module.css";

const RoteirosCulturais204 = () => {
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
    <Box className={styles.roteirosCulturais20}>
      <PginaDeFiltros
        filtroAtivo="Cultural"
        mASPCultural="MASP Cultural"
        doMuseuCenaArtsticaVibrante="Do museu à cena artística vibrante da cidade."
        obeliscoCultural="Obelisco Cultural"
        museuDoIpirangaCultural="Museu do Ipiranga Cultural"
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

export default RoteirosCulturais204;
