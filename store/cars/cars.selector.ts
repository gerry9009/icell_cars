import type { RootState } from "@/store";

export const selectCars = (state: RootState) => state.cars.cars;
export const selectCarsLoading = (state: RootState) => state.cars.loading;
export const selectCarsError = (state: RootState) => state.cars.error;

export const selectCarByLicense = (license_no: string) => (state: RootState) =>
  state.cars.cars
    ? state.cars.cars.find((car) => car.license_no === license_no)
    : undefined;
