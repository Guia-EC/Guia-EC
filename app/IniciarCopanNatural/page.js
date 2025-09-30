import CopanNatural from "./CopanNatural"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#519328'
  return (
    <>
      <CopanNatural />;
      <FloatingChat cor={corTema} />
    </>    
  )  
}

