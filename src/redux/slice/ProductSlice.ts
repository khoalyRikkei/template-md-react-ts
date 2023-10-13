import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productListAsync } from "../../services/api";

// inteface products
// interfact initialState

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  createdAt: string;
}
export interface I_ProductState {
  loading: boolean;
  data: IProduct[];
}

const initialState: I_ProductState = {
  loading: false,
  data: [],
};

const productSlice = createSlice({
  name: "products", // tên lưu trữ trong store truy vấn từ useSelector --> gọi tên nó
  initialState: initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<IProduct>) => {
      state.data.push(action.payload);
    },
    updateProduct: () => {},
    deleteProduct: () => {},
    getProduct: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(productListAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(productListAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(productListAsync.rejected, () => {});
  },
});

export const { addNewProduct, updateProduct, deleteProduct, getProduct } =
  productSlice.actions; // lấy action ra cho dispatch sử dụng
export default productSlice.reducer; // cung cấp reducer cho configStore
