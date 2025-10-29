import { Colors, FontSize, Shadows, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing[24],
    backgroundColor: Colors.background,
  },
  iconContainer: {
    width: Spacing[100],
    height: Spacing[100],
    borderRadius: Spacing[100] / 2,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing[24],
    ...Shadows.bottom,
  },
  iconText: {
    fontSize: Spacing[50],
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: Spacing[16],
    textAlign: "center",
  },
  description: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: Spacing[32],
    lineHeight: 24,
    paddingHorizontal: Spacing[16],
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: Spacing[12],
    padding: Spacing[16],
    alignItems: "center",
    minWidth: Spacing[200],
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: "600",
  },
});
