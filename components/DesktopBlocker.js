import styles from './DesktopBlocker.module.css';
import { Smartphone } from 'lucide-react'; // Biblioteca de ícones, opcional mas recomendada!

export default function DesktopBlocker() {
  return (
    <div className={styles.blockerContainer}>
      <div className={styles.contentBox}>

        <Smartphone size={64} color="#333" strokeWidth={1.5} />
        
        <h1 className={styles.title}>
          Experiência Otimizada para Mobile
        </h1>
        <p className={styles.message}>
          No momento, esta aplicação está disponível apenas em dispositivos móveis.
          Por favor, acesse através do seu celular ou tablet para a melhor experiência.
        </p>
        <p className={styles.tip}>
          <strong>Dica:</strong> Você pode usar as ferramentas de desenvolvedor (F12) do seu navegador ou Ctrl + Shift + C para simular um dispositivo móvel.
        </p>
      </div>
    </div>
  );
}