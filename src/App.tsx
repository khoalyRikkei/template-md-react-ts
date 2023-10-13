import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Layout from "./Layout/layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  I_ProductState,
  IProduct,
} from "./redux/slice/ProductSlice";
import { productListAsync } from "./services/api";
import { AppDispatch } from "./redux/store/configureStore";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [index, setIndex] = useState(-1);
  const products = useSelector(
    (state: { products: I_ProductState }) => state.products.data
  );

  const handleAdd = () => {
    // dispatch(addNewProduct("Anh Quyet"));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };

  const handleEdit = (value: string, i: number) => {
    setIndex(i);
  };

 
useEffect(()=> {

  dispatch(productListAsync())
}, [])
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button>Submit</button>
      </form>
      <button onClick={handleAdd}>Add product</button>
      {/* {products.map((product, i) => (
        <p>
          {product.name}{" "}
          <button onClick={() => handleEdit(product.name, i)}>Edit</button>
        </p>
      ))} */}
      <Layout>
        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
