import { StyleSheet, View } from "react-native";
import Numpad from "../../components/Numpad";

interface IProps {
  onNumPress: (num: NumType) => void;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    minHeight: 72,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  numContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  numText: {
    fontSize: 32,
  },
});

const NUMS: NumType[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [".", 0, "DEL"],
];

const NumpadSection = ({ onNumPress }: IProps) => {
  return (
    <View>
      {NUMS.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((num) => (
            <Numpad key={num} title={num} onPress={onNumPress} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default NumpadSection;
