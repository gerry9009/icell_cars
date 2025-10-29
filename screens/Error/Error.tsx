import { Button, Layout } from "@/components";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Error.style";
import type { ErrorScreenProps } from "./Error.type";

export const ErrorScreen = ({ handleBack }: ErrorScreenProps) => {
  return (
    <Layout headerProps={{ title: "Hiba" }}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>⚠️</Text>
        </View>

        <Text style={styles.title}>Szerverhiba</Text>

        <Text style={styles.description}>
          Váratlan hiba történt a szerverrel való kommunikáció során. Kérjük,
          próbáld újra.
        </Text>

        <Button label="Vissza" onPress={handleBack} />
      </View>
    </Layout>
  );
};

export default ErrorScreen;
