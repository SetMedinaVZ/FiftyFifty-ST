import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./components/Login";
import {GlobalStyle} from "./GlobalStyle";
import GlobalFonts from './fonts/fonts';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login/>}/>
          </Routes>
          <GlobalStyle/>
          <GlobalFonts />
      </Router>
  );
}

export default App;
