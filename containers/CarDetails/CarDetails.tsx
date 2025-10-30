import { useAppSelector } from "@/hooks";
import {
  selectCarByLicense,
  selectCarsError,
  selectCarsLoading,
} from "@/store/cars/cars.selector";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo } from "react";
import CarDetailsScreen from "../../screens/CarDetails/CarDetails";

export const CarDetailsContainer = () => {
  const params = useLocalSearchParams();
  const licenseNo = params.id as string | undefined;

  const loading = useAppSelector(selectCarsLoading);
  const error = useAppSelector(selectCarsError);

  useEffect(() => {
    if (error) {
      router.replace("/error");
    }
  }, [error]);

  const car = useAppSelector(selectCarByLicense(licenseNo ?? ""));

  const positions = useMemo(() => {
    if (!car?.positions) return [];
    return [...car.positions].sort((a, b) =>
      b.t > a.t ? 1 : b.t < a.t ? -1 : 0
    );
  }, [car]);

  return <CarDetailsScreen car={car} positions={positions} loading={loading} />;
};

export default CarDetailsContainer;
