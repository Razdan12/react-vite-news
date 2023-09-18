import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fitur from "./pages/Fitur";

function App() {
  return (
    <>
      <div data-theme="light">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fitur" element={<Fitur />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
