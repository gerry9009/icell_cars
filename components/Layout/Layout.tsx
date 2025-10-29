import { Colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Layout.style";
import { LayoutProps } from "./Layout.type";

export const Layout = ({
  headerProps,
  children,
  scrollable = false,
}: LayoutProps) => {
  const { title, onBackPress } = headerProps || {};

  const ContentWrapper = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {headerProps && (
        <>
          <View style={styles.header}>
            <View style={styles.leftSection}>
              {onBackPress && (
                <TouchableOpacity
                  onPress={onBackPress || (() => router.back())}
                >
                  <Ionicons
                    name="chevron-back"
                    size={22}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              )}
            </View>

            {title && (
              <View style={styles.centerSection}>
                <Text style={styles.headerTitle} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            )}

            <View style={styles.rightSection} />
          </View>
          <View style={styles.headerShadow} />
        </>
      )}

      <ContentWrapper
        style={styles.content}
        contentContainerStyle={scrollable && styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ContentWrapper>
    </SafeAreaView>
  );
};
