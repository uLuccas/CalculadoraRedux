export interface ICaracter {
  digit: string;
  equation: string;
}

export interface IAction {
  caracter: ICaracter;
}

export const RESULT_CALC = "RESULT_CALC";
export const CLEAN_INPUT = "CLEAN_INPUT";
export const ADD_DIGIT = "ADD_DIGIT";
