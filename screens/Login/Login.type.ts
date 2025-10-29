import { FieldConfig } from "@/components/DynamicForm/DynamicForm.type";

export interface LoginScreenProps {
  config: FieldConfig[];
  loading: boolean;
  handleFormChange: (formData: any) => void;
  handleSubmit: () => void;
  handleNavigation: () => void;
}
