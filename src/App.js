import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.js';
import Films from './Components/Pages/Films.js';
import Cast from './Components/Pages/Cast.js';
import Follow from './Components/Pages/Follow.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films' element={<Films />} />
          <Route path='/cast' element={<Cast />} />
          <Route path='/follow' element={< Follow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
