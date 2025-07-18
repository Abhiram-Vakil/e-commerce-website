import React, { useEffect } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setLoading } from "./slices/authSlice";
import Loading from "./components/Loading";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/auth/me", {
          withCredentials: true,
        });
        dispatch(login(res.data.user));
        dispatch(setLoading(false));
      } catch (err) {
        dispatch(logout());
        dispatch(setLoading(false));
        console.log("User not logged in");
      }
    };
    fetchUser();
  }, []);
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <Loading/>;

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
