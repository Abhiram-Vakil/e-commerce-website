import React from "react";
import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Seller from "./pages/Seller";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          {/*private routes */}\
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/seller" element={<Seller />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
