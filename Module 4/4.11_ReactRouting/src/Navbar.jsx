import { Link } from 'react-router-dom';

/*
  ===========================
  STUDENT INSTRUCTIONS
  ===========================

  This component represents the navigation bar of the application.

  Your tasks:
  1. Create a link that navigates to the Home page ("/")
     - The link text must be: Kavlium ❤️
  2. Create a link that navigates to the Contacts page ("/contacts")
     - The link text must be: Contacts
  3. Create a link that navigates to the About page ("/about")
     - The link text must be: About

  ⚠️ Rules:
  - Use ONLY the Link component from react-router-dom
  - Do NOT use anchor (<a>) tags
  - Do NOT change the link text
  - Do NOT change the existing structure
*/

function Navbar() {
  return (
    <nav className="nav">
      {/* TODO 1:
          Add a Link to the Home page ("/")
          Text must be: Kavlium ❤️
      */}
      <Link to="/">Kavlium ❤️</Link>
      <ul>
        {/* TODO 2:
            Add a Link to the Contacts page ("/contacts")
            Text must be: Contacts
        */}
       <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        {/* TODO 3:
            Add a Link to the About page ("/about")
            Text must be: About
        */}
         <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
