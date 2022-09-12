import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
