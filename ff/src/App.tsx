import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Components/Landing/MatrixRain";
import GlobalFonts from "./fonts/fonts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <GlobalFonts />
    </Router>
  );
}

export default App;
