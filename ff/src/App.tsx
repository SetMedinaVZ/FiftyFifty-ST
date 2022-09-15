import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./components/Login";
import Nivel0 from "./components/Nivel0/Nivel0";

import {GlobalStyle} from "./GlobalStyle";
import GlobalFonts from "./fonts/fonts";
import LandingPage from "./components/LandingPage";
import UserManager from "./pages/UserManager";
import Nivel1A from "./components/Nivel1A";
import Nivel1B from "./components/Nivel1B";
import AVideosManager from "./pages/AVideosManager";
import BVideosManager from "./pages/BVideosManager";
import Nivel2A from "./components/Nivel2A";
import Nivel3A from "./components/Nivel3A";
import Nivel2B from "./components/Nivel2B";
import Nivel3B from "./components/Nivel3B";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/level0" element={<Nivel0/>}/>
                <Route path="/level1b" element={<Nivel1B/>}/>
                <Route path="/level1a" element={<Nivel1A/>}/>
                <Route path="/level2a" element={<Nivel2A/>}/>
                <Route path="/level2b" element={<Nivel2B/>}/>
                <Route path="/level3a" element={<Nivel3A/>}/>
                <Route path="/level3b" element={<Nivel3B/>}/>
                <Route path="/useradmin" element={<UserManager/>}/>
                <Route path="/avideoadmin" element={<AVideosManager/>}/>
                <Route path="/bvideoadmin" element={<BVideosManager/>}/>
            </Routes>
            <GlobalStyle/>
            <GlobalFonts/>
        </Router>
    );
}

export default App;