import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import FullArticle from './pages/fullArticle/FullArticle';
import Write from './pages/writearticle/Write';
import PrivateRoute from './PrivateRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<FullArticle />} />
        <Route path="/write" element={<PrivateRoute element={Write} />} /> 
      </Routes>
    </Router>
  );
}

export default App;