import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Fitur = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl">ini adalah fitur 1</h1>
      <Link to={"/"}>
      
      <button className="btn btn-secondary">
        Home
      </button>
      </Link>
    </div>
  );
};

export default Fitur;
