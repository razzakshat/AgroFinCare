import React from 'react';
import './index.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import FarmerStories from './pages/FarmerStories';
import OurServices from './pages/OurServices';
import Home from './pages/Home';


function App() {
  return (
    <div className="bg-white">
      <div id="top"></div> 
      
      <Navbar />
      <Home />
      <OurServices />
      <FarmerStories />
      <Footer />
     

    </div>
  );
}

export default App; // Ensure App component is exported