import { getCars } from "@/services/cars";
import type { Cars } from "@/types/cars.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk<Cars, void>(
  "cars/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await getCars();

      if (Array.isArray(res)) {
        return res as Cars;
      }

      return null;
    } catch (err: unknown) {
      return thunkAPI.rejectWithValue(
        (err as Error)?.message ?? "Unknown error"
      );
    }
  }
);

export default fetchCars;
