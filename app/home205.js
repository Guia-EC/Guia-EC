// app/home205.js
"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
// Seus componentes antigos
import Carroussel143 from "../components/carroussel143";
import Slider142 from "../components/slider142";
import Carroussel243 from "../components/carroussel243";
import Slider343 from "../components/slider343";
import Carroussel343 from "../components/carroussel343";
import { useRouter } from "next/navigation";
import styles from "./home205.module.css";

// Nossos novos componentes e o hook
import { BannerCarousel } from '../components/BannerCarousel';
import DesktopBannerGrid from '../components/DesktopBannerGrid';
import { BannerCarouselSympla } from '../components/BannerCarouselSympla';
import DesktopSymplaBannerGrid from '../components/DesktopSymplaBannerGrid';
import { BannerCarouselAirbnb } from '../components/BannerCarouselAirbnb';
import DesktopAirbnbBannerGrid from '../components/DesktopAirbnbBannerGrid';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Home205 = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)'); // Ponto de quebra para mobile

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
      
      {/* SEÇÃO DOS BANNERS EC COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile}>Conheça a melhor faculdade de Arquitetura e Urbanismo 🖤</h2>
        {isMobile ? <BannerCarousel /> : <DesktopBannerGrid />}
      </section>
      
      
      <Slider142 />

      {/* SEÇÃO DOS BANNERS SYMPLA COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile}>Confira os destaques de São Paulo com a Sympla</h2>
        {isMobile ? <BannerCarouselSympla /> : <DesktopSymplaBannerGrid />}
      </section>

      <Slider343 />

      {/* SEÇÃO DOS BANNERS SYMPLA COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile}>Hospede-se e vivencie de perto pontos históricos e culturais com a Airbnb</h2>
        {isMobile ? <BannerCarouselAirbnb /> : <DesktopAirbnbBannerGrid />}
      </section>
      
      {/* NAVBAR */}
      <section className={styles.navbar}>
        <Box className={styles.navbarOptions}>
          <Image
            className={styles.casa2Icon}
            loading="lazy"
            width={31.7}
            height={31.7}
            alt="Ícone da página inicial"
            src="/casa-2@2x.png"
          />
          <Image
            className={styles.favoritesButtomIcon}
            loading="lazy"
            width={28.9}
            height={27.9}
            alt="Ícone de favoritos"
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
              alt="Ícone de rotas"
              src="/Img-Dist-ncia@2x.png"
            />
          </Box>
          <Image
            className={styles.iaButtomIcon}
            loading="lazy"
            width={31.7}
            height={31.7}
            alt="Ícone do chatbot de IA"
            src="/Ia-Buttom@2x.png"
            onClick={onIaButtomIconClick}
          />
          <Image
            className={styles.iaButtomIcon}
            loading="lazy"
            width={31.7}
            height={31.7}
            alt="Ícone de perfil do usuário"
            src="/User-Buttom@2x.png"
            onClick={onUserButtomIconClick}
          />
        </Box>
      </section>
    </Box>
  );
};

export default Home205;