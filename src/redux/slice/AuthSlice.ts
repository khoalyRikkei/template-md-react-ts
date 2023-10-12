// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUserAsync } from "../../services/api";

interface UserLogin {
  email: string;
  password: string;
  [key: string]: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  user: UserLogin | null | undefined;
  loading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // trạng thái pending sẽ được chạy
      .addCase(loginUserAsync.pending, (state) => {
        // loading giao diện
        console.log("loading...auth");
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.user = action.payload;
          state.isLoggedIn = true;
        } else {
          state.user = action.payload;
          state.isLoggedIn = false;
        }

        // state.user = action
        // Xử lý dữ liệu ở đây
        // state.data = processData(action.payload);
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        // state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
