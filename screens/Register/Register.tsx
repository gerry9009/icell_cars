import { Button, DynamicForm, Layout } from "@/components";
import React from "react";
import { RegisterScreenProps } from "./Register.type";

export const RegisterScreen = ({
  config,
  loading,
  handleFormChange,
  handleSubmit,
  handleNavigation,
}: RegisterScreenProps) => {
  return (
    <Layout headerProps={{ title: "Regisztráció" }} scrollable={true}>
      <DynamicForm
        config={config}
        loading={loading}
        onChange={handleFormChange}
      />
      <Button label="Regisztráció" onPress={handleSubmit} loading={loading} />
      <Button label="Bejelentkezés" onPress={handleNavigation} type="link" />
    </Layout>
  );
};

export default RegisterScreen;
