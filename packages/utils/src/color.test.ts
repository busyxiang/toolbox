import { randomHexColor, isHexColor } from "./color";

describe("isHexColor", () => {
  test("it should return true if is valid hex color", () => {
    const isValid = isHexColor("#e34155");

    expect(isValid).toBe(true);
  });

  test("it should return false if is invalid input", () => {
    const isValid = isHexColor("color");

    expect(isValid).toBe(false);
  });
});

describe("randomHexColor", () => {
  test("it should return a valid hex color", () => {
    const regex = /^#[0-9A-F]{6}$/i;

    for (let i = 0; i < 10; i++) {
      const color = randomHexColor();

      expect(regex.test(color)).toBe(true);
    }
  });
});
