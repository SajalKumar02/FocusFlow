import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

// Layout
import Layout from '../layout/layout.jsx';
// Pages
import { MainContent } from '../feature/task/index.js';
import TaskDetails from '../pages/TaskDetails.jsx';
import Setting from '../pages/Setting.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<MainContent />} />
          <Route index path="/lists/:listId" element={<MainContent />} />
          <Route path="/tasks/:taskId" element={<TaskDetails />} />
        </Route>
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default App;
