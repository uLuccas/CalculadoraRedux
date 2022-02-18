import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  text-align: center;
  height: 500px;
  width: 100%;
`;

interface StyleButtonProps {
  TypeButton: string;
}

export const StyleButton = styled.button`
  color: white;
  padding: 0.25em 1em;
  margin: 5px;
  border: 2px solid black;
  border-radius: 50px;
  display: block;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: gray;
  font-size: 24px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.7);
  }
`;

export const Calculadora = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 500px;
  height: 450px;
  flex-wrap: wrap;
  border-radius: 40px;

  &:hover ${styled.button} {
    background-color: green;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 25px;
  color: white;
  background-color: black;
  border: solid 0px;
`;

export const AllScren = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: -8px;
  width: 100%;
  height: 100vh;
  background-image: url(https://st.depositphotos.com/1025323/2718/i/950/depositphotos_27183107-stock-photo-mathematics-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

// export const allStyles = createGlobalStyle`
// .calculadora{
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-itens: center;
//   background-color: red;
// }
//   `;
