import { Colors, FontSize, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: Spacing[12],
  },
  header: {
    fontSize: FontSize.lg,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: Spacing[8],
  },
  meta: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
    marginBottom: Spacing[12],
  },
  itemContainer: {
    paddingVertical: Spacing[8],
    paddingHorizontal: Spacing[12],
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.white,
  },
  itemTime: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing[4],
  },
  itemText: {
    fontSize: FontSize.md,
    color: Colors.textPrimary,
  },
  empty: {
    padding: Spacing[12],
  },
});

export default styles;
