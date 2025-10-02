// app/home205.js
"use client";
import { useCallback, useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Box } from "@mui/material";
import Image from "next/image";
import Navbar from "../components/navbar"
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
import DesktopBannerGrid from '../components/DesktopBannerGrid';
import { BannerCarouselSympla } from '../components/BannerCarouselSympla';
import DesktopSymplaBannerGrid from '../components/DesktopSymplaBannerGrid';
import { BannerCarouselAirbnb } from '../components/BannerCarouselAirbnb';
import DesktopAirbnbBannerGrid from '../components/DesktopAirbnbBannerGrid';
import { useMediaQuery } from '../hooks/useMediaQuery';

const Home205 = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)'); // Ponto de quebra para mobile

  //TUDO QUE FOI IMPORTADO DE NOVO AQUI

  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  // --- NOVO: Estado para controlar se o botão deve estar ativo ---
  const [isInstallable, setIsInstallable] = useState(false);

  const [showInstallButton, setShowInstallButton] = useState(true);

   useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      console.log("✅ Evento de instalação capturado! Habilitando o botão.");
      setInstallPromptEvent(event);
      setIsInstallable(true); 
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPromptEvent) return;
    
    installPromptEvent.prompt();

    // --- MUDANÇA: Esconde o botão após 2 segundos do clique, independentemente da escolha. ---
    setTimeout(() => {
      setShowInstallButton(false);
    }, 2000); // 2 segundos

    const { outcome } = await installPromptEvent.userChoice;

    if (outcome === 'accepted') {
      console.log('Usuário aceitou a instalação! O botão já está programado para sumir.');
    } else {
      console.log('Usuário recusou a instalação. O botão irá sumir mesmo assim.');
    }
    // Limpa os estados após o uso
    setInstallPromptEvent(null);
    setIsInstallable(false);
  };

  //FIM DA NOVA LÓGICA!!!!!!!!

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
        {isMobile ? <BannerCarousel /> : <DesktopBannerGrid />}
      </section>
      
      
      <Slider142 />

      {/* SEÇÃO DOS BANNERS SYMPLA COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile2}>Confira os destaques de São Paulo <br /> com a Sympla</h2>
        {isMobile ? <BannerCarouselSympla /> : <DesktopSymplaBannerGrid />}
      </section>

      <Slider343 />

      {/* SEÇÃO DOS BANNERS Airbnb COM LÓGICA RESPONSIVA */}
      <section>
        <h2 className={styles.tituloPrincipalMobile3}>Hospede-se e vivencie de perto pontos <br /> históricos e culturais com a Airbnb</h2>
        {isMobile ? <BannerCarouselAirbnb /> : <DesktopAirbnbBannerGrid />}
      </section>
      
      {/* NAVBAR */}
      <Navbar activePage="home"/>

      {/* --- MUDANÇA: O botão agora só é renderizado se 'showInstallButton' for true --- */}
      {showInstallButton && (
        <button
          className={isInstallable ? styles.installFab : styles.installFabDisabled}
          onClick={handleInstallClick}
          disabled={!isInstallable}
          title={isInstallable ? "Instalar App" : "Interaja com a página para habilitar a instalação"}
        >
          <Download size={24} />
          <span>{isInstallable ? 'Instalar App' : 'Instalar...'}</span>
        </button>
      )}
    </Box>
  );
};

export default Home205;