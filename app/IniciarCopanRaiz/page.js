import CopanRaiz from "./CopanRaiz"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#ff9f1c'
  return (
    <>
      <CopanRaiz />;
      <FloatingChat cor={corTema} />
    </>    
  )  
}
