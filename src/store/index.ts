import { applyMiddleware, combineReducers, createStore } from "redux";
import calc from "./modules/calculator/reducer";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type RootState = ReturnType<typeof calculadora.getState>;

export const reducers = combineReducers({
    calcReducer: calc,
});
  
export const calculadora = createStore(reducers, applyMiddleware(thunk));

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default calculadora;
