import { Text, View } from "react-native";

const InputSection = () => {
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
          15%
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
          4
        </Text>
      </View>
    </View>
  );
};

export default InputSection;
