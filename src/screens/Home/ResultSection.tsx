import { SafeAreaView, Text, View, StyleSheet } from "react-native";

import Money from "../../components/Money";

interface IProps {
  total: string;
  billTotalInCents: number;
  splitTotalInCents: number;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eb9178",
    padding: 32,
  },
});

const ResultSection = ({
  total,
  billTotalInCents,
  splitTotalInCents,
}: IProps) => {
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

            <Money amountInCents={billTotalInCents} style={{ fontSize: 32 }} />
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Split Total</Text>

            <Money amountInCents={splitTotalInCents} style={{ fontSize: 32 }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultSection;
