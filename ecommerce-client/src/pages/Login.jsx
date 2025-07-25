import React from "react";
import { Link, Navigate,useNavigate } from "react-router";
import { login } from "../slices/authSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const dispatch=useDispatch()
  const navigate = useNavigate();
  if (user) return <Navigate to="/" />;

  
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const userRes = await axios.get("http://localhost:5001/api/auth/me", {
        withCredentials: true,
      });
      dispatch(login(userRes.data.user));
      console.log(res);
      navigate("/");
    } catch (error) {
      console.error("Login failed",error);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">
              Don't have an account{" "}
              <Link to={"/signup"} className="text-secondary">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label text-base-content">Email</label>
                <input
                  type="email"
                  className="input "
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label text-base-content">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button onClick={handleLogin} className="btn btn-primary mt-4">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
