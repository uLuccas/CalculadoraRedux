import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Calculadora,
  Container,
  StyleButton,
  TextArea,
} from "../styles/styled";
import * as actions from "../../store/modules/calculator/actions";
import { RootState } from "../../store";

const Calculator = () => {
  const [result, setResult] = useState({digit: '', equation: '', state:'0'});
  const [digits, setDigits] = useState("1*4*3-1/40+199*3-4+345*2");

  const dispatch = useDispatch();

  const resultadao = useSelector((state: RootState) => state.calcReducer)
  console.log(resultadao)

  function calcResult(): void {
    dispatch(actions.getResult(digits, dispatch));
  }

  function cleanerInput (){
      dispatch(actions.cleanInput(dispatch))
  }

  useEffect(() =>{
    setResult(resultadao)
  },[])

  return (
    <Container>
      <Calculadora>
      {
        result.equation ? <h1 style={{ color: "white" }}>{result.equation}</h1> : <h1 style={{ color: "white" }}>{result.state}</h1>
      }
        <Calculadora>
          <StyleButton style={{ backgroundColor: "lightgray", color: "black" }} onClick={() => cleanerInput()}>
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
