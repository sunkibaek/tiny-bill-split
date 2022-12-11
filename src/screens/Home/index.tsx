import { useReducer, useState } from "react";
import { View } from "react-native";

import InputSection from "./InputSection";
import NumpadSection from "./NumpadSection";
import ResultSection from "./ResultSection";

type Mode = "NORMAL" | "DECIMAL";

const INITIAL_STATE: {
  dollars: number;
  cents: number;
  mode: Mode;
} = {
  dollars: 0,
  cents: 0,
  mode: "NORMAL",
};

const reducer = (
  state: typeof INITIAL_STATE,
  {
    type,
    payload,
  }: {
    type: "keyInput";
    payload: NumType;
  }
) => {
  switch (type) {
    case "keyInput":
      if (payload === ".") {
        return { ...state, mode: "DECIMAL" };
      }

      if (payload === "DEL") {
        if (state.cents > 0) {
          return { ...state, cents: Math.floor(state.cents / 10) };
        }

        if (state.mode === "DECIMAL") {
          return { ...state, mode: "NORMAL" };
        }

        return { ...state, dollars: Math.floor(state.dollars / 10) };
      }

      if (typeof payload !== "number") {
        throw new Error("Unsupported input entered.");
      }

      if (String(state.cents).length === 2) {
        return;
      }

      if (String(state.dollars).length === 6) {
        return;
      }

      if (state.mode === "DECIMAL") {
        return { ...state, cents: state.cents * 10 + payload };
      }

      if (state.mode === "NORMAL") {
        return { ...state, dollars: state.dollars * 10 + payload };
      }

      return;
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

const Home = () => {
  const [{ dollars, cents, mode }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const [tip, setTip] = useState(15);
  const [split, setSplit] = useState(1);

  const handleNumPress = (num: NumType) => {
    dispatch({ type: "keyInput", payload: num });
  };

  const handleTipChange = (newTip: number) => {
    setTip(newTip);
  };

  const handleSplitChange = (newSplit: number) => {
    setSplit(newSplit);
  };

  const formattedTotal = () => {
    let result = String(dollars);

    if (cents > 0) {
      result += `.${String(cents)}`;
    } else if (mode === "DECIMAL") {
      result += ".";
    }

    return result;
  };

  const total = Number(`${dollars}.${cents}`);
  const billTotal = (total + total * (tip / 100)) * 100;
  const splitTotal = billTotal / split;

  return (
    <View>
      <ResultSection
        total={formattedTotal()}
        billTotalInCents={billTotal}
        splitTotalInCents={splitTotal}
      />

      <InputSection
        tip={tip}
        split={split}
        onTipChange={handleTipChange}
        onSplitChange={handleSplitChange}
      />

      <NumpadSection onNumPress={handleNumPress} />
    </View>
  );
};

export default Home;
