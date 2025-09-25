import bigLogo from './assets/bigLogo.png';
import smallLogo from './assets/smallLogo.png';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Join from './pages/Join';
import { useRef } from 'react';

function App() {
  const blankPageRef = useRef(null);

  const scrollToBlank = () => {
    blankPageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <img src={bigLogo} alt="Threads of Hope" className="topleft-image" />

      <Link to="/" className="home-button" aria-label='Go to homepage'></Link>

      <h1 className="hero-title">
        Crocheting comfort for<br />
        hospitals &amp; homes.
        </h1>
      <p className="hero-subtitle">
        We are a student ran organization at UTD. We make and donate various crochet items<br />
        for hospitals, nursing homes, and many more! Join a workshop<br />
        or donate to support our cause!
      </p>

      <div className='hero-button-container'>
        <Link to="/join" className="join-btn">
          Join a Workshop
        </Link>

        <Link to="/projects" className="projects-btn">
          See our Projects
        </Link>
      </div>

      <div className='logo-and-donation'>
        <img src={smallLogo} alt="Threads of Hope" className="center-image" />

        <div className='donation-container'>
          <h2>Support our Cause!</h2>
          <p>We accept Paypal, Zelle, and cash donations<br />
          for our various charity drives.</p>
          <button className='donate-btn'>Donate</button>
        </div>
      </div>

      <header className="header-fixed">
        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/events">Events</Link>
          <Link to="/join" className="join-btn">Join</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<Join />} />
      </Routes>

      <div className="down-arrow-container" onClick={scrollToBlank}>
        <span className="down-arrow">↓</span>
      </div>

      <div ref={blankPageRef} className="blank-page"></div>
    </>
  );
}

export default App
