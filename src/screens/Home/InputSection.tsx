import { useState } from "react";
import { Modal, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

interface IProps {
  tip: number;
  split: number;
  onTipChange: (tip: number) => void;
  onSplitChange: (split: number) => void;
}

const InputSection = ({ tip, split, onTipChange }: IProps) => {
  const [isModalVisible] = useState(true);

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#dcbfb9",
          padding: 32,
        }}
      >
        <Text>Tip</Text>

        <Text
          style={{
            fontSize: 32,
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
          }}
        >
          {tip}%
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#4f899f",
          padding: 32,
        }}
      >
        <Text>Split</Text>

        <Text
          style={{
            fontSize: 32,
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
          }}
        >
          {split}
        </Text>
      </View>

      <Modal transparent={true} visible={isModalVisible} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={30}
            step={5}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={onTipChange}
            value={tip}
          />
        </View>
      </Modal>
    </View>
  );
};

export default InputSection;
