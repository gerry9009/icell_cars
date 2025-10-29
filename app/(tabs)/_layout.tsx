import { Colors, Spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "fade",
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Kezdőlap",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={Spacing[24]} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cars"
        options={{
          title: "Autók",
          tabBarIcon: ({ color }) => (
            <Ionicons name="car-sport" size={Spacing[24]} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
