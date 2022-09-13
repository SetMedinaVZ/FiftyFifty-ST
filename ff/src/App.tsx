import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./components/Login";

import {GlobalStyle} from "./GlobalStyle";
import GlobalFonts from './fonts/fonts';
import LandingPage from "./components/LandingPage";
import UserManager from "./pages/UserManager";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/useradmin" element={ <UserManager/>}/>
          </Routes>
          <GlobalStyle/>
          <GlobalFonts />
      </Router>
  );
}

export default App;