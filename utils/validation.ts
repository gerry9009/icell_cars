export const isEmail = (value: string): boolean => {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
};

export const required = (value: string | undefined): string | undefined => {
  if (!value || value.trim() === "") return "Kérlek töltsd ki ezt a mezőt";
  return undefined;
};

export const validatePassword = (
  value: string | undefined
): string | undefined => {
  if (!value || value.length === 0) return "Kérlek add meg a jelszót";
  if (value.length < 6)
    return "A jelszónak legalább 6 karakter hosszúnak kell lennie";
  return undefined;
};

export const validateConfirmPassword = (
  password: string | undefined,
  confirm: string | undefined
): string | undefined => {
  if (!confirm || confirm.length === 0) return "Kérlek erősítsd meg a jelszót";
  if (password !== confirm) return "A jelszavak nem egyeznek";
  return undefined;
};

export const validateEmail = (
  value: string | undefined
): string | undefined => {
  if (!value || value.trim() === "") return "Kérlek add meg az email címet";
  if (!isEmail(value)) return "Érvénytelen email";
  return undefined;
};

export const formatHungarianDate = (iso?: string | null): string => {
  if (!iso) return "";

  const date = new Date(iso);
  if (isNaN(date.getTime())) return iso;

  try {
    const fmt = new Intl.DateTimeFormat("hu-HU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    return fmt.format(date);
  } catch {
    // Fallback
    return date.toLocaleString("hu-HU");
  }
};
