import { Colors, FontSize, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing[16],
    paddingHorizontal: Spacing[20],
    backgroundColor: Colors.white,
    borderBottomWidth: Spacing[1],
    borderBottomColor: Colors.border,
  },
  left: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    fontWeight: "600",
    marginBottom: Spacing[4],
  },
  sub: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  right: {
    width: Spacing[32],
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
