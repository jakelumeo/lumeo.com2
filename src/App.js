
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './pages/Navbar';
import Features from './pages/Features';
import Homepage from './pages/Homepage';
import HowItWorks from './pages/Howitworks';
import Contact from './pages/Contact';
function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  return (

    <div className="App">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
     <Homepage isDarkMode={isDarkMode}/>
      <Features isDarkMode={isDarkMode}/>
      <HowItWorks isDarkMode={isDarkMode} setIsDarkMode = {setIsDarkMode} />
      <Contact isDarkMode = {isDarkMode} />

    </div>
  );
}

export default App;
