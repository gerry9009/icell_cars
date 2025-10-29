import React from "react";
import { Text, View } from "react-native";

export const ErrorScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Something went wrong (Error screen)</Text>
    </View>
  );
};

export default ErrorScreen;
