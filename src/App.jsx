import Intro from './components/Intro.jsx';
import Header from './components/Header.jsx';
import Topbar from './components/TopBar.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './components/Portfolio.jsx';
import { useState } from 'react';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import "./App.css"




function App() {
  const [showSnow, setShowSnow] = useState(false);

  const toggleSnow = () => {
    setShowSnow(!showSnow);
  }

  return (
    <>
    <div className="switcher-container">
       <label className="switch">  
        <input type="checkbox" onChange={toggleSnow} checked={showSnow} />
        <span className="slider round"></span>
      </label>
      🎄🎅 Switch for Xmas Edition🎄🎅
      </div>
     

      <Header  />
      <Topbar />
      <Intro   />
      <Experience  />
      <Portfolio  />
      <Contact  />
      <Footer />
      {showSnow && (
        <div className="snowfall-container">
          <Snowfall snowflakeCount={100} />
        </div>
        )}

    </>
  )
}

export default App
