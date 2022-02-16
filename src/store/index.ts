import { createStore } from "redux";
import calc from "./modules/calculator/reducer";

const calculadora = createStore(calc);

export default calculadora;
