import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Calculadora,
  Container,
  Conteudo,
  StyleButton,
  TextArea,
} from "../styles/styled";
import * as actions from "../../store/modules/calculator/actions";

const Calculator = () => {
  const [result, setResult] = useState();
  const [digits, setDigits] = useState("1*4*3-1/40+199*3-4+345*2");
  const dispatch = useDispatch();
  // const {reducers} = useSelector((state: ) => )
  function calcResult(): void {
    dispatch(actions.getResult(digits, dispatch));
  }

  return (
    <Container>
      <Calculadora>
        <div>
          <h1>Calc W</h1>
        </div>
        <TextArea name="visor">{result}</TextArea>
        <Calculadora>
          <StyleButton style={{ backgroundColor: "lightgray", color: "black" }}>
            AC
          </StyleButton>
          <StyleButton style={{ backgroundColor: "lightgray", color: "black" }}>
            +/-{" "}
          </StyleButton>
          <StyleButton style={{ backgroundColor: "lightgray", color: "black" }}>
            %
          </StyleButton>
          <StyleButton style={{ backgroundColor: "orange" }}>/</StyleButton>
          <StyleButton>7</StyleButton>
          <StyleButton>8</StyleButton>
          <StyleButton>9</StyleButton>
          <StyleButton style={{ backgroundColor: "orange" }}>X</StyleButton>
          <StyleButton>4</StyleButton>
          <StyleButton>5</StyleButton>
          <StyleButton>6</StyleButton>
          <StyleButton style={{ backgroundColor: "orange" }}>-</StyleButton>
          <StyleButton>1</StyleButton>
          <StyleButton>2</StyleButton>
          <StyleButton>3</StyleButton>
          <StyleButton style={{ backgroundColor: "orange" }}>+</StyleButton>
          <StyleButton style={{ width: 210 }}>0</StyleButton>
          <StyleButton>,</StyleButton>
          <StyleButton
            onClick={() => {
              calcResult();
            }}
            style={{ backgroundColor: "orange" }}
          >
            =
          </StyleButton>
        </Calculadora>
      </Calculadora>
    </Container>
  );
};

export default Calculator;
