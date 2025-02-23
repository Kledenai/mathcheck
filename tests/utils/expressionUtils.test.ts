import { isBalanced } from '../../src/utils/expressionUtils';

describe('isBalanced', () => {
  it('should return true for an empty string', () => {
    expect(isBalanced({ expression: '' })).toBe(true);
  });

  it('should return true for balanced parentheses', () => {
    expect(isBalanced({ expression: '(2 + 3) * 5' })).toBe(true);
    expect(isBalanced({ expression: '((1 + 2) * (3 + 4))' })).toBe(true);
    expect(isBalanced({ expression: '2 + ((3 * 4) - 5)' })).toBe(true);
  });

  it('should return false for unbalanced parentheses', () => {
    expect(isBalanced({ expression: '2 + (3 * 4' })).toBe(false);
    expect(isBalanced({ expression: '(2 + 3)) * 5' })).toBe(false);
    expect(isBalanced({ expression: '((1 + 2) * (3 + 4)' })).toBe(false);
  });

  it('should handle nested parentheses correctly', () => {
    expect(isBalanced({ expression: '(((())))' })).toBe(true);
    expect(isBalanced({ expression: '(((()))' })).toBe(false);
  });

  it('should ignore characters that are not parentheses', () => {
    expect(isBalanced({ expression: '2 + 3 * 5' })).toBe(true);
  });
});
