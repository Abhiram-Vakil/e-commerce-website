import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useCart } from "../contexts/CartContext";
import axios from "axios";

const Navbar = () => {
  const { productCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const isSeller = location.pathname === "/seller";
  const isProfile = location.pathname === "/profile";

  const handleLogout = () => {
    const res = axios.get("http://localhost:5001/api/auth/logout");
    navigate("/login")
    console.log(res);
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link
          to={isHome ? "#" : "/"}
          className={`btn btn-ghost text-xl font-bold ${
            isHome || isSeller || isProfile ? " pointer-events-none" : ""
          }`}
        >
          Navas Farm |{" "}
          {isProfile ? (
            <span className="text-secondary font-semibold">Profile</span>
          ) : (
            <span className=" text-secondary font-semibold">
              {isSeller ? "Seller" : "Store"}
            </span>
          )}
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center ">
        <ul className="menu menu-horizontal px-1 flex flex-row items-center justify-center gap-2">
          <li>
            <label className="swap swap-rotate ">
              {/* this hidden checkbox controls the state */}
              <input
                onClick={toggleTheme}
                type="checkbox"
                className="theme-controller"
                value={theme}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
          {location.pathname !== "/cart" && (
            <li>
              <Link to="/cart">
                <div>
                  <div className="indicator flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {productCount}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          )}
          <li>
            <details>
              <summary>
                <div className=" btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
              </summary>
              <ul className="bg-base-300 rounded-t-none w-20 z-[60] flex flex-col items-center text-center p-5">
                <li>
                  <Link to="/profile" className="text-center">
                    View Profile
                  </Link>
                </li>
                <hr />
                {isProfile ? (
                  <>
                    <li>
                      <Link to="/" className="text-center">
                        Buy products
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link to="/seller" className="text-center">
                        Sell products
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    {isSeller ? (
                      <Link to="/" className="text-center">
                        Buy products
                      </Link>
                    ) : (
                      <Link to="/seller" className="text-center">
                        Sell products
                      </Link>
                    )}
                  </li>
                )}

                <hr />
                <li>
                  <a className="text-center" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
