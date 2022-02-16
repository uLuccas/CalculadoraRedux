import React from "react";
import Calculator from "./components/calculator";
import Header from "./components/header";
import { Container } from "./components/styles/styled";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
