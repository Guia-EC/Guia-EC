// /app/historico/page.js (ou o nome do seu arquivo)

"use client";
import { useState, useEffect } from "react";
import { Typography, Box, CircularProgress, Button } from "@mui/material";
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
import ConfirmationModal from "./ConfirmationModal";


// --- FUNÇÃO DE DATA 100% CORRIGIDA ---
const formatarDataCabecalho = (dataString) => { // dataString vem no formato "YYYY-MM-DD"
    // Pega a data de hoje e formata como string "YYYY-MM-DD"
    const hoje = new Date();
    const hojeString = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`;

    // Pega a data de ontem e formata como string "YYYY-MM-DD"
    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);
    const ontemString = `${ontem.getFullYear()}-${String(ontem.getMonth() + 1).padStart(2, '0')}-${String(ontem.getDate()).padStart(2, '0')}`;

    // Cria a data para exibição, tratando como UTC para não ter erro na formatação
    const [ano, mes, dia] = dataString.split('-').map(Number);
    const displayDate = new Date(Date.UTC(ano, mes - 1, dia));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', options).format(displayDate);
    const dataCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    // Compara as strings, que é muito mais seguro
    if (dataString === hojeString) {
        return `Hoje - ${dataCapitalizada}`;
    }
    if (dataString === ontemString) {
        return `Ontem - ${dataCapitalizada}`;
    }
    
    return dataCapitalizada;
};

// --- COMPONENTE DO CARD DE ROTEIRO ---
// Criamos um componente separado para o card para deixar o código mais limpo
// --- COMPONENTE DO CARD DE ROTEIRO (VERSÃO CORRIGIDA) ---
const CardHistorico = ({ roteiro }) => {
    const router = useRouter();

    // Dicionário que traduz a categoria em uma cor
    const coresPorCategoria = {
        Raiz: '#FF9F1C',      // Laranja
        Cultural: '#8662b4',  // Roxo
        Natural: '#519328',   // Verde
    };

    const handleFazerRoteiro = () => {
        if (roteiro.path_url) {
            router.push(roteiro.path_url);
        }
    };

    return (
        // Container principal do card, com a estrutura correta agora
        <Box className={styles.cardCultural3} style={{ position: 'relative' }}>
            
            {/* A Flag */}
            <Box 
                style={{
                    position: 'absolute',
                    top: '125px',
                    left: '-1px',
                    width: '200px',
                    height: '25px',
                    backgroundColor: coresPorCategoria[roteiro.categoria] || '#ccc',
                    borderRadius: '0 4px 4px 0',
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                    zIndex: 2, // Garante que a flag fique por cima de tudo
                }}
            />

            {/* A imagem de fundo */}
            <Box 
                className={styles.imagem} 
                style={{ backgroundImage: `url(${roteiro.url_imagem})` }}
            />
            
            {/* O corpo do card */}
            <Box className={styles.histricoDeRoteirosBody}>
                <Box className={styles.ttuloETexto}>
                    <Typography className={styles.maspNatural} variant="h3" sx={{ fontWeight: "700" }}>
                        {roteiro.nome} 
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

  const [isModalOpen, setIsModalOpen] = useState(false);

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
              nome,
              descricao,
              localizacao,
              url_imagem,
              path_url,
              categoria 
            )
          `)
          .eq('user_id', user.id)
          .order('iniciado_em', { ascending: false });

        if (error) throw error;

        // Agrupa os roteiros por data
    const agrupado = data.reduce((acc, item) => {
          // Converte o timestamp para a data local do usuário antes de agrupar
          const dataLocal = new Date(item.iniciado_em);
          
          // Formata a data local para o formato YYYY-MM-DD para usar como chave
          const ano = dataLocal.getFullYear();
          const mes = String(dataLocal.getMonth() + 1).padStart(2, '0');
          const dia = String(dataLocal.getDate()).padStart(2, '0');
          const dataKey = `${ano}-${mes}-${dia}`;
          
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

  // --- NOVA FUNÇÃO PARA LIMPAR O HISTÓRICO ---
    // FUNÇÃO MODIFICADA: Agora ela só abre o modal
  const handleLimparHistorico = () => {
    setIsModalOpen(true);
  };

   const handleConfirmClearHistory = async () => {
    try {
      const { error } = await supabase
        .from('historico_roteiros')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;
      setHistoricoAgrupado({});
      
    } catch (error) {
      console.error("Erro ao limpar o histórico:", error.message);
      alert("Ocorreu um erro ao tentar limpar o histórico.");
    }
  };

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
      <ConfirmationModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmClearHistory}
          title="Limpar Histórico"
          message="Esta ação é permanente e apagará todos os seus roteiros salvos. Deseja continuar?"
        />
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

          {/* --- NOVO BOTÃO DE LIMPAR HISTÓRICO --- */}
            {/* Ele só aparece se o histórico não estiver vazio */}
            {Object.keys(historicoAgrupado).length > 0 && (
              <Button 
                onClick={handleLimparHistorico}
                variant="outlined"
                color="secondary"
                size="small"
                sx={{ ml: 'auto', mr: 2, textTransform: 'none', borderRadius: '20px' }}
              >
                Limpar
              </Button>
            )}

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