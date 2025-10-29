import { useAppDispatch, useAppSelector } from "@/hooks";
import { HomeScreen } from "@/screens";
import { logout, selectAuthLoading, selectAuthUser } from "@/store";
import { router } from "expo-router";
import { useCallback } from "react";

export const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectAuthLoading);
  const user = useAppSelector(selectAuthUser);

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
      router.replace("/auth/login");
    } catch (err) {
      router.replace("/error");
    }
  }, [dispatch]);

  return (
    <HomeScreen loading={loading} handleLogout={handleLogout} user={user} />
  );
};

export default HomeContainer;
