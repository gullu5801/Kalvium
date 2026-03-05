import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App Component', () => {

  const mockData = [
    {
      id: 1,
      img: 'https://github.com/Kalvium-Program/lab-react-components-solution/blob/main/src/image/lake.JPG?raw=true',
      alt: 'Lake View 1'
    },
    {
      id: 2,
      img: 'https://github.com/Kalvium-Program/lab-react-components-solution/blob/main/src/image/lake.JPG?raw=true',
      alt: 'Lake View 2'
    },
    {
      id: 3,
      img: 'https://github.com/Kalvium-Program/lab-react-components-solution/blob/main/src/image/lake.JPG?raw=true',
      alt: 'Lake View 3'
    },
    {
      id: 4,
      img: 'https://github.com/Kalvium-Program/lab-react-components-solution/blob/main/src/image/lake.JPG?raw=true',
      alt: 'Lake View 4'
    }
  ];
  

  // 1. Check if GallaryBody is rendered in App.jsx
  it('should render GallaryBody component along with Image passed as Props in App.jsx', () => {
    render(<App data={mockData} />);
    const bodyElement = screen.getByAltText('Lake View 1');  // Use getByAltText with specific alt text
    expect(bodyElement).not.toBeNull();
  });

  // 2. Check if GallaryHeader is rendered in App.jsx
  it('should render GallaryHeader component in App.jsx', () => {
    render(<App data={mockData} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).not.toBeNull();
  });

  // 3. Check if GallaryHeader has nav links for Home, About, and More
  it('should render nav links for Home, About, and More in GallaryHeader', () => {
    render(<App data={mockData} />);
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const moreLink = screen.getByText('More');

    expect(homeLink).not.toBeNull();
    expect(aboutLink).not.toBeNull();
    expect(moreLink).not.toBeNull();
  });

  });

