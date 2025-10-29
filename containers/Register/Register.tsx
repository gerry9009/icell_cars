import { RegisterScreen } from "@/screens";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { config } from "./Register.config";

export const RegisterContainer = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = useCallback((formData: Record<string, string>) => {
    setValues((prev) => ({ ...prev, ...formData }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (values.password !== values.confirmPassword) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/auth/login");
    }, 1000);
  }, [values]);

  const handleNavigation = useCallback(() => {
    router.push("/auth/login");
  }, []);

  return (
    <RegisterScreen
      config={config}
      loading={loading}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      handleNavigation={handleNavigation}
    />
  );
};

export default RegisterContainer;
