import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import { number, boolean } from "@storybook/addon-knobs";

import CenterView from "./CenterView";
import SliderModal from "../../src/components/SliderModal";

storiesOf("SliderModal", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <>
      <Text>Use knobs to show slider</Text>

      <SliderModal
        isVisible={boolean("isVisible", false)}
        maximumValue={number("min", 0)}
        minimumValue={number("max", 30)}
        step={number("step", 5)}
      />
    </>
  ));
