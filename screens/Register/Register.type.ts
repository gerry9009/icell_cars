import { FieldConfig } from "@/components/DynamicForm/DynamicForm.type";

export interface RegisterScreenProps {
  config: FieldConfig[];
  loading: boolean;
  handleFormChange: (formData: any) => void;
  handleSubmit: () => void;
  handleNavigation: () => void;
}
