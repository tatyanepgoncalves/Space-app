import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Destination } from "./pages/Destination";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/destination" element={Destination} />
    </Routes>
  );
}
