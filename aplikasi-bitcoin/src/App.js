// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BitcoinkeRupiah from "./pages/bitcoin-rupiah-page";
import HargaPage from "./pages/harga-page";
import RupiahkeBitcoin from "./pages/rupiah-bitcoin-page";
import { flushSync } from "react-dom";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar.Brand as={Link} to="/">
        Aplikasi Bitcoin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Info Harga
          </Nav.Link>
          <Nav.Link as={Link} to="/bitcoin-ke-rupiah">
            Bitcoin ke Rupiah
          </Nav.Link>
          <Nav.Link as={Link} to="/rupiah-ke-bitcoin">
            Rupiah ke Bitcoin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HargaPage />} />
          <Route path="/bitcoin-ke-rupiah" element={<BitcoinkeRupiah />} />
          <Route path="/rupiah-ke-bitcoin" element={<RupiahkeBitcoin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
