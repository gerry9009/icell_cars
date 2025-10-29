import { Colors, FontSize, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
  },
  field: {
    marginBottom: Spacing[16],
  },
  label: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    marginBottom: Spacing[4],
    fontWeight: "600",
  },
  input: {
    width: "100%",
    minHeight: 44,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing[16],
    paddingVertical: Spacing[8],
    fontSize: FontSize.md,
    color: Colors.textPrimary,
    backgroundColor: Colors.white,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  errorText: {
    marginTop: Spacing[4],
    color: Colors.danger,
    fontSize: FontSize.sm,
  },
});
