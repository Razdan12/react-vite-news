import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";

const Fitur = () => {
  const {count} = useStore()
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl">ini adalah fitur 1</h1>
      <Link to={"/"}>
      <div className="text-6xl w-screen flex justify-center">
        {count}
      </div>
      <button className="btn btn-secondary">
        Home
      </button>
      </Link>
    </div>
  );
};

export default Fitur;
