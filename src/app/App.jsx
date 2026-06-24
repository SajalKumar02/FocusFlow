import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

// Pages
import Dashboard from '../pages/Dashboard.jsx';
import TaskDetails from '../pages/TaskDetails.jsx';
import Setting from '../pages/Setting.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route index path="/lists/:listId" element={<Dashboard />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default App;
