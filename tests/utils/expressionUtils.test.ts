import { isBalanced } from "../../src/utils/expressionUtils";

describe("isBalanced", () => {
  it("should return true for balanced parentheses", () => {
    expect(isBalanced('(2 + 3) * 5')).toBe(true);
  });

  it("should return false for unbalanced parentheses", () => {
    expect(isBalanced('2 + (3 * 4')).toBe(false);
  });

  it("should handle nested parentheses correctly", () => {
    expect(isBalanced('(((())))')).toBe(true);
    expect(isBalanced('(((()))')).toBe(false);
  });

  it("should return true for expressions without parentheses", () => {
    expect(isBalanced('2 + 3 * 5')).toBe(true);
  });

  it("should handle empty strings correctly", () => {
    expect(isBalanced('')).toBe(true);
  });

  it("should handle expressions with invalid characters gracefully", () => {
    expect(isBalanced('2 + (3 * [4])')).toBe(false);
  });
});
