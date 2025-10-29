import { FIREBASE_AUTH } from "@/services/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { normalizeAuthError } from "./auth.utils";

export const login = createAsyncThunk<
  { uid: string; email: string | null },
  { email: string; password: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const cred = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    return { uid: cred.user.uid, email: cred.user.email } as {
      uid: string;
      email: string | null;
    };
  } catch (err: unknown) {
    const normalized = normalizeAuthError(err);
    return thunkAPI.rejectWithValue({
      isServerError: normalized.isServerError,
    });
  }
});

export const register = createAsyncThunk<
  { uid: string; email: string | null },
  { email: string; password: string }
>("auth/register", async ({ email, password }, thunkAPI) => {
  try {
    const cred = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    return { uid: cred.user.uid, email: cred.user.email } as {
      uid: string;
      email: string | null;
    };
  } catch (err: unknown) {
    const normalized = normalizeAuthError(err);
    return thunkAPI.rejectWithValue({
      isServerError: normalized.isServerError,
    });
  }
});

export const logout = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await firebaseSignOut(FIREBASE_AUTH);
      return;
    } catch (err: unknown) {
      const normalized = normalizeAuthError(err);
      return thunkAPI.rejectWithValue({
        isServerError: normalized.isServerError,
      });
    }
  }
);
