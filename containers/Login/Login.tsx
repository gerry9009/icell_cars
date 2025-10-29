import { LoginScreen } from "@/screens";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { config } from "./Login.config";

export const LoginContainer = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({
    email: "",
    password: "",
  });

  const handleFormChange = useCallback((values: Record<string, string>) => {
    setFormValues((prev) => ({ ...prev, ...values }));
  }, []);

  const handleSubmit = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        router.back();
      } catch (e) {
        router.replace("/");
      }
    }, 1000);
  }, []);

  const handleNavigation = useCallback(() => {
    router.push("/auth/register");
  }, []);

  return (
    <LoginScreen
      config={config}
      loading={loading}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      handleNavigation={handleNavigation}
    />
  );
};

export default LoginContainer;
