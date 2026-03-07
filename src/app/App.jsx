import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Dashboard from "../Pages/Dashboard";
import Settings from "../Pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
