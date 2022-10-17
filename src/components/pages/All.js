import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Api from "./Api";

export const All = () => {
  return <div>All</div>;
};

export const Navbar = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Api />} />
        </Routes>
      </Router>
    </>
  );
};
