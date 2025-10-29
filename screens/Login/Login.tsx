import { Button, DynamicForm, Layout } from "@/components";
import { LoginScreenProps } from "./Login.type";

export const LoginScreen = ({
  config,
  loading,
  handleFormChange,
  handleSubmit,
  handleNavigation,
}: LoginScreenProps) => {
  return (
    <Layout headerProps={{ title: "Bejelentkezés" }} scrollable={true}>
      <DynamicForm
        config={config}
        loading={loading}
        onChange={handleFormChange}
      />
      <Button label="Bejelentkezés" onPress={handleSubmit} loading={loading} />
      <Button label="Regisztráció" onPress={handleNavigation} type="link" />
    </Layout>
  );
};

export default LoginScreen;
