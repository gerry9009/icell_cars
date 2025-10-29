import { validateEmail, validatePassword } from "@/utils/validation";

export const validateLogin = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};
  const emailErr = validateEmail(values.email);
  if (emailErr) errors.email = emailErr;

  const passErr = validatePassword(values.password);
  if (passErr) errors.password = passErr;

  return errors;
};
