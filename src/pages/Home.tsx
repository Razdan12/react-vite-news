import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import { useStore } from "../store/store";

const Home = () => {

  const {count, increment, decrement} = useStore()

  return (
    <>
      <Navbar />
      <div className="text-5xl w-screen flex justify-center gap-4 items-center">
          {count}
          <button className="btn btn-warning" onClick={increment}>tambah</button>
          <button className="btn btn-primary" onClick={decrement}>kurang</button>
        
      </div>
      <Hero />
    </>
  );
};

export default Home;
