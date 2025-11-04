// app/home205.js
"use client";
import { useCallback, useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Box } from "@mui/material";
import Image from "next/image";
import Navbar from "../components/navbar"
import IosInstallPrompt from "../components/IosInstallPrompt";
// Seus componentes antigos
import Carroussel143 from "../components/carroussel143";
import Slider142 from "../components/slider142";
import Carroussel243 from "../components/carroussel243";
import Slider343 from "../components/slider343";
import Carroussel343 from "../components/carroussel343";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";

// Header dinâmico de usuário!
import HeaderHome from '../components/HeaderHome';

// Nossos novos componentes e o hook
import { BannerCarousel } from '../components/BannerCarousel';
// import DesktopBannerGrid from '../components/DesktopBannerGrid';
import { BannerCarouselSympla } from '../components/BannerCarouselSympla';
// import DesktopSymplaBannerGrid from '../components/DesktopSymplaBannerGrid';
import { BannerCarouselAirbnb } from '../components/BannerCarouselAirbnb';
// import DesktopAirbnbBannerGrid from '../components/DesktopAirbnbBannerGrid';
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

      <HeaderHome />
      
      {/* SEÇÃO DOS BANNERS EC COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile1}>Conheça a melhor faculdade de <br /> Arquitetura e Urbanismo 🖤</h2>
        {/* {isMobile ? <BannerCarousel /> : <DesktopBannerGrid />} */}
        <BannerCarousel /> 
      </section>
      
      
      <Slider142 />

      {/* SEÇÃO DOS BANNERS SYMPLA COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile2}>Confira os destaques de São Paulo <br /> com a Sympla</h2>
        {/* {isMobile ? <BannerCarouselSympla /> : <DesktopSymplaBannerGrid />} */}
        <BannerCarouselSympla />
      </section>

      <Slider343 />

      {/* SEÇÃO DOS BANNERS Airbnb COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile3}>Hospede-se e vivencie de perto pontos <br /> históricos e culturais com a Airbnb</h2>
        {/* {isMobile ? <BannerCarouselAirbnb /> : <DesktopAirbnbBannerGrid />} */}
        <BannerCarouselAirbnb />
      </section>
      

      <IosInstallPrompt />
      {/* NAVBAR */}
      <Navbar activePage="home"/>
    </Box>
  );
};

export default Home205;