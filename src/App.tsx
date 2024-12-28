import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import ResearchHighlights from './components/home/ResearchHighlights';
import PartnersSlider from './components/home/PartnersSlider';
import InnovationHub from './components/home/InnovationHub';
import { Programs } from './pages/Programs';
import CampusLife from './pages/CampusLife';
import Admission from './pages/Admission';
import Postuler from './pages/Postuler';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResearchHighlights />
                <PartnersSlider />
                <InnovationHub />
              </div>
            </>
          } />
          <Route path="/programs" element={<Programs />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/postuler" element={<Postuler />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;