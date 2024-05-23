import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Start from "./components/Start";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sort from "./components/Sort";
import AddFlight from "./components/AddFlight";
import DeleteFlight from "./components/DeleteFlight";

function App() {
  const [count, setCount] = useState(0);
  const list = [
    { _id: 123, name: "ELAL", ppl: 450 },
    { _id: 127, name: "ELAL", ppl: 459 },
    { _id: 124, name: "SunDor", ppl: 435 },
    { _id: 125, name: "Hizbala", ppl: 1 },
    { _id: 126, name: "Iran", ppl: 196 },
  ];

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="main" element={<HomePage list={list} />} />
      <Route path="/controlpanel/sort" element={<Sort list={list} />} />
      <Route
        path="/controlpanel/addFlight"
        element={<AddFlight list={list} />}
      />
      <Route
        path="/controlepanel/delete"
        element={<DeleteFlight list={list} />}
      />
    </Routes>
  );
}

export default App;
