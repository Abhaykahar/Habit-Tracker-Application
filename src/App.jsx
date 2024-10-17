// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";          // Navigation header component
import Dashboard from "./components/Dashboard";    // Dashboard component
import HabitManager from "./components/HabitManager"; // Component for managing habits
import HabitTracker from "./components/HabitTracker"; // Component for tracking habits
import { HabitsProvider } from "./context/HabitsContext"; // Habits context for global state
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';               
import NotificationPanel from "./components/NotificationPanel";
import './app.css'

function App() {
  return (
    <HabitsProvider>
      <Router>
        <Header />  {/* Navigation header */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-habits" element={<HabitManager />} />
            <Route path="/tracker" element={<HabitTracker />} /> 
            <Route path="/notification" element={<NotificationPanel />} />
            
          </Routes>
        </div>
      </Router>
    </HabitsProvider>
  );
}

export default App;
