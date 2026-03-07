import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Dashboard from "../Pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" />
        <Route path="/settings" />
      </Routes>
    </Router>
  );
};

export default App;
