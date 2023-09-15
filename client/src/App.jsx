import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles.jsx';
import Mycourse from './pages/Mycourse.jsx';
import Pushups from './pages/Pushups.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SingleArticlePage from './components/SingleArticlePage.jsx';
import ScrollToTop from './scrollToTop.jsx';


function App() {

  

  const ListofArticles = [
    {
      id: 1,
      title: "How to start meditation (Beginners Guide)",
      label: "Mind",
    },
    {
      id: 2,
      title: "The Wim Hof Method and Its Surprising Benefits",
      label: "WMH",
    },
    {
      id: 3,
      title: "Vegan staple foods (must eat)",
      label: "Go Vegan",
    },
    {
      id: 4,
      title: "TOP 3 books about Stoicism (Ryan Holiday choice)",
      label: "Inspiration",
    },
  ]


  return (
    <Router>
            <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<SingleArticlePage articles={ListofArticles}/>}/>
        <Route path="/mycourse" element={<Mycourse />} />
        <Route path="/push-ups" element={<Pushups/>} />
      </Routes>
    </Router>
  );
}


export default App;
