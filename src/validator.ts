import { MathExpression, ValidateExpressionResult } from "./types";

export function validateExpression({ expression }: MathExpression): ValidateExpressionResult {
  const validCharacters = /^[0-9+\-*/^().\s]+$/;

  if (!validCharacters.test(expression)) {
    return {
      isValid: false,
      error: "Expression contains invalid characters.",
    };
  }

  if (!isBalanced(expression)) {
    return {
      isValid: false,
      error: "Parentheses are not balanced.",
    };
  }

  try {
    new Function(`return (${expression})`);
    return { isValid: true };
  } catch {
    return {
      isValid: false,
      error: "Syntax error in the mathematical expression.",
    };
  }
}

function isBalanced(expression: string): boolean {
  let stack = 0;
  for (const char of expression) {
    if (char === '(') stack++;
    else if (char === ')') {
      stack--;
      if (stack < 0) return false;
    }
  }
  return stack === 0;
}