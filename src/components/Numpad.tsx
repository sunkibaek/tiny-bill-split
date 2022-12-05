import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  title: NumType;
  onPress: (title: this["title"]) => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    minHeight: 72,
  },
  text: {
    fontSize: 32,
  },
});

const Numpad = ({ title, onPress }: IProps) => {
  const handlePress = () => {
    onPress(title);
  };

  return (
    <Pressable style={styles.container} key={title} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Numpad;
