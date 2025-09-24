import bigLogo from './assets/bigLogo.png';
import smallLogo from './assets/smallLogo.png';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Join from './pages/Join';

function App() {
  return (
    <>
      <img src={bigLogo} alt="Threads of Hope" className="topleft-image" />

      <Link to="/" className="home-button" aria-label='Go to homepage'></Link>

      <h1 className="hero-title">
        Crocheting comfort for<br />
        hospitals &amp; homes.
        </h1>
      <p className="hero-subtitle">
        Student run at UTD, we make and donates various crochet items<br />
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

      <img src={smallLogo} alt="Threads of Hope" className="center-image" />

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
    </>
  );
}

export default App
