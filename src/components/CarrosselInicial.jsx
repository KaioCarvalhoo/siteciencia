import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarrosselInicial.css";

function CarrosselInicial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        style={{
          backgroundImage: "url('https://img.freepik.com/vetores-gratis/logotipo-detalhado-da-viagem_23-2148616554.jpg?t=st=1718924554~exp=1718928154~hmac=0b425a63e26735d0cd51033aaa34e4de863dca3f6b2e7245a3a7546932e40929&w=740')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3>O Melhor Site de Viagens do Mundooooooo</h3>
          <p>Corra e Aproveite as Melhores Promoções!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselInicial;
