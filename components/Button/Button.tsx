import { Colors } from "@/theme";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";
import { ButtonProps } from "./Button.type";

export const Button = ({
  label,
  onPress,
  loading = false,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  if (type === "link") {
    return (
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.linkTextBold}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
