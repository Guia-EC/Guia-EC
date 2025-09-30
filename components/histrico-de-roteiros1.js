// /app/historico/page.js (ou o nome do seu arquivo)

"use client";
import { useState, useEffect } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./histrico-de-roteiros1.module.css";

// <-- 1. IMPORTAR AS FERRAMENTAS
import { useAuth } from "../context/AuthContext"; // <-- VERIFIQUE O CAMINHO
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Componentes estáticos que você já tinha (podemos torná-los dinâmicos depois)
import FiltroHistricoDeRoteiros from "./filtro-histrico-de-roteiros";
import FiltroHistricoDeRoteiros9 from "./filtro-histrico-de-roteiros9";
import Favoritar1 from "./favoritar1";


// --- FUNÇÃO AUXILIAR PARA FORMATAR A DATA ---
const formatarDataCabecalho = (dataString) => {
  const data = new Date(dataString);
  const hoje = new Date();
  const ontem = new Date();
  ontem.setDate(hoje.getDate() - 1);

  // Adiciona a correção de fuso horário para comparar datas locais
  data.setMinutes(data.getMinutes() + data.getTimezoneOffset());
  hoje.setHours(0, 0, 0, 0);
  ontem.setHours(0, 0, 0, 0);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = new Intl.DateTimeFormat('pt-BR', options).format(data);
  const dataCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

  if (data.getTime() === hoje.getTime()) {
    return `Hoje - ${dataCapitalizada}`;
  }
  if (data.getTime() === ontem.getTime()) {
    return `Ontem - ${dataCapitalizada}`;
  }
  
  return dataCapitalizada;
};


// --- COMPONENTE DO CARD DE ROTEIRO ---
// Criamos um componente separado para o card para deixar o código mais limpo
const CardHistorico = ({ roteiro }) => {
    const router = useRouter();

    // Função para navegar para a página do roteiro ao clicar
    const handleFazerRoteiro = () => {
        // Supondo que a URL seja /roteiros/[id] ou algo similar
        router.push(`/roteiros/${roteiro.id}`);
    };

    return (
        <Box className={styles.cardCultural3}>
            {/* A imagem de fundo é aplicada aqui */}
            <Box 
                className={styles.imagem} 
                style={{ backgroundImage: `url(${roteiro.imagem_url})` }} // <-- AJUSTE 'imagem_url' se o nome da coluna for diferente
            />
            <Box className={styles.histricoDeRoteirosBody}>
                <Box className={styles.ttuloETexto}>
                    <Typography className={styles.maspNatural} variant="h3" sx={{ fontWeight: "700" }}>
                        {roteiro.titulo} 
                    </Typography>
                    <div className={styles.arteConscinciaE}>
                        {roteiro.descricao}
                    </div>
                </Box>
                <Box className={styles.localizao}>
                    <Image className={styles.locationIcon} width={16} height={16} alt="" src="/535239-22@2x.png" />
                    <div className={styles.paulista}>{roteiro.localizacao}</div>
                </Box>
                <Box className={styles.botoEFavorito}>
                    <Box className={styles.boto} onClick={handleFazerRoteiro}>
                        <div className={styles.fazerRoteiro}>Fazer Roteiro</div>
                    </Box>
                    <Favoritar1 estado="Padrão" />
                </Box>
            </Box>
        </Box>
    );
};


// --- COMPONENTE PRINCIPAL DA PÁGINA ---
const HistricoDeRoteiros = () => {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = createClientComponentClient();
  
  const [historicoAgrupado, setHistoricoAgrupado] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorico = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Busca o histórico e os dados dos roteiros relacionados de uma só vez
        const { data, error } = await supabase
          .from('historico_roteiros')
          .select(`
            iniciado_em,
            roteiros (
              id,
              titulo,
              descricao,
              localizacao,
              imagem_url 
            )
          `)
          .eq('user_id', user.id)
          .order('iniciado_em', { ascending: false });

        if (error) throw error;

        // Agrupa os roteiros por data
        const agrupado = data.reduce((acc, item) => {
          const dataKey = item.iniciado_em.split('T')[0]; // Pega apenas a data (YYYY-MM-DD)
          if (!acc[dataKey]) {
            acc[dataKey] = [];
          }
          acc[dataKey].push(item.roteiros);
          return acc;
        }, {});

        setHistoricoAgrupado(agrupado);

      } catch (error) {
        console.error("Erro ao buscar histórico:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorico();
  }, [user, supabase]);

  const onBotoDeVoltarClick = () => {
    router.push("/tela-de-usuario202");
  };
  
  const renderContent = () => {
    if (loading) {
      return <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}><CircularProgress color="secondary" /></Box>;
    }
    
    if (!user) {
      return <Typography sx={{ textAlign: 'center', my: 5 }}>Faça login para ver seu histórico.</Typography>;
    }

    const datas = Object.keys(historicoAgrupado);
    if (datas.length === 0) {
      return <Typography sx={{ textAlign: 'center', my: 5 }}>Você ainda não iniciou nenhum roteiro.</Typography>;
    }

    // Renderiza os dados
    return datas.map((dataKey) => (
      <Box key={dataKey} className={styles.hoje}>
        <Typography className={styles.hojeQuartaFeira} variant="h1" sx={{ fontWeight: "600" }}>
          {formatarDataCabecalho(dataKey)}
        </Typography>
        {historicoAgrupado[dataKey].map((roteiro) => (
          <CardHistorico key={roteiro.id} roteiro={roteiro} />
        ))}
      </Box>
    ));
  };


  return (
    <main className={styles.histricoDeRoteiros}>
      <Box className={styles.header}>
        <Image
          className={styles.botoDeVoltar}
          width={42}
          height={41}
          alt="Voltar"
          src="/Bot-o-de-Voltar.svg"
          onClick={onBotoDeVoltarClick}
        />
        <Typography className={styles.histricoDeRoteiros2} variant="h1" sx={{ fontWeight: "700" }}>
          Histórico de Roteiros
        </Typography>
      </Box>
      <Box className={styles.body}>
        <Box className={styles.filtros}>
          <FiltroHistricoDeRoteiros estado="Padrão" />
          <FiltroHistricoDeRoteiros9 propriedade1="Padrão" />
        </Box>
        <section className={styles.dias}>
          {renderContent()}
        </section>
      </Box>
    </main>
  );
};

export default HistricoDeRoteiros;