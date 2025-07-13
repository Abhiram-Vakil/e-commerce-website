import React from "react";
import { Link } from "react-router";
import { login } from "../slices/authSlice";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
    
      console.log(res);
      navigate("/");
    } catch (error) {
      console.error("Login failed");
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
