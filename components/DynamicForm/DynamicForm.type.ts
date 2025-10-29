export type FieldType = "text" | "email" | "password" | "number" | "textarea";

export type FieldConfig = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: FieldType;
  error?: string;
};

export interface DynamicFormProps {
  config: FieldConfig[];
  loading?: boolean;
  onChange?: (values: Record<string, string>) => void;
}
