import { apiClient } from "../apiClient";
import { GetCarsResponse } from "./getCars.type";

export const getCars = async (): Promise<GetCarsResponse> => {
  const res = await apiClient.get<GetCarsResponse>(`/develbeugro`);

  return res.data;
};
