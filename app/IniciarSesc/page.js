import NaturalFinal from "./naturalFinal"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#519328'
  return (
    <>
      <NaturalFinal />;
      <FloatingChat cor={corTema} />
    </>    
  )  
}