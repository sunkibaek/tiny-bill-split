import keyInputReducer from "../keyInputReducer";

describe("keyInputReducer", () => {
  describe("when periodPressed", () => {
    it("changes mode to DECIMAL", () => {
      const result = keyInputReducer(
        { dollars: 12, cents: 0, mode: "NORMAL" },
        { type: "periodPressed" }
      );

      expect(result.mode).toBe("DECIMAL");
    });
  });

  describe("when delPressed", () => {
    it("removes a cent digit when cents exist", () => {
      const result = keyInputReducer(
        { dollars: 12, cents: 12, mode: "DECIMAL" },
        { type: "delPressed" }
      );

      expect(result.cents).toBe(1);
    });

    it("turns to NORMAL mode when in DECIMAL mode", () => {
      const result = keyInputReducer(
        { dollars: 12, cents: 0, mode: "DECIMAL" },
        { type: "delPressed" }
      );

      expect(result.mode).toBe("NORMAL");
    });

    it("removes a dollar digit when dollars exist", () => {
      const result = keyInputReducer(
        { dollars: 12, cents: 0, mode: "NORMAL" },
        { type: "delPressed" }
      );

      expect(result.dollars).toBe(1);
    });

    it("does nothing with zero dollars and zero cents", () => {
      const initialState = { dollars: 0, cents: 0, mode: "NORMAL" as const };
      const result = keyInputReducer(initialState, { type: "delPressed" });

      expect(result).toEqual(initialState);
    });
  });

  describe("when numPressed", () => {
    it("adds to the cent digits when in DECIMAL mode", () => {
      const initialState = { dollars: 0, cents: 0, mode: "DECIMAL" as const };
      const result = keyInputReducer(initialState, {
        type: "numPressed",
        payload: 1,
      });

      expect(result.cents).toEqual(1);
    });

    it("adds to the dollar digits when in NORMAL mode", () => {
      const initialState = { dollars: 0, cents: 0, mode: "NORMAL" as const };
      const result = keyInputReducer(initialState, {
        type: "numPressed",
        payload: 1,
      });

      expect(result.dollars).toEqual(1);
    });

    it("does nothing when in DECIMAL mode and already reached the limit", () => {
      const initialState = { dollars: 0, cents: 12, mode: "DECIMAL" as const };
      const result = keyInputReducer(initialState, {
        type: "numPressed",
        payload: 1,
      });

      expect(result).toEqual(initialState);
    });

    it("does nothing when in NORMAL mode and already reached the limit", () => {
      const initialState = {
        dollars: 123456,
        cents: 0,
        mode: "NORMAL" as const,
      };
      const result = keyInputReducer(initialState, {
        type: "numPressed",
        payload: 1,
      });

      expect(result).toEqual(initialState);
    });
  });

  describe("otherwise", () => {
    it("throws an error", () => {
      const initialState = {
        dollars: 123456,
        cents: 0,
        mode: "NORMAL" as const,
      };

      const result = () => {
        keyInputReducer(initialState, {
          type: "test" as any,
        });
      };

      expect(result).toThrowError();
    });
  });
});
