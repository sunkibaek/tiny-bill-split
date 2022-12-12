const totalFormat = (dollars: number, cents: number, keepDecimal: boolean) => {
  let result = String(dollars);

  if (keepDecimal || cents > 0) {
    result += ".";
  }

  if (cents > 0) {
    result += String(cents);
  }

  return result;
};

export default totalFormat;
