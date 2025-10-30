import type { Car, Position } from "@/types/cars.type";

export type CarDetailsScreenProps = {
  car?: Car | undefined;
  positions?: Position[];
  loading?: boolean;
};
