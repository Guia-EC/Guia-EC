"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import { useRouter } from "next/navigation";
import styles from "./roteiros-raiz204.module.css";
import Navbar from "../../components/navbar";

const RoteirosRaiz204 = () => {
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
    <Box className={styles.roteirosRaiz20}>
      <PginaDeFiltros
        filtroAtivo="Raiz"
        mASPCultural="MASP Raiz"
        doMuseuCenaArtsticaVibrante="Onde a arte encontra o verdadeiro coração de São Paulo."
        obeliscoCultural="Obelisco Raiz"
        museuDoIpirangaCultural="Museu do Ipiranga Raiz"
      />
      <Navbar/>
    </Box>
  );
};

export default RoteirosRaiz204;
