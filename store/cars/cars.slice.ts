import type { Cars } from "@/types/cars.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCars } from "./cars.thunk";

export type CarsState = {
  cars: Cars;
  loading: boolean;
  error: string | null;
};

const initialState: CarsState = {
  cars: null,
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<Cars>) {
      state.cars = action.payload;
      state.error = null;
      state.loading = false;
    },
    clearCarsApiError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action: PayloadAction<Cars>) => {
        state.cars = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as string | undefined;
        state.error = payload ?? "Unknown error";
      });
  },
});

export const { setCars, clearCarsApiError } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
