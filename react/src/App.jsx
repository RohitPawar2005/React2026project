import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Book from "./Book";
import Trips from "./Trips";
import Deals from "./Deals";
import Checkin from "./Checkin";
import IndiGo from "./IndiGo";
import Tariff from "./Tariff";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Book />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="Checkin" element={<Checkin />} />
        <Route path="IndiGo" element={<IndiGo />} />
        <Route path="Tariff" element={<Tariff />} />
        <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
