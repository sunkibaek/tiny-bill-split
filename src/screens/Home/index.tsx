import { useReducer, useState } from "react";
import { View } from "react-native";

import keyInputReducer, {
  KEY_INPUT_INITIAL_STATE,
} from "../../reducers/keyInputReducer";
import totalFormat from "../../utils/totalFormat";
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
      dispatch({ type: "periodPressed" });
      return;
    }

    if (num === "DEL") {
      dispatch({ type: "delPressed" });
      return;
    }

    dispatch({ type: "numPressed", payload: num });
  };

  const handleTipChange = (newTip: number) => {
    setTip(newTip);
  };

  const handleSplitChange = (newSplit: number) => {
    setSplit(newSplit);
  };

  const total = Number(`${dollars}.${cents}`);
  const billTotal = (total + total * (tip / 100)) * 100;
  const splitTotal = billTotal / split;

  return (
    <View>
      <ResultSection
        total={totalFormat(dollars, cents, mode === "DECIMAL")}
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
