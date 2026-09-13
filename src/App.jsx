import { Home } from "lucide-react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
    </Routes>
  );
};

export default App;
