import Slider from "@react-native-community/slider";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface IProps {
  isVisible: boolean;
  minimumValue: number;
  maximumValue: number;
  step: number;
  value?: number;
  onValueChange?: (value: this["value"]) => void;
  onDismiss?: () => void;
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  valueContainer: {
    alignItems: "center",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sliderContainer: {
    backgroundColor: "#ffffff",
    padding: 32,
    borderRadius: 32,
  },
  slider: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    paddingTop: 32,
    paddingBottom: 16,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const SliderModal = ({
  isVisible,
  minimumValue,
  maximumValue,
  value,
  step,
  onValueChange,
  onDismiss,
}: IProps) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View style={styles.container}>
        <Pressable onPress={onDismiss} style={styles.backdrop} />

        <View style={styles.sliderContainer}>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{value}</Text>
          </View>

          <Slider
            maximumValue={maximumValue}
            minimumValue={minimumValue}
            onValueChange={onValueChange}
            step={step}
            style={styles.slider}
            value={value}
          />

          <View style={styles.labelRow}>
            <Text>{minimumValue}</Text>

            <Text>{maximumValue}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SliderModal;
