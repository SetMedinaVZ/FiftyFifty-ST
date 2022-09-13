import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Landing from "./Components/Landing/MatrixRain";
import {GlobalStyle} from "./GlobalStyle";
import GlobalFonts from './fonts/fonts';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
          <GlobalStyle/>
          <GlobalFonts />
      </Router>
  );
}

export default App;
