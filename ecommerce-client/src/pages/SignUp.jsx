import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router";
import { login } from "../slices/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignup = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );
      const res = await axios.get("http://localhost:5001/api/auth/me", {
        withCredentials: true,
      });
      
      dispatch(login(res.data.user));
      navigate("/");
    } catch (err) {
      console.error("Signup failed", err);
      alert("Signup failed. Try again.");
    }
  };

  const { user } = useSelector((state) => state.auth);
  if (user) return <Navigate to="/" />;
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              already have an account{" "}
              <Link to={"/login"} className="text-secondary">
                Login
              </Link>
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label text-base-content ">Username</label>
                <input
                  type="text"
                  className="input "
                  placeholder="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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

                <button className="btn btn-primary mt-4" onClick={handleSignup}>Continue</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
