import MaspCultural from "./MaspCultural"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#8662b4'
  return (
    <>
      <MaspCultural />
      <FloatingChat cor={corTema} />
    </>
  );
}