import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./DynamicForm.style";
import { DynamicFormProps, FieldConfig } from "./DynamicForm.type";

export const DynamicForm = ({
  config,
  loading = false,
  onChange,
}: DynamicFormProps) => {
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    const next = { ...formValues, [name]: value };
    setFormValues(next);
    if (onChange) onChange(next);
  };

  const renderField = (field: FieldConfig) => {
    const { name, label, placeholder, type = "text" } = field;
    const value = formValues[name] ?? "";

    const fieldError = field.error;

    return (
      <View key={name} style={styles.field}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <TextInput
          value={value}
          placeholder={placeholder}
          style={styles.input}
          onChangeText={(text) => handleChange(name, text)}
          secureTextEntry={type === "password"}
          editable={!loading}
          // Prevent auto-capitalization for email/password and disable autocorrect
          autoCapitalize={
            type === "email" || type === "password" ? "none" : "sentences"
          }
          autoCorrect={type === "email" || type === "password" ? false : true}
          keyboardType={
            type === "email"
              ? "email-address"
              : type === "number"
              ? "numeric"
              : "default"
          }
          // Improve autofill on iOS/Android where available
          textContentType={
            type === "email"
              ? "emailAddress"
              : type === "password"
              ? "password"
              : undefined
          }
        />
        {fieldError ? <Text style={styles.errorText}>{fieldError}</Text> : null}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {config.map(renderField)}
    </KeyboardAvoidingView>
  );
};
