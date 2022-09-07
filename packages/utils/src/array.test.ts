import { reorder, nonUnique } from "./array";

describe("reorder", () => {
  test("it should return a new copy of reorder array", () => {
    const arr = ["first", "second", "third"];

    const reordered = reorder(arr, 2, 0);

    expect(reordered).toEqual(["third", "first", "second"]);
  });
});

describe("nonUnique", () => {
  test("it should non unique values in array", () => {
    const nonUniqueValues = nonUnique([1, 2, 2, 3, 4, 4, 5]);

    expect(nonUniqueValues).toEqual([1, 3, 5]);
  });
});
