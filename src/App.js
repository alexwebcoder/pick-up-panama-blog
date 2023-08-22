// import { useState } from "react";
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/Create/Create';
import BlogDetails from './pages/Home/BlogDetails';
import NotFound from './pages/NotFound/NotFound';
// import SearchBar from './components/SearchBar/SearchBar';
// import SearchResults from './components/SearchResults/SearchResult';
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Newsfeed from "./pages/Newsfeed/Newsfeed";
import ContactUs from './pages/ContactUsForm/ContactUs';

function App() {
//   const [results, setResults] = useState([]);
  return (
    <Router>
       <div className="App">
          <Navbar />
              <Routes>
                 <Route path='/' element={ <Home/> } />
                 <Route path='/create' element={ <Create/> } />
                 <Route path='/newsfeed' element={ <Newsfeed/> } />
                 <Route path='/about' element={ <About/> } />
                 <Route path='/contact' element={ <ContactUs/> } />
                 <Route path='/blogs/:id' element={ <BlogDetails/> } />
                 <Route path='/*' element={ <NotFound /> } />
              </Routes>
          <Footer />
       </div>
    </Router>
  );
}

export default App;
