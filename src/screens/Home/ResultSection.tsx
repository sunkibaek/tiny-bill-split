import { SafeAreaView, Text, View, StyleSheet } from "react-native";

interface IProps {
  total: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eb9178",
    padding: 32,
  },
});

const ResultSection = ({ total }: IProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ alignItems: "center", paddingBottom: 32 }}>
          <Text>Tiny Bill Split</Text>

          <Text>Total</Text>

          <Text
            style={{
              fontSize: 72,
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            ${total}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Bill Total</Text>

            <Text style={{ fontSize: 32 }}>$100</Text>
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Split Total</Text>

            <Text style={{ fontSize: 32 }}>$20</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultSection;
