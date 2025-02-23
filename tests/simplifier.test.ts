import { simplifyExpression } from '../src/simplifier';

describe('simplifyExpression', () => {
  it('should simplify a valid mathematical expression', () => {
    const result = simplifyExpression({ expression: '2 + 3 * 5' });
    expect(result.success).toBe(true);
    expect(result.result).toBe(17);
  });

  it('should return an error for invalid expressions', () => {
    const result = simplifyExpression({ expression: '2 + (3 * 5' });
    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid mathematical expression.');
  });

  it('should return an error for expressions returning NaN', () => {
    const result = simplifyExpression({ expression: '0 / 0' });
    expect(result.success).toBe(false);
    expect(result.error).toBe('Result is not a valid number.');
  });
});