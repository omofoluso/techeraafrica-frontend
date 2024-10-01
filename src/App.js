import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Interest from './pages/Interest';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interest" element={<Interest/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
