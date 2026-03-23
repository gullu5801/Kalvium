import Navbar from './Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contact';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

/*
  ===========================
  STUDENT INSTRUCTIONS
  ===========================

  You are building a multi-page React application using React Router.

  Your task is to configure routing for the following pages:

  1. Home page      → "/"
  2. Contacts page  → "/contacts"
  3. About page     → "/about"

  ⚠️ Rules:
  - Use ONLY <Routes> and <Route> from react-router-dom
  - Do NOT remove or modify existing imports
  - Do NOT change the Navbar position
  - Do NOT hardcode UI changes outside routing
*/

function App() {
  return (
    <>
      {/* Navbar should be always visible */}
      <Navbar />

      <div className="container">
        <Routes>
          {/* TODO 1:
              Add a Route for the Home page ("/")
              It should render the Home component
          */}
          <Route path="/" element={<Home />} />

          {/* TODO 2:
              Add a Route for the Contacts page ("/contacts")
              It should render the Contacts component
          */}
          <Route path="/contacts" element={<Contacts />} />

          {/* TODO 3:
              Add a Route for the About page ("/about")
              It should render the About component
          */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
