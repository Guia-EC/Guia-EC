// app/login/page.js

import PginaDeLogin from '../../components/pgina-de-login';

// É uma boa prática de organização de pastas que o componente da página de login
// fique em /components, e a página em si (este arquivo) apenas o importe e renderize.

export default function LoginPage() {
  // A página agora só tem a responsabilidade de renderizar o componente correto.
  return <PginaDeLogin />;
}