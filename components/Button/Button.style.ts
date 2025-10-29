import { Colors, FontSize, Shadows, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: Spacing[8],
    padding: Spacing[16],
    alignItems: "center",
    marginTop: Spacing[8],
    width: "100%",
    ...Shadows.bottom,
  },
  buttonDisabled: {
    backgroundColor: Colors.buttonDisabled,
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontWeight: "600",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing[24],
  },
  linkText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  linkTextBold: {
    fontSize: FontSize.sm,
    color: Colors.primary,
    fontWeight: "600",
  },
});
