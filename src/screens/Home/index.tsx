import { useState } from "react";
import { View } from "react-native";

import InputSection from "./InputSection";
import NumberPadSection from "./NumberPadSection";
import ResultSection from "./ResultSection";

type Mode = "NORMAL" | "DECIMAL";

const Home = () => {
  const [dollars, setDollars] = useState(0);
  const [cents, setCents] = useState(0);
  const [mode, setMode] = useState<Mode>("NORMAL");

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

  const formattedTotal = () => {
    let result = String(dollars);

    if (cents > 0) {
      result += `.${String(cents)}`;
    } else if (mode === "DECIMAL") {
      result += ".";
    }

    return result;
  };

  return (
    <View>
      <ResultSection total={formattedTotal()} />

      <InputSection />

      <NumberPadSection onNumPress={handleNumPress} />
    </View>
  );
};

export default Home;
