import React, {Suspense} from "react";
import Navbar from "../component/Navbar";
import { useStore } from "../store/store";

const LazyLoad = React.lazy(() => import("../component/Hero"))

const Home = () => {
  const { count, increment, decrement } = useStore();

  return (
    <>
      <Navbar />
      <div className="text-5xl w-screen flex justify-center gap-4 items-center">
        {count}
        <button className="btn btn-warning" onClick={increment}>
          tambah
        </button>
        <button className="btn btn-primary" onClick={decrement}>
          kurang
        </button>
      </div>

      <Suspense fallback={<div className="w-full flex justify-center text-6xl text-red-500">Loading...</div>}>
        <LazyLoad/>
      </Suspense>


    </>
  );
};

export default Home;
