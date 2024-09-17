import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";

function Labs() {
  return (
    <div>
      <Routes>
        <Route path="/lab1/*" element={<Lab1 />} />
        <Route path="/lab2/*" element={<Lab2 />} />
        <Route path="/lab3/*" element={<Lab3 />} />
        <Route path="/lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
  );
}

export default Labs;
