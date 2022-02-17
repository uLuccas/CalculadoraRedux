import { Reducer } from "redux";
import { ICaracter } from "./types";
import * as types from "./types";

const INITIAL_STATE: ICaracter = {
  digit: "",
  equation: "",
};

interface Action {
  type: string;
  equation: ICaracter;
  digit: string;
}

const calc: Reducer = (state: ICaracter = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RESULT_CALC: {
      let { digit } = action;
      // digit = "4*3-1";
      // const regexMultiplicacaoDivisao = /(\d+\.?\d*)([\/\*])(\d+\.?\d*)/gm;
      // const regexSomaSubtracao = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/gm;

      let resultRegexMult = /(\d+\.?\d*)([\/\*])(\d+\.?\d*)/.exec(digit);
      console.log(resultRegexMult);
      while (resultRegexMult) {
        if (resultRegexMult[2] === "/") {
          let divisao = Number(resultRegexMult[1]) / Number(resultRegexMult[3]);

          digit = digit.replace(resultRegexMult[0], divisao.toString());
        } else if (resultRegexMult[2] === "*") {
          let multiplicacao =
            Number(resultRegexMult[1]) * Number(resultRegexMult[3]);
          digit = digit.replace(resultRegexMult[0], multiplicacao.toString());
        }
        console.log(digit);

        resultRegexMult = /(\d+\.?\d*)([\/\*])(\d+\.?\d*)/.exec(digit);
        console.log(resultRegexMult);
      }

      let resultRegexSomaSub = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/.exec(digit);

      while (resultRegexSomaSub) {
        if (resultRegexSomaSub[2] === "+") {
          let soma =
            Number(resultRegexSomaSub[1]) + Number(resultRegexSomaSub[3]);
          digit = digit.replace(resultRegexSomaSub[0], soma.toString());
        } else if (resultRegexSomaSub[2] === "-") {
          const subtracao =
            Number(resultRegexSomaSub[1]) - Number(resultRegexSomaSub[3]);
          digit = digit.replace(resultRegexSomaSub[0], subtracao.toString());
        }
        console.log(53, digit);
        resultRegexSomaSub = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/.exec(digit);
        console.log(resultRegexSomaSub);
      }

      return {
        ...state,
        state: digit,
      };
    }

    case types.ADD_DIGIT: {
      let { digit } = action;

      return {
        ...state,
        equation: state.equation + digit,
      };
    }

    case types.CLEAN_INPUT: {
      return {
        state: INITIAL_STATE.digit,
      };
    }

    default:
      return state;
  }
};

export default calc;
