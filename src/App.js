import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import PatientHistoryPage from './pages/PatientHistoryPage';
import UploadAndDetectPage from './pages/UploadAndDetectPage';
import ResultsPage from './pages/ResultsPage';
import './App.css'; 
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/history" element={<PatientHistoryPage />} />
            <Route path="/detect" element={<UploadAndDetectPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;