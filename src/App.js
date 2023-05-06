import React from "react";
import "./App.css";
import Home from "./Components.js/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Components.js/Add";
import Edit from "./Components.js/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
