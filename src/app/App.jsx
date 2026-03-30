import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import Settings from "../Pages/Settings/Settings.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" />
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
