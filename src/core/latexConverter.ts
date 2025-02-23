import { MathExpression, ConvertToLatexResult } from "../types";
import { validateExpression } from "./validateExpression";

export function convertToLatex(expression: MathExpression): ConvertToLatexResult {
  const validation = validateExpression(expression);

  if (!validation.isValid) {
    return {
      success: false,
      error: validation.error || 'Invalid mathematical expression.',
    };
  }

  try {
    const latex = expression
      .replace(/\*/g, ' \\cdot ')
      .replace(/\//g, ' \\div ')
      .replace(/\^/g, ' ^ ')
      .replace(/\(/g, '\\left(')
      .replace(/\)/g, '\\right)')
      .replace(/\s+/g, ' ')
      .trim();

    return { success: true, latex };
  } catch {
    return { success: false, error: 'Failed to convert the expression to LaTeX.' };
  }
}