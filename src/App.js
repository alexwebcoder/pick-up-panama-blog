import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
 
  return (
    <Router>
       <div className="App">
        {/* navbar shows on all pages (routes) because it is not inside the Routes component */}
          <Navbar /> 
          <div className="content">
              <Routes>
                 <Route path='/' element={ <Home/> } />
              </Routes>
              <Routes>
                 <Route path='/create' element={ <Create/> } />
              </Routes>
              <Routes>
                 <Route path='/blogs/:id' element={ <BlogDetails/> } />
              </Routes>
          </div>
       </div>
    </Router>
  );
}

export default App;
