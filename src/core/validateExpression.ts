import { MathExpression, ValidateExpressionResult } from "../types";
import { isBalanced } from "../utils/expressionUtils";

export function validateExpression({ expression }: MathExpression): ValidateExpressionResult {
  const validCharacters = /^[0-9+\-*/^().\s]+$/;

  if (expression.trim() === "") {
    return { isValid: false, error: "Syntax error in the mathematical expression." };
  }

  if (!validCharacters.test(expression)) {
    return { isValid: false, error: "Expression contains invalid characters." };
  }

  if (!isBalanced({ expression: expression })) {
    return { isValid: false, error: "Parentheses are not balanced." };
  }

  try {
    new Function(`return (${expression})`);
    return { isValid: true };
  } catch {
    return { isValid: false, error: "Syntax error in the mathematical expression." };
  }
}
