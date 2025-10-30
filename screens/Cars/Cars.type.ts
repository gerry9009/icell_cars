import { Cars } from "@/types/cars.type";

export type CarsScreenProps = {
  cars?: Cars | null;
  loading?: boolean;
  error?: string | null;
};
