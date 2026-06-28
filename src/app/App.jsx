import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

// Layout
import Layout from '@/layout/Layout';
// Pages
import { MainContent } from '@/feature/task';

import TaskDetails from '@/pages/TaskDetails';
import Settings from '@/pages/Settings.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<MainContent />} />
          <Route index path="/lists/:listId" element={<MainContent />} />
          <Route path="/tasks/:taskId" element={<TaskDetails />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
