import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { _GET_PRODUCTS, _GET_USERS } from "./common";

export const productListAsync = createAsyncThunk(
  "products/getProductList",
  async () => {
    try {
      // Lấy tất cả sản phẩm
      const response = await axios.get(_GET_PRODUCTS); //link product
      return response.data;
    } catch (error) {
      return [];
    }
  }
);






export const loginUserAsync = createAsyncThunk(
  "login/loginUser",
  async (credentials: { email: string; password: string }, thunkAPI: any) => {
    try {
      const response: AxiosResponse = await axios.get(_GET_USERS);
      //   Do chưa xây dựng được backend nên làm thủ công
      if (response.data.length > 0) {
        const user = response.data.find(
          (account: any) =>
            account.email === credentials.email &&
            account.password === credentials.password
        );
        // any thay bằng entity của user
        if (!user) {
          return;
        }
        delete user.password;
        return user;
      }
      return;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
);

export const regiterUserAsync = createAsyncThunk(
  "register/registerUser",
  async (
    credentials: { email: string; password: string; name: string },
    thunkAPI: any
  ) => {
    try {
      const response: AxiosResponse = await axios.get(_GET_USERS);

      //   Do chưa xây dựng được backend nên làm thủ công
      if (response.data.length > 0) {
        const user = response.data.find(
          (account: any) => account.email === credentials.email
        );
        // any thay bằng entity của user
        if (user) {
          return {
            status: "failure",
            message: "Email trùng lặp",
            data: null,
          };
        }

        const res: AxiosResponse = await axios.post(_GET_USERS, credentials);

        return {
          status: "success",
          message: "Đăng ký thành công",
          data: res.data.id,
        };
      }
      return;
    } catch (error) {
      throw error;
      return {
        status: "failure",
        message: "Đăng ký thất bại",
        data: null,
      };
    }
  }
);
