import { Button, Layout } from "@/components";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Home.style";
import { HomeScreenProps } from "./Home.type";

export const HomeScreen = ({
  loading,
  handleLogout,
  user,
}: HomeScreenProps) => {
  return (
    <Layout headerProps={{ title: "Főoldal" }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {user && user.email ? `Üdv, ${user.email}` : "Üdvözlünk"}
        </Text>
        <Text style={styles.info}>Ez az iCell autó követő alkalmazása</Text>
        <Button
          label="Kijelentkezés"
          onPress={handleLogout}
          loading={loading}
        />
      </View>
    </Layout>
  );
};
