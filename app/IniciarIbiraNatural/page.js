import IbiraNatural from "./IbiraNatural"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#519328'
  return (
    <>
      <IbiraNatural />;
      <FloatingChat cor={corTema} />
    </>    
  )  
}