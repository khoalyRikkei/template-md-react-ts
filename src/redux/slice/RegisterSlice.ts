// src/redux/slices/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { regiterUserAsync } from "../../services/api";

export interface RegisterState {
  loading: boolean;
  status: "success" | "failure";
  message: string;
}

const initialState: RegisterState = {
  loading: false,
  status: "failure",
  message: "",
};

const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // trạng thái pending sẽ được chạy
      .addCase(regiterUserAsync.pending, (state) => {
        state.loading = true;
        console.log(111);
      })
      .addCase(regiterUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log(111, action);

        // state.user = action
        // Xử lý dữ liệu ở đây
        // state.data = processData(action.payload);
      })
      .addCase(regiterUserAsync.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export const {} = registerSlice.actions;
export default registerSlice.reducer;
