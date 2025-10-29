import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    />
  );
};

export default TabsLayout;
