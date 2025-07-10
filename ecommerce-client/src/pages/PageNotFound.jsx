import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">404</h1>
          <p class="py-6">
            Oops! This Page Is Not Found
          </p>
          <Link to={"/"} class="btn btn-primary">Back to website</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
