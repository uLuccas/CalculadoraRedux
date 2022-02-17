import { applyMiddleware, createStore } from "redux";
import calc from "./modules/calculator/reducer";
import thunk from "redux-thunk";

const calculadora = createStore(calc, applyMiddleware(thunk));

export default calculadora;
