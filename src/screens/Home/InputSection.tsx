import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

interface IProps {
  tip: number;
  split: number;
  onTipChange: (tip: number) => void;
  onSplitChange: (split: number) => void;
}

const InputSection = ({ tip, split, onTipChange }: IProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTipPress = () => {
    setIsModalVisible(true);
  };

  const handleModalDismiss = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#dcbfb9",
          padding: 32,
        }}
        onPress={handleTipPress}
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
      </Pressable>

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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={handleModalDismiss}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />

          <Slider
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 200,
              height: 40,
              padding: 32,
            }}
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
