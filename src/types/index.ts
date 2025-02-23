export type MathExpression = string;

export type CreateMathCheckError = string;

export interface ValidateExpressionResult {
  isValid: boolean;
  error?: string;
}

export interface SimplifyExpressionResult {
  success: boolean;
  result?: number;
  error?: string;
}

export interface ConvertToLatexResult {
  success: boolean;
  latex?: string;
  error?: string;
}
