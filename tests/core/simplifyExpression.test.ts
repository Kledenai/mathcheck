import { simplifyExpression } from "../../src/core/simplifyExpression";

describe("simplifyExpression", () => {
  it("should simplify a valid mathematical expression", () => {
    const result = simplifyExpression({ expression: "2 + 3 * 5" });
    expect(result.success).toBe(true);
    expect(result.result).toBe(17);
  });

  it("should handle division by zero and return NaN", () => {
    const result = simplifyExpression({ expression: "0 / 0" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Result is not a valid number.");
  });

  it("should fail for expressions with invalid characters", () => {
    const result = simplifyExpression({ expression: "2 + 3a" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Invalid mathematical expression.");
  });

  it("should fail for expressions with unbalanced parentheses", () => {
    const result = simplifyExpression({ expression: "2 + (3 * 5" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Invalid mathematical expression.");
  });

  it("should handle large numbers correctly", () => {
    const result = simplifyExpression({ expression: "1000000 * 1000000" });
    expect(result.success).toBe(true);
    expect(result.result).toBe(1000000000000);
  });

  it("should handle negative numbers", () => {
    const result = simplifyExpression({ expression: "-5 + 3" });
    expect(result.success).toBe(true);
    expect(result.result).toBe(-2);
  });

  it("should return an error for empty expressions", () => {
    const result = simplifyExpression({ expression: "" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Invalid mathematical expression.");
  });
});
