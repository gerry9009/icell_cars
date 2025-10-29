import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "@/utils/validation";

export const validateRegister = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};
  const email = values.email;
  const password = values.password;
  const confirm = values.confirmPassword;

  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;

  const passErr = validatePassword(password);
  if (passErr) errors.password = passErr;

  const confirmErr = validateConfirmPassword(password, confirm);
  if (confirmErr) errors.confirmPassword = confirmErr;

  return errors;
};

export default validateRegister;
