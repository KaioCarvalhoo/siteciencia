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
          backgroundImage: "url('https://static.todamateria.com.br/upload/me/to/metodocientifico-0-cke.jpg')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3>O Melhor Site Científico</h3>
          <p>Corra e leia os melhores artigos!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselInicial;
