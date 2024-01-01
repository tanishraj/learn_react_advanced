import { sum } from "../sum";

describe("Testing Function Sum", () => {
  test("should return 3 if (1,2) is provided as input", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("should return 5 if (3,-2) is provided as input", () => {
    const result = sum(3, -2);
    expect(result).toBe(1);
  });

  test("should return 1 if ('3',-2) is provided as input", () => {
    const result = sum("3", -2);
    expect(result).toBe(1);
  });

  test("should return 5 if (3,-2) is provided as input", () => {
    const result = sum("3", "-2");
    expect(result).toBe(undefined);
  });
});
