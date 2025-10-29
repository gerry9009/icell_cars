import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, register } from "./auth.thunk";

export type AuthState = {
  user: User;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as
          | { isServerError?: boolean }
          | undefined;
        if (payload?.isServerError) state.error = "Server error";
        else state.error = null;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as
          | { isServerError?: boolean }
          | undefined;
        if (payload?.isServerError) state.error = "Server error";
        else state.error = null;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        const payload = action.payload as
          | { isServerError?: boolean }
          | undefined;
        if (payload?.isServerError) state.error = "Server error";
        else state.error = null;
      });
  },
});

export const { setUser, clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
