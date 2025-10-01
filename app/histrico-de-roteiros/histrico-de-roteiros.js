"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import HistricoDeRoteiros1 from "../../components/histrico-de-roteiros1";
import { useRouter } from "next/navigation";
import styles from "./histrico-de-roteiros.module.css";

const HistricoDeRoteiros = () => {
  const router = useRouter();

  return (
    <Box className={styles.histricoDeRoteiros}>
      <HistricoDeRoteiros1
        tipoDeFiltro="Mais recente - Antigo"
        favoritarEstado1="Padrão"
      />
    </Box>
  );
};

export default HistricoDeRoteiros;
