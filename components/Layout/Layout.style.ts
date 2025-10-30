import { Colors, FontSize, Shadows, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing[20],
    paddingVertical: Spacing[16],
    backgroundColor: Colors.background,
    zIndex: Spacing[16],
  },
  headerShadow: {
    height: Spacing[4],
    backgroundColor: Colors.border,
    ...Shadows.bottom,
    zIndex: Spacing[2],
  },
  leftSection: {
    width: 50,
    alignItems: "flex-start",
  },
  rightSection: {
    width: 50,
  },
  centerSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: FontSize.lg,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing[20],
  },
});
