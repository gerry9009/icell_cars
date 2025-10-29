import { useAppDispatch, useAppSelector } from "@/hooks";
import { LoginScreen } from "@/screens";
import {
  login,
  selectAuthError,
  selectAuthLoading,
  selectAuthUser,
} from "@/store";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { config as baseConfig } from "./Login.config";
import { handleNavigationButton } from "./Login.utils";
import { validateLogin } from "./login.validation";

export const LoginContainer = () => {
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
    const errors = validateLogin(values);
    setLocalErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const email = (values.email || "").trim();
    const password = values.password || "";

    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (err: unknown) {
      const payload = err as { isServerError?: boolean } | undefined;
      if (payload && !payload.isServerError) {
        Alert.alert("Hiba", "Hibás email vagy jelszó");
      }
    }
  }, [dispatch, values]);

  return (
    <LoginScreen
      config={config}
      loading={loading}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      handleNavigation={handleNavigationButton}
    />
  );
};

export default LoginContainer;
