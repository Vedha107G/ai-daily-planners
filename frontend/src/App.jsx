import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch tasks from API
    console.log('Fetching tasks...');
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
          <Route path="/create-task" element={<TaskForm setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
