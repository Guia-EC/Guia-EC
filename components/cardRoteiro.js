import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import Favoritar from "./favoritar";
import FavoriteButton from "./FavoriteButton";
import styles from "./cardRoteiro.module.css";

const CardRoteiro = ({roteiroId, titulo, descricao, localizacao, link, imagemSrc, variant = 'star' }) => {
  return (
    // ATUALIZADO: de .cardCultural3 para .card
    <Box className={styles.card}> 
        <Box className={styles.imagem}>
            <Image 
              src={imagemSrc || '/placeholder-image.png'}
              alt={`Imagem do roteiro ${titulo}`}
              layout="fill"
              objectFit="cover"
            />
            <Box className={styles.detalhe} />
        </Box>
        <Box className={styles.body}>
            <Box className={styles.ttuloETexto}>
                {/* ATUALIZADO: de .ttulo3 para .tituloWrapper */}
                <Box className={styles.tituloWrapper}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                    >
                        {titulo}
                    </Typography>
                </Box>
                {/* Otimizado: classe aplicada diretamente na div */}
                <div className={styles.texto}>
                    {descricao}
                </div>
            </Box>
            <Box className={styles.localizao}>
                <Image
                    className={styles.locationSpaceIcon}
                    loading="lazy"
                    width={16.2}
                    height={16.2}
                    alt="Ícone de localização"
                    src="/535239-22@2x.png"
                />
                {/* ATUALIZADO: Adicionada a classe correta */}
                <div className={styles.localizacaoTexto}>{localizacao}</div>
            </Box>
            <Box className={styles.botoEFavorito}>
                <Link href={link || "/"} passHref>
                    <Button
                        className={styles.boto}
                        disableElevation
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            color: "#0f0f0f",
                            fontSize: "12",
                            borderColor: "#0f0f0f",
                            borderRadius: "5px",
                            "&:hover": { borderColor: "#0f0f0f" },
                        }}
                    >
                        Fazer Roteiro
                    </Button>
                </Link>  
                {/* NOVO BOTÃO DE FAVORITAR */}
                <FavoriteButton roteiroId={roteiroId} variant={variant} />
            </Box>
        </Box>
    </Box>
  );
};

export default CardRoteiro;