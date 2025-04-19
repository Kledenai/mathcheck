import type { CreateMathCheckError } from "../types";

export function createMathCheckError(message: CreateMathCheckError): Error {
  const error = new Error(message);
  error.name = "MathCheckError";
  return error;
}
