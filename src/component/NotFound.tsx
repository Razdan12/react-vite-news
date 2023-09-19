import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Not Found !</h1>
            <p className="py-6">Aplikasi gagal memuat data</p>
            <Link to={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
