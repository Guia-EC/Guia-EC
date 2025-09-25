
// Em PginaDeFiltros.js (versão refatorada)

import { Typography, Box } from "@mui/material";
import FiltroTiposDeRoteiros from "./filtro-tipos-de-roteiros";
import CardRoteiro from "./cardRoteiro"; // <--- IMPORTE O NOVO COMPONENTE
import styles from "./pgina-de-filtros.module.css";


const PginaDeFiltros = ({ filtroAtivo, roteiros }) => { // <--- RECEBE APENAS O FILTRO E O ARRAY
  return (
    <section className={styles.root}>
      <Box className={styles.ttulo}>
        <Typography variant="h2" sx={{ fontWeight: "700" }}>
          Conheça outros roteiros
        </Typography>
        <Box className={styles.detalhe4}><Box className={styles.detalheChild} /></Box>
      </Box>

      <FiltroTiposDeRoteiros filtroAtivo={filtroAtivo} />

      {/* A MÁGICA ACONTECE AQUI! */}
      <Box className={styles.listaDeCards}>
        {roteiros.map((roteiro) => (
          <CardRoteiro
            key={roteiro.id} // É importante ter uma key única
            titulo={roteiro.titulo}
            descricao={roteiro.descricao}
            localizacao={roteiro.localizacao}
            imagem={roteiro.imagem}
            link={roteiro.link}
          />
        ))}
      </Box>
    </section>
  );
};

export default PginaDeFiltros;