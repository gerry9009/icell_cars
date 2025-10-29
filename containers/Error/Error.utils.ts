import { AppDispatch, clearError } from "@/store";
import { User } from "@/types";
import { router } from "expo-router";

export const handleBackNavigation = ({
  user,
  dispatch,
}: {
  user: User;
  dispatch: AppDispatch;
}) => {
  dispatch(clearError());
  if (user) {
    router.replace("/(tabs)/home");
  } else {
    router.replace("/auth/login");
  }
};
