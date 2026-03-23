import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import App from '../src/App.jsx';
import Navbar from '../src/Navbar.jsx';

describe('React Router App Test Cases', () => {
  it('should render Navbar with correct navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLink = screen.getByRole('link', { name: /Kavlium ❤️/i });
    const contactsLink = screen.getByRole('link', { name: /Contacts/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });

    expect(homeLink.textContent).toEqual('Kavlium ❤️');
    expect(contactsLink.textContent).toEqual('Contacts');
    expect(aboutLink.textContent).toEqual('About');
  });

  it('should render Home component for "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeElement = screen.getByText(/Home/i);
    expect(homeElement.textContent).toEqual('Home');
  });

  it('should render Contacts component for "/contacts" route', () => {
    render(
      <MemoryRouter initialEntries={['/contacts']}>
        <App />
      </MemoryRouter>
    );

    const contactsHeading = screen.getByRole('heading', { name: /Contacts/i });
    expect(contactsHeading.textContent).toEqual('Contacts');
  });

  it('should render About component for "/about" route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutHeading = screen.getByRole('heading', { name: /About/i });
    expect(aboutHeading.textContent).toEqual('About');
  });
});
