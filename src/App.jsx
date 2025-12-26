import { Routes, Route, HashRouter } from "react-router-dom";
import Register from "./Register";
import Submit from "./Submit";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default App;
