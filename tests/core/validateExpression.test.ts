import { validateExpression } from "../../src/core/validateExpression";

describe("validateExpression", () => {
  it("should validate a correct mathematical expression", () => {
    const result = validateExpression({ expression: "(2 + 3) * 5" });
    expect(result.isValid).toBe(true);
  });

  it("should invalidate expressions with invalid characters", () => {
    const result = validateExpression({ expression: "2 + 3a" });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Expression contains invalid characters.");
  });

  it("should invalidate expressions with unbalanced parentheses", () => {
    const result = validateExpression({ expression: "2 + (3 * 5" });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Parentheses are not balanced.");
  });

  it("should invalidate expressions with syntax errors", () => {
    const result = validateExpression({ expression: "2 + * 5" });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Syntax error in the mathematical expression.");
  });

  it("should validate expressions without parentheses", () => {
    const result = validateExpression({ expression: "2 + 3 * 5" });
    expect(result.isValid).toBe(true);
  });

  it("should validate expressions with spaces", () => {
    const result = validateExpression({ expression: " (  2 + 3 ) * 5 " });
    expect(result.isValid).toBe(true);
  });

  it("should invalidate empty expressions", () => {
    const result = validateExpression({ expression: "" });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Syntax error in the mathematical expression.");
  });
});
