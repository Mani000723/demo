import sum from "./sum.js";

describe("test for sum func", () => {
  test("adds 2+2 equal to 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
  test("adds 3+2 equal to 5", () => {
    expect(sum(3, 2)).toBe(5);
  });
});
