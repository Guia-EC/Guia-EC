import IbiraRaiz from "./IbiraRaiz"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#ff9f1c'
  return (
    <>
      <IbiraRaiz />;
      <FloatingChat cor={corTema} />
    </>    
  )  
}