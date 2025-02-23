import { convertToLatex } from '../src/latexConverter';

describe('convertToLatex', () => {
  it('should convert a valid mathematical expression to LaTeX', () => {
    const result = convertToLatex({ expression: '(2 + 3) * 5' });
    expect(result.success).toBe(true);
    expect(result.latex).toBe('\\left(2 + 3\\right) \\cdot 5');
  });

  it('should return an error for invalid expressions', () => {
    const result = convertToLatex({ expression: '2 + (3 * 5' });
    expect(result.success).toBe(false);
    expect(result.error).toBe('Parentheses are not balanced.');
  });
});