export function createErrorObject(code, message) {
  return {
    error: {
      code,
      message,
    },
  };
}
