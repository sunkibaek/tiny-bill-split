import totalFormat from "../totalFormat";

describe("totalFormat", () => {
  describe("with initial values", () => {
    it("returns zero", () => {
      const result = totalFormat(0, 0, false);

      expect(result).toBe("0");
    });
  });

  describe("with dollars", () => {
    it("returns the dollar amount", () => {
      const result = totalFormat(12, 0, false);

      expect(result).toBe("12");
    });
  });

  describe("with cents", () => {
    it("returns the cent amount", () => {
      const result = totalFormat(0, 12, false);

      expect(result).toBe("0.12");
    });
  });

  describe("with dollars and cents", () => {
    it("returns the dollar and cent amount", () => {
      const result = totalFormat(12, 34, false);

      expect(result).toBe("12.34");
    });
  });

  describe("with keepDecimal true", () => {
    it("returns the dollar and decimal point", () => {
      const result = totalFormat(12, 0, true);

      expect(result).toBe("12.");
    });
  });

  describe("with cents and keepDecimal true", () => {
    it("returns the cent amount", () => {
      const result = totalFormat(0, 12, true);

      expect(result).toBe("0.12");
    });
  });
});
