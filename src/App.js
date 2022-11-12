import "./App.css";
import Ladushky from "./Ladushky";
import Blankets from "./Blankets";
import Shop from "./Shop";
import Contact from "./Contact";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return(
    <Router>
      <nav>
        <Link to="/ladushky" className="link">Ladushky Story</Link>
        <Link to="/blankets" className="link">What we use</Link>
        <Link to="/shop" className="link">Shop</Link>
        <Link to="/contacts" className="link">Our contact</Link>
      </nav>
      <Routes>
        <Route path="/ladushky" element={<Ladushky/>} />
        <Route path="/blankets" element={<Blankets/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contacts" element={<Contact/>} />
      </Routes>
    </Router>
  )
}