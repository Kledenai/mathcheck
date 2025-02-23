import { convertToLatex } from "../../src/core/latexConverter";

describe("convertToLatex", () => {
  it("should convert a valid mathematical expression to LaTeX", () => {
    const result = convertToLatex({ expression: "(2 + 3) * 5" });
    expect(result.success).toBe(true);
    expect(result.latex).toBe("\\left(2 + 3\\right) \\cdot 5");
  });

  it("should return an error for invalid expressions with unbalanced parentheses", () => {
    const result = convertToLatex({ expression: "2 + (3 * 5" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Parentheses are not balanced.");
  });

  it("should handle expressions with no operations", () => {
    const result = convertToLatex({ expression: "42" });
    expect(result.success).toBe(true);
    expect(result.latex).toBe("42");
  });

  it("should handle expressions with division", () => {
    const result = convertToLatex({ expression: "10 / 2" });
    expect(result.success).toBe(true);
    expect(result.latex).toBe("10 \\div 2");
  });

  it("should handle expressions with exponentiation", () => {
    const result = convertToLatex({ expression: "2 ^ 3" });
    expect(result.success).toBe(true);
    expect(result.latex).toBe("2 ^ 3");
  });

  it("should handle expressions with multiple parentheses", () => {
    const result = convertToLatex({ expression: "((2 + 3) * (4 - 1))" });
    expect(result.success).toBe(true);
    expect(result.latex).toBe("\\left(\\left(2 + 3\\right) \\cdot \\left(4 - 1\\right)\\right)");
  });

  it("should handle empty expressions and return an error", () => {
    const result = convertToLatex({ expression: "" });
    expect(result.success).toBe(false);
    expect(result.error).toBe("Syntax error in the mathematical expression.");
  });
});
