import CulturalFinal from "./culturalFinal"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#8662b4'
  return (
    <>
      <CulturalFinal />
      <FloatingChat cor={corTema} />
    </>
  );
}