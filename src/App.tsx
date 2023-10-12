import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Layout from "./Layout/layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";


function App() {
  // axios.post("https://6270afdbe1c7aec428f6ada4.mockapi.io/users", {
  //   name: "Nguyễn Văn A",
  //   email: "test@gmail.com",
  // });
  return (
    <Fragment>
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
