import { FieldConfig } from "@/components";

export const config: FieldConfig[] = [
  {
    name: "email",
    label: "Email",
    placeholder: "email@pelda.hu",
    type: "email",
  },
  {
    name: "password",
    label: "Jelszó",
    placeholder: "********",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Jelszó megerősítése",
    placeholder: "********",
    type: "password",
  },
];
