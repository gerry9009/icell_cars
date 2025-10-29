export type ButtonType = "button" | "link";

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonType;
}
