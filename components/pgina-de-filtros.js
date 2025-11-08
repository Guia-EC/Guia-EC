
// Em PginaDeFiltros.js (versão refatorada)

import { Typography, Box } from "@mui/material";
import FiltroTiposDeRoteiros from "./filtro-tipos-de-roteiros";
import CardRoteiro from "./cardRoteiro"; // <--- IMPORTE O NOVO COMPONENTE
import styles from "./pgina-de-filtros.module.css";

const PginaDeFiltros = ({ filtroAtivo, roteiros, onMudarFiltro }) => { // Recebe a nova prop
  // 1. Mapeamento de cores
  const coresPorFiltro = {
    Cultural: "#8662b4",
    Natural: "#519328",
    Raiz: "#FF9F1C",
  };

  // 2. Define o valor da variável CSS com base no filtro ativo
  const estilosDaSecao = {
    '--cor-detalhe-ativo': coresPorFiltro[filtroAtivo] || '#8662b4',
  };


  return (
    // 3. Aplica o estilo na section principal
    <section className={styles.root} style={estilosDaSecao}>
      <Box className={styles.titulo}>
        <Typography sx={{ fontWeight: "700"}} className={styles.tituloTexto}>
          Conheça outros roteiros
        </Typography>
        <Box className={styles.detalheChild} />
      </Box>

      <FiltroTiposDeRoteiros 
        filtroAtivo={filtroAtivo} 
        onMudarFiltro={onMudarFiltro}
      />
      
      <Box className={styles.listaDeCards}>
        {roteiros.map((roteiro) => (
          <CardRoteiro
            key={roteiro.id}
            roteiroId={roteiro.id}
            titulo={roteiro.nome}
            descricao={roteiro.descricao}
            localizacao={roteiro.localizacao}
            imagemSrc={roteiro.url_imagem}
            categoria={roteiro.categoria}
            link={roteiro.path_url}
          />
        ))}
      </Box>
    </section>
  );
};

export default PginaDeFiltros;