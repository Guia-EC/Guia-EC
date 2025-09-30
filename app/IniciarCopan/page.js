import CopanCultural from "./CopanCultural"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#8662b4'
  return (
    <>
      <CopanCultural />
      <FloatingChat cor={corTema} />
    </>
  );
}