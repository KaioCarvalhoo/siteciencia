import { Container } from "react-bootstrap";
import CarrosselInicial from "../components/CarrosselInicial";

export default function Inicial() {
  return (
    <Container fluid>
      <Container>
        <CarrosselInicial />
        <h1>Ciência Explica</h1>
        <h2>A melhor Site para ler artigos Científico</h2>
        Aqui e a Sua Casa de Ciência
      </Container>
    </Container>
  );
}
