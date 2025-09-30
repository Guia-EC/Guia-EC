import MaspNatural from "./MaspNatural"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#519328'
  return (
    <>
      <MaspNatural />;
      <FloatingChat cor={corTema} />
    </>    
  )  
}