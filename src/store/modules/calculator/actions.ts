import * as types from "./types";
// import { ICaracter } from "./types";
import { Dispatch } from "redux";

export function addCaracters(digit: string, dispatch: Dispatch): void {
  console.log(digit);
  dispatch({
    type: types.ADD_DIGIT,
    digit,
  });
}

export function cleanInput(dispatch: Dispatch) {
  dispatch({
    type: types.CLEAN_INPUT,
    input: "",
  });
}

export function getResult(digit: string, dispatch: Dispatch) {
  console.log(digit);

  dispatch({
    type: types.RESULT_CALC,
    digit,
  });
}
