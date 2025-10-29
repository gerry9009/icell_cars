import { Colors, FontSize, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing[16],
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: FontSize.lg,
    color: Colors.textPrimary,
    marginBottom: Spacing[20],
  },
  info: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    marginBottom: Spacing[40],
  },
});

export default styles;
