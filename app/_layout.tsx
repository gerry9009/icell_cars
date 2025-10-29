import { AppProviders } from "@/providers";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>
  );
};

export default RootLayout;
