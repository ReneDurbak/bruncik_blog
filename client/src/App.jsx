import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Articles from './pages/Articles.jsx';
import Mycourse from './pages/Mycourse.jsx';
import Pushups from './pages/Pushups.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/mycourse" element={<Mycourse />} />
        <Route path="/push-ups" element={<Pushups/>} />
      </Routes>
    </Router>
  );
}


export default App;
