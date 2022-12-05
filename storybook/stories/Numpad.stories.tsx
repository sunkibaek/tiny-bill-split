import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { StyleSheet, View } from "react-native";

import Numpad from "../../src/components/Numpad";
import CenterView from "./CenterView";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
});

storiesOf("Numpad", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Numpad title={1} onPress={action("press")} />)
  .add("in a row", () => (
    <View style={styles.row}>
      <Numpad title={1} onPress={action("press")} />
      <Numpad title={2} onPress={action("press")} />
      <Numpad title={3} onPress={action("press")} />
    </View>
  ));
