import { useState } from "react";
import { View } from "react-native";

import InputSection from "./InputSection";
import NumpadSection from "./NumpadSection";
import ResultSection from "./ResultSection";

type Mode = "NORMAL" | "DECIMAL";

const Home = () => {
  const [dollars, setDollars] = useState(0);
  const [cents, setCents] = useState(0);
  const [mode, setMode] = useState<Mode>("NORMAL");
  const [tip, setTip] = useState(15);
  const [split, setSplit] = useState(1);

  const handleNumPress = (num: NumType) => {
    if (num === ".") {
      setMode("DECIMAL");
      return;
    }

    if (num === "DEL") {
      if (cents > 0) {
        setCents((prev) => Math.floor(prev / 10));
        return;
      }

      if (mode === "DECIMAL") {
        setMode("NORMAL");
        return;
      }

      setDollars((prev) => Math.floor(prev / 10));
      return;
    }

    if (typeof num !== "number") {
      throw new Error("Unsupported input entered.");
    }

    if (String(cents).length === 2) {
      return;
    }

    if (String(dollars).length === 6) {
      return;
    }

    if (mode === "DECIMAL") {
      setCents((prev) => prev * 10 + num);
      return;
    }

    if (mode === "NORMAL") {
      setDollars((prev) => prev * 10 + num);
      return;
    }
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

  const totals = {
    total: formattedTotal(),
    billTotal,
    splitTotal,
  };

  return (
    <View>
      <ResultSection
        total={totals.total}
        billTotalInCents={totals.billTotal}
        splitTotalInCents={totals.splitTotal}
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
