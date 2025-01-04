import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Batches from './pages/Batches';
import Collaborations from './pages/Collaborations';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements'; // Import Achievements page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
