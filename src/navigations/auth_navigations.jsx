import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';

export default function AuthNavigation() {
  return (
    <Router>
      <div className="flex-1 bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
