import { Colors, FontSize, Spacing } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    padding: Spacing[20],
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    padding: Spacing[12],
  },
  emptyText: {
    color: Colors.textSecondary,
    fontSize: FontSize.md,
  },
  activity: {
    marginBottom: Spacing[8],
  },
  listContent: {
    paddingBottom: Spacing[20],
  },
});

export default styles;
