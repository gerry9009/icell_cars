import { useAppDispatch, useAppSelector } from "@/hooks";
import { CarsScreen } from "@/screens";
import { fetchCars } from "@/store/cars";
import {
  selectCars,
  selectCarsError,
  selectCarsLoading,
} from "@/store/cars/cars.selector";
import { router } from "expo-router";
import { useEffect } from "react";

export const CarsContainer = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectCars);
  const loading = useAppSelector(selectCarsLoading);
  const error = useAppSelector(selectCarsError);

  useEffect(() => {
    if (error) {
      router.replace("/error");
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return <CarsScreen cars={cars} loading={loading} error={error} />;
};

export default CarsContainer;
