import { MathExpression } from "../types";

export function isBalanced({ expression }: MathExpression): boolean {
  let stack = 0;

  for (const char of expression) {
    if (char === '(') stack++;
    else if (char === ')') {
      stack--;
      if (stack < 0) return false;
    } else if (/[{}\[\]]/.test(char)) { 
      return false;
    }
  }

  return stack === 0; 
}

