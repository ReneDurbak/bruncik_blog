import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles.jsx';
import Mycourse from './pages/Mycourse.jsx';
import Pushups from './pages/Pushups.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SingleArticlePage from './components/SingleArticlePage.jsx';
import ScrollToTop from './scrollToTop.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import axios from "axios"
import AdminArticles from './pages/AdminArticles.jsx';
import AdminPushUps from './pages/AdminPushUps.jsx';
import AdminUpdateArticle from './pages/AdminUpdateArticle.jsx';
import AdminUpdateArticleSection from './pages/AdminUpdateArticleSection.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'
import Profile from './components/Profile.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminPrivateRoutes from './components/AdminPrivateRoutes.jsx';
import AdminHome from './pages/AdminHome.jsx';
import AdminUpdateVideo from './pages/AdminUpdateVideo.jsx';
import PageNotFound from './pages/NotFound.jsx';


function App() {




  const [ListOfArticles, setListOfArticles] = useState([])


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/articles/getAllArticles');

        const articles = response.data;
        setListOfArticles(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);

      }
    };

    fetchArticles();
  }, []);





  return (
    <>

      <Router>

        <>

          <ScrollToTop />
          <Routes>
            <Route path="/admin" element={<AdminLogin />} />

            <Route path="/admin" element={<AdminPrivateRoutes/>}>
              <Route path="/admin/home" element={<AdminHome/>}/>
              <Route path="/admin/articles" element={<AdminArticles articles={ListOfArticles} />} />
              <Route path="/admin/updateArticle/:id" element={<AdminUpdateArticle />} />
              <Route path="/admin/updateArticleSection/:id" element={<AdminUpdateArticleSection />} />
              <Route path="/admin/push-ups" element={<AdminPushUps />} />
              <Route path="/admin/updateVideo/:id" element={<AdminUpdateVideo/>}/>
            </Route>
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*Private routes*/}
            <Route path="" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles articles={ListOfArticles} />} />
              <Route path="/articles/:id" element={<SingleArticlePage />} />
              <Route path="/mycourse" element={<Mycourse />} />
              <Route path="/push-ups" element={<Pushups />} />
              <Route path="/profile" element={<Profile />} />
            </Route>


            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      </Router>
    </>
  );
}


export default App;
