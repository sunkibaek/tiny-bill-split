type Mode = "NORMAL" | "DECIMAL";

const MAX_LENGTHS = {
  cents: 2,
  dollars: 6,
};

export const KEY_INPUT_INITIAL_STATE = {
  dollars: 0,
  cents: 0,
  mode: "NORMAL" as Mode,
};

const keyInputReducer = <T extends typeof KEY_INPUT_INITIAL_STATE>(
  state: T,
  action:
    | { type: "numPressed"; payload: number }
    | { type: "delPressed" }
    | { type: "periodPressed" }
): T => {
  switch (action.type) {
    case "periodPressed":
      return { ...state, mode: "DECIMAL" };
    case "delPressed":
      if (state.cents > 0) {
        return { ...state, cents: Math.floor(state.cents / 10) };
      }

      if (state.mode === "DECIMAL") {
        return { ...state, mode: "NORMAL" };
      }

      return { ...state, dollars: Math.floor(state.dollars / 10) };
    case "numPressed":
      if (String(state.cents).length === MAX_LENGTHS.cents) {
        return state;
      }

      if (String(state.dollars).length === MAX_LENGTHS.dollars) {
        return state;
      }

      if (state.mode === "DECIMAL") {
        return { ...state, cents: state.cents * 10 + action.payload };
      }

      if (state.mode === "NORMAL") {
        return { ...state, dollars: state.dollars * 10 + action.payload };
      }

      return state;
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
};

export default keyInputReducer;
