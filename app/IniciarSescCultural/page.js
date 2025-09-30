import SescCultural from "./SescCultural"
import FloatingChat from "../../components/FloatingChat"

export default function Page() {
  const corTema = '#8662b4'
  return (
    <>
      <SescCultural />
      <FloatingChat cor={corTema} />
    </>
  );
}