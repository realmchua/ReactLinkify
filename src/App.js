import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Roadmap from './pages/Roadmap';
import Terms from './pages/Terms';
import About from './pages/About';

const Admin = () => <h1>Admin</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;