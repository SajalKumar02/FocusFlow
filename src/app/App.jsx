import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Layout from "../Layout/layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/sign-in" />
      </Routes>
    </Router>
  );
};

export default App;
