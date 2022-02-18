import React from "react";
import Calculator from "./components/calculator";
import Header from "./components/header";
import { Container, AllScren } from "./components/styles/styled";

function App() {
  return (
    // <AllScren>
    <>
      <Header />
      <Container>
        <Calculator />
      </Container>
    </>
    // </AllScren>
  );
}

export default App;
