import { validateExpression } from "./validator";
import { MathExpression, SimplifyExpressionResult } from "./types";

export function simplifyExpression({ expression }: MathExpression): SimplifyExpressionResult {
  const validation = validateExpression({ expression });

  if (!validation.isValid) {
    return {
      success: false,
      error: validation.error || "Invalid mathematical expression.",
    };
  }

  try {
    const result = new Function(`return (${expression})`)();
    if (typeof result === 'number') {
      return { success: true, result };
    } else {
      return { success: false, error: "Result is not a number." };
    }
  } catch {
    return {
      success: false,
      error: "Failed to simplify the expression due to an evaluation error.",
    };
  }
}