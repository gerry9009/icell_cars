export const normalizeAuthError = (
  err: unknown
): { isServerError: boolean } => {
  const error = err as { code?: unknown } | undefined;
  const code = error?.code;

  if (typeof code === "string" && code.startsWith("auth/")) {
    return { isServerError: false };
  }

  return { isServerError: true };
};
