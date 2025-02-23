import { validateExpression } from '../../src/core/validator';

describe('validateExpression', () => {
  it('should validate a correct mathematical expression', () => {
    const result = validateExpression({ expression: '(2 + 3) * 5' });
    expect(result.isValid).toBe(true);
  });

  it('should invalidate an expression with unbalanced parentheses', () => {
    const result = validateExpression({ expression: '2 + (3 * 5' });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Parentheses are not balanced.');
  });

  it('should invalidate an expression with invalid characters', () => {
    const result = validateExpression({ expression: '2 + 3a' });
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Expression contains invalid characters.');
  });
});