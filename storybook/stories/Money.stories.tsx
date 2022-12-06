import { storiesOf } from "@storybook/react-native";
import React from "react";

import Money from "../../src/components/Money";
import CenterView from "./CenterView";

storiesOf("Money", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Money amountInCents={1023} />)
  .add("without cent values", () => <Money amountInCents={1000} />)
  .add("with one digit cent value", () => <Money amountInCents={1010} />);
