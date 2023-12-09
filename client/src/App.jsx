import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Articles from './pages/Articles.jsx';
import Mycourse from './pages/Mycourse.jsx';
import Pushups from './pages/Pushups.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SingleArticlePage from './components/SingleArticlePage.jsx';
import ScrollToTop from './scrollToTop.jsx';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminLogin from './pages/AdminLogin.jsx';



function App() {



  const [ListOfArticles,setListOfArticles] = useState([])


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:4000/admin/articles/getAllArticles');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const articles = await response.json();
        setListOfArticles(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);

      }
    };

    fetchArticles();
  }, []);

  

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
    <>

    <Router>
         <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles  articles={ListOfArticles}/> } />
        <Route path="/articles/:id" element={<SingleArticlePage articles={ListOfArticles}/>}/>
        <Route path="/mycourse" element={<Mycourse />} />
        <Route path="/push-ups" element={<Pushups/>} />
        <Route path="/admin" element={<AdminLogin articles={ListOfArticles}/>} />
      </Routes>  
       <Footer/>
    </Router>
    </>
  );
}


export default App;
