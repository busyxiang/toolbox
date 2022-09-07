import { average, minMax } from "./number";

describe("average", () => {
  test("it should return average value", () => {
    const aver = average(1, 2, 3);

    expect(aver).toBe(2);
  });

  test("it should return average value(spread array)", () => {
    const aver = average(...[1, 2, 3]);

    expect(aver).toBe(2);
  });
});

describe("minMax", () => {
  test("it should return correct min max value", () => {
    const value = minMax(10, 0, 5);

    expect(value).toBe(5);
  });
});
