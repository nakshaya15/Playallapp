import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SchoolsPage from './components/SchoolsPage';
import AcademyPage from './components/AcademyPage';
//import MembershipPage from './components/MembershipPage';
import MembershipPage from './components/Membership';
import EventsPage from './components/EventsPage';
import TechSolutionsPage from './components/TechSolutionsPage';
import ConsultancyPage from './components/ConsultancyPage';
import BadmintonPage from './components/BadmintonPage';
import FutsalPage from './components/FutsalPage';
import BoxCricketPage from './components/BoxCricketPage';
import PickleballPage from './components/PickleballPage';
import TableTennisPage from './components/TableTennisPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/techsolutions" element={<TechSolutionsPage />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
          <Route path="/badminton" element={<BadmintonPage />} />
          <Route path="/futsal" element={<FutsalPage />} />
          <Route path="/box-cricket" element={<BoxCricketPage />} />
          <Route path="/pickleball" element={<PickleballPage />} />
          <Route path="/table-tennis" element={<TableTennisPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;