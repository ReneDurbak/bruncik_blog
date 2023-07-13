import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles.jsx';
import Mycourse from './pages/Mycourse.jsx';
import Pushups from './pages/Pushups.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ScrollToTop from './scrollToTop.jsx';


function App() {
  return (
    <Router>
            <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/mycourse" element={<Mycourse />} />
        <Route path="/push-ups" element={<Pushups/>} />
      </Routes>
    </Router>
  );
}


export default App;
