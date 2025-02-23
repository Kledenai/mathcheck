export function createMathCheckError(message: string): Error {
  const error = new Error(message);
  error.name = "MathCheckError";
  return error;
}
