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
  const [result, setResult] = useState({
    digit: "",
    equation: "",
    state: "",
  });
  const [digits, setDigits] = useState("");
  const [display, setDisplay] = useState(true);

  const dispatch = useDispatch();

  const resultadao = useSelector((state: RootState) => state.calcReducer);
  console.log(resultadao);

  function calcResult(): void {
    dispatch(actions.getResult(resultadao.digit, dispatch));

    setResult({ digit: "", equation: resultadao.equation, state: "" });
  }

  function cleanerInput() {
    dispatch(actions.cleanInput(dispatch));
  }

  function addDigit(digit: string) {
    dispatch(actions.addCaracters(digit, dispatch));
    console.log(digit);
  }

  function handleChangeValueOnDisplay() {
    if (result.equation) {
      setDisplay(!display);
    } else {
      setDisplay(!display);
    }
  }

  // useEffect(() => {
  //   setResult(resultadao);
  //   handleChangeValueOnDisplay();
  // }, [setInterval(() => 5000)]);

  return (
    <Container>
      <Calculadora>
        <div style={{ width: "100%", height: 100 }}>
          <h2 style={{ color: "white" }}>{resultadao.digit}</h2>
          <h2 style={{ color: "lightblue" }}>{resultadao.equation}</h2>
        </div>

        <StyleButton
          style={{ backgroundColor: "lightgray", color: "black" }}
          onClick={() => {
            cleanerInput();
          }}
        >
          AC
        </StyleButton>
        <StyleButton style={{ backgroundColor: "lightgray", color: "black" }}>
          +/-{" "}
        </StyleButton>
        <StyleButton style={{ backgroundColor: "lightgray", color: "black" }}>
          %
        </StyleButton>
        <StyleButton
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            addDigit("/");
          }}
        >
          /
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("7");
          }}
        >
          7
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("8");
          }}
        >
          8
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("9");
          }}
        >
          9
        </StyleButton>
        <StyleButton
          style={{ backgroundColor: "orange" }}
          onClick={() => addDigit("*")}
        >
          X
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("4");
          }}
        >
          4
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("5");
          }}
        >
          5
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("6");
          }}
        >
          6
        </StyleButton>
        <StyleButton
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            addDigit("-");
          }}
        >
          -
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("1");
          }}
        >
          1
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("2");
          }}
        >
          2
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit("3");
          }}
        >
          3
        </StyleButton>
        <StyleButton
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            addDigit("+");
          }}
        >
          +
        </StyleButton>
        <StyleButton
          style={{ width: 210 }}
          onClick={() => {
            addDigit("0");
          }}
        >
          0
        </StyleButton>
        <StyleButton
          onClick={() => {
            addDigit(".");
          }}
        >
          ,
        </StyleButton>
        <StyleButton
          onClick={() => {
            calcResult();
          }}
          style={{ backgroundColor: "orange" }}
        >
          =
        </StyleButton>
      </Calculadora>
    </Container>
  );
};

export default Calculator;
