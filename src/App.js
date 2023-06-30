import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
