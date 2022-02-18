import { Reducer } from "redux";
import { ICaracter } from "./types";
import * as types from "./types";

const INITIAL_STATE: ICaracter = {
  digit: "",
  equation: "",
};

// interface Action {
//   type: string;
//   equation: ICaracter;
//   digit: string;
// }

const calc: Reducer = (state: ICaracter = INITIAL_STATE, action) => {
  let { digit } = action;

  switch (action.type) {
    case types.RESULT_CALC: {
      // const regexMultiplicacaoDivisao = /(\d+\.?\d*)([\/\*])(\d+\.?\d*)/gm;
      // const regexSomaSubtracao = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/gm;

      let resultRegexMult = /(\d+\.?\d*)([\/\*])(\d+\.?\d*)/.exec(digit);

      while (resultRegexMult) {
        if (resultRegexMult[2] === "/") {
          let divisao = Number(resultRegexMult[1]) / Number(resultRegexMult[3]);

          digit = digit.replace(resultRegexMult[0], divisao.toString());
        } else if (resultRegexMult[2] === "*") {
          let multiplicacao =
            Number(resultRegexMult[1]) * Number(resultRegexMult[3]);
          digit = digit.replace(resultRegexMult[0], multiplicacao.toString());
        }
        resultRegexMult = /(\d+\.?\d*)([\/\*])(\d+\.?\d*)/.exec(digit);
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
        resultRegexSomaSub = /(\d+\.?\d*)([\-\+])(\d+\.?\d*)/.exec(digit);
      }
      state.equation = digit;
      
      return {
        ...state,
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
