import { isValidJson } from "./json";

describe("isValidJson", () => {
  test("it should return true if JSON is valid", () => {
    const isValid = isValidJson(JSON.stringify({ x: 1 }));

    expect(isValid).toBe(true);
  });

  test("it should return false if JSON is not valid", () => {
    const isValid = isValidJson("invalid json");

    expect(isValid).toBe(false);
  });
});
