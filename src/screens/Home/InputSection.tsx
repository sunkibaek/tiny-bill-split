import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import SliderModal from "../../components/SliderModal";

interface IProps {
  tip: number;
  split: number;
  onTipChange: (tip: number) => void;
  onSplitChange: (split: number) => void;
}

const TIP_CONFIGS = {
  min: 0,
  max: 30,
  step: 5,
};
const SPLIT_CONFIGS = {
  min: 1,
  max: 10,
  step: 1,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tipContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4f899f",
    padding: 32,
  },
  splitContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dcbfb9",
    padding: 32,
  },
  amountText: {
    fontSize: 32,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});

const InputSection = ({ tip, split, onTipChange, onSplitChange }: IProps) => {
  const [isTipSliderVisible, setTipSliderVisible] = useState(false);
  const [isSplitSliderVisible, setSplitSliderVisible] = useState(false);

  const handleTipPress = () => {
    setTipSliderVisible(true);
  };

  const handleSplitPress = () => {
    setSplitSliderVisible(true);
  };

  const handleTipDismiss = () => {
    setTipSliderVisible(false);
  };

  const handleSplitDismiss = () => {
    setSplitSliderVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.tipContainer} onPress={handleTipPress}>
        <Text>Tip</Text>

        <Text style={styles.amountText}>{tip}%</Text>
      </Pressable>

      <Pressable style={styles.splitContainer} onPress={handleSplitPress}>
        <Text>Split</Text>

        <Text style={styles.amountText}>{split}</Text>
      </Pressable>

      <SliderModal
        value={tip}
        onValueChange={onTipChange}
        isVisible={isTipSliderVisible}
        minimumValue={TIP_CONFIGS.min}
        maximumValue={TIP_CONFIGS.max}
        onDismiss={handleTipDismiss}
        step={TIP_CONFIGS.step}
      />

      <SliderModal
        value={split}
        onValueChange={onSplitChange}
        isVisible={isSplitSliderVisible}
        minimumValue={SPLIT_CONFIGS.min}
        maximumValue={SPLIT_CONFIGS.max}
        onDismiss={handleSplitDismiss}
        step={SPLIT_CONFIGS.step}
      />
    </View>
  );
};

export default InputSection;
