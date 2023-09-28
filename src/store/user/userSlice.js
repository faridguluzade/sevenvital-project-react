import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import {
  getCurrentUser,
  signup as signupApi,
  login as loginApi,
  logout as logoutApi,
} from "../../services/apiAuth";

const initialState = {
  user: {},
  error: "",
  loginLoading: false,
  signupLoading: false,
  logoutLoading: false,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  const data = await getCurrentUser();

  return data;
});

export const signup = createAsyncThunk("user/signup", async (userData) => {
  const data = await signupApi(userData);
  return data.user;
});

export const login = createAsyncThunk("user/login", async (userData) => {
  const data = await loginApi(userData);
  return data.user;
});

export const logout = createAsyncThunk("user/logout", async () => {
  await logoutApi();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 1. Signup
      .addCase(signup.pending, (state) => {
        state.signupLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.user = action.payload;
        toast.success(
          "Account successfuly created! Please verify the new account from the user's email address."
        );
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupLoading = false;
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // 2. Login
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.user = action.payload;
        toast.success(`Welcome back ${action.payload.user_metadata.fullName}!`);
      })
      .addCase(login.rejected, (state, action) => {
        state.loginLoading = false;
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // 2. logout
      .addCase(logout.pending, (state) => {
        state.logoutLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutLoading = false;
        state.user = null;
        toast.success(`Logged out successfully!`);
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutLoading = false;
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // 3. Get the user from supabase
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export default userSlice.reducer;
