import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="Logo do Ignite" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
