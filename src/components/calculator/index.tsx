import React, { useState } from "react";
import {
  Calculadora,
  Container,
  Conteudo,
  StyleButton,
  TextArea,
} from "../styles/styled";

const Calculator = () => {
  const [result, setResult] = useState();

  return (
    <Container>
      <Calculadora>
        <div>
          <h1>Calc W</h1>
        </div>
        <TextArea name="visor"> value</TextArea>
        <Calculadora>
          <StyleButton>AC</StyleButton>
          <StyleButton>+/- </StyleButton>
          <StyleButton>%</StyleButton>
          <StyleButton>/</StyleButton>
          <StyleButton>7</StyleButton>
          <StyleButton>8</StyleButton>
          <StyleButton>9</StyleButton>
          <StyleButton>X</StyleButton>
          <StyleButton>4</StyleButton>
          <StyleButton>5</StyleButton>
          <StyleButton>6</StyleButton>
          <StyleButton>-</StyleButton>
          <StyleButton>1</StyleButton>
          <StyleButton>2</StyleButton>
          <StyleButton>3</StyleButton>
          <StyleButton>+</StyleButton>
          <StyleButton>0</StyleButton>
          <StyleButton>,</StyleButton>
          <StyleButton>=</StyleButton>
        </Calculadora>
      </Calculadora>
    </Container>
  );
};

export default Calculator;
