import { useReducer, useState } from "react";
import { View } from "react-native";

import keyInputReducer, {
  KEY_INPUT_INITIAL_STATE,
} from "../../reducers/keyInputReducer";
import InputSection from "./InputSection";
import NumpadSection from "./NumpadSection";
import ResultSection from "./ResultSection";

const Home = () => {
  const [{ dollars, cents, mode }, dispatch] = useReducer(
    keyInputReducer,
    KEY_INPUT_INITIAL_STATE
  );

  const [tip, setTip] = useState(15);
  const [split, setSplit] = useState(1);

  const handleNumPress = (num: NumType) => {
    if (num === ".") {
      dispatch({ type: "decimal" });
      return;
    }

    if (num === "DEL") {
      dispatch({ type: "del" });
      return;
    }

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
