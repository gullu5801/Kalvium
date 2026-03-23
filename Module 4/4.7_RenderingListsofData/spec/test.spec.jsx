import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import HigherOrderComponent from '../src/components/HigherOrderComponent.jsx';

describe('HigherOrderComponent', () => {

  it('should render all users as list items', () => {
    render(<HigherOrderComponent />);
    const listItems = screen.queryAllByRole('listitem');

    // ❌ Boilerplate returns null → no list items
    expect(listItems.length).toBeGreaterThan(0);
  });



  it('should display users whose names start with letter J', () => {
    render(<HigherOrderComponent />);

    // Looking for actual rendered names like "Joe", "John", "Jack"
    const usersStartingWithJ = screen.queryAllByText(/^J/i);

    // ❌ Boilerplate renders nothing
    expect(usersStartingWithJ.length).toBeGreaterThan(0);
  });

  it('should display users whose age is greater than 28 and less than or equal to 50', () => {
    render(<HigherOrderComponent />);

    // These names match the expected age range
    const validAgeUsers = screen.queryAllByText(/Joe|Jack/i);

    // ❌ Boilerplate renders nothing
    expect(validAgeUsers.length).toBeGreaterThan(0);
  });

  it('should calculate and display total experience of designers', () => {
    render(<HigherOrderComponent />);

    // Expected total = 4 (Hill) + 18 (Jack) = 22
    const totalExperience = screen.queryByText(/22/);

    // ❌ Boilerplate returns null
    expect(totalExperience).toBeInTheDocument();
  });

});
