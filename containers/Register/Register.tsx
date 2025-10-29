import { useAppDispatch, useAppSelector } from "@/hooks";
import { RegisterScreen } from "@/screens";
import {
  register,
  selectAuthError,
  selectAuthLoading,
  selectAuthUser,
} from "@/store/auth";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { config as baseConfig } from "./Register.config";
import { handleNavigationButton } from "./Register.utils";
import { validateRegister } from "./register.validation";

export const RegisterContainer = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectAuthUser);
  const loading = useAppSelector(selectAuthLoading);
  const serverError = useAppSelector(selectAuthError);

  const [values, setValues] = useState<Record<string, string>>({});
  const [localErrors, setLocalErrors] = useState<
    Record<string, string | undefined>
  >({});

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)/home");
    }
  }, [user]);

  useEffect(() => {
    if (serverError) {
      router.replace("/error");
    }
  }, [serverError]);

  const config = baseConfig.map((config) => ({
    ...config,
    error: localErrors[config.name],
  }));

  const handleFormChange = useCallback((formData: Record<string, string>) => {
    setValues((prev) => ({ ...prev, ...formData }));
  }, []);

  const handleSubmit = useCallback(async () => {
    const errors = validateRegister(values);

    setLocalErrors(errors);

    if (Object.keys(errors).length > 0) return;

    const email = (values.email || "").trim();
    const password = values.password || "";

    try {
      await dispatch(register({ email, password })).unwrap();
    } catch (err: unknown) {
      const payload = err as { isServerError?: boolean } | undefined;
      if (payload && !payload.isServerError) {
        Alert.alert("Hiba", "Sikertelen regisztráció");
      }
    }
  }, [dispatch, values]);

  const handleNavigation = handleNavigationButton;

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
//
