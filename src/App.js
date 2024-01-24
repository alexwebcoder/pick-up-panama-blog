import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './pages/Home/BlogDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Safety from "./pages/Safety/Safety";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import ContactUs from './pages/ContactUs/ContactUs';
import FeatureStory from './pages/FeatureStory/FeatureStory';
import ScrollTop from './components/ScrollTop/ScrollTop';


function App() {
  return (
    <Router>
       <div className="App">
          <Navbar />
              <Routes>
                 <Route path='/' element={ <Home/> } />
                 <Route path='/newsfeed' element={ <Newsfeed/> } />
                 <Route path='/about' element={ <About/> } />
                 <Route path='/contact' element={ <ContactUs/> } />
                 <Route path='/is-panama-safe' element={ <BlogDetails/> } />
                 <Route path='/featured/:id' element={ <FeatureStory/> } />
                 <Route path='/*' element={ <NotFound /> } />
              </Routes>
          <Footer />
          <ScrollTop />
       </div>
    </Router>
  );
}

export default App;
