import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Dashboard from '../pages/app/Dashboard';
import Campaigns from '../pages/app/Campaigns';
import Chat from '../pages/app/Chat';
import Leads from '../pages/app/Leads';
import Archive from '../pages/app/Archive';
import SupportCenter from '../pages/app/Support_Center';

export default function AppNavigation() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideNav />
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/supportCenter" element={<SupportCenter />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
