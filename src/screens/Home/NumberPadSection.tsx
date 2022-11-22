import { Pressable, StyleSheet, Text, View } from "react-native";

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

const NumberPadSection = ({ onNumPress }: IProps) => {
  const handleNumPress = (num: NumType) => () => {
    onNumPress(num);
  };

  return (
    <View>
      {NUMS.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((num) => (
            <Pressable
              key={num}
              style={styles.numContainer}
              onPress={handleNumPress(num)}
            >
              <Text style={styles.numText}>{num}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default NumberPadSection;
