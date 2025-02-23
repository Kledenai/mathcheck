import { MathExpression, SimplifyExpressionResult } from "../types";
import { validateExpression } from "./validateExpression";

export function simplifyExpression(expression: MathExpression): SimplifyExpressionResult {
  const validation = validateExpression(expression);

  if (!validation.isValid) {
    return { success: false, error: 'Invalid mathematical expression.' };
  }

  try {
    const result = new Function(`return (${expression})`)();
    if (typeof result === 'number' && !isNaN(result)) {
      return { success: true, result };
    } else {
      return { success: false, error: "Result is not a valid number." };
    }
  } catch {
    return { success: false, error: 'Failed to evaluate the expression.' };
  }
}