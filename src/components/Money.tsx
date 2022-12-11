import { Text, TextProps } from "react-native";

interface IProps {
  amountInCents: number;
  style?: TextProps["style"];
}

const CENT_DIGIT = 2;

const formatAmount = (amountInCents: number) => {
  const dollarAmount = Math.round(amountInCents) / 10 ** CENT_DIGIT;
  const amountString = String(dollarAmount);
  let [dollars, cents] = amountString.split(".");
  cents = (cents || "").padEnd(CENT_DIGIT, "0");

  return { dollars, cents };
};

const Money = ({ amountInCents, style }: IProps) => {
  const { dollars, cents } = formatAmount(amountInCents);

  return (
    <Text style={style}>
      ${dollars}.{cents}
    </Text>
  );
};

export default Money;
