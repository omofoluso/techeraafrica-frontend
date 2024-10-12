import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Interest from './pages/Interest';
import DevopsDetail from './pages/DevopsDetail';
import CyberSecurity from './pages/CyberSecurity';
import VirtualReality from './pages/VirtualReality';
import CloudComputing from './pages/CloudComputing';
import DataAnalysis from './pages/DataAnalysis';
import FullStack from './pages/FullStack';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <Navbar/>
    {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interest" element={<Interest/>} />
          <Route path='/interest/devops/' element = {<DevopsDetail/>} />
          <Route path='/interest/cyber-security' element={<CyberSecurity/>} />
          <Route path='/interest/virtual-reality' element={<VirtualReality/>} />
          <Route path='/interest/cloud-computing' element = {<CloudComputing/>} />
          <Route path='/interest/data-analysis' element={<DataAnalysis/>} />
          <Route path='/interest/full-stack' element={<FullStack/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
