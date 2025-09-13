"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import { useRouter } from "next/navigation";
import styles from "./roteiros-naturais204.module.css";
import Navbar from "../../components/navbar";

const RoteirosNaturais204 = () => {
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
    <Box className={styles.roteirosNaturais20}>
      <PginaDeFiltros
        filtroAtivo="Natural"
        mASPCultural="MASP Natural"
        doMuseuCenaArtsticaVibrante="Arte, consciência e sabores plant-based. "
        obeliscoCultural="Obelisco Natural"
        museuDoIpirangaCultural="Museu do Ipiranga Natural"
      />
      <Navbar/>
    </Box>
  );
};

export default RoteirosNaturais204;
