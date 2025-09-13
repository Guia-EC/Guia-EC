"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import { useRouter } from "next/navigation";
import styles from "./roteiros-culturais204.module.css";
import Navbar from "../../components/navbar";

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
      <Navbar/>
    </Box>
  );
};

export default RoteirosCulturais204;
