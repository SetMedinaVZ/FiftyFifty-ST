import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing/MatrixRain";
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
