import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';
import AppClass from '../src/AppClass.jsx';

describe('App Component', () => {
  it('renders the gallery title and images correctly in App', () => {
    const testData = [
      { id: 1, img: 'image1.jpg' },
      { id: 2, img: 'image2.jpg' },
      { id: 3, img: 'image3.jpg' }
    ];

    render(<App data={testData} />);

    // Check if the gallery title is rendered
    const titleElement = screen.getByText('Kalvium Gallery');
    expect(titleElement).toBeTruthy(); 

    // Check if images are rendered
    testData.forEach(({ img }) => {
      const imageElement = screen.getByAltText(`Gallery image ${img}`);
      expect(imageElement).toBeTruthy();
    });
  });
});

describe('AppClass Component', () => {
  it('renders the gallery title and images correctly in App Class', () => {
    const testData = [
      { id: 1, img: 'image1.jpg' },
      { id: 2, img: 'image2.jpg' },
      { id: 3, img: 'image3.jpg' }
    ];

    render(<AppClass data={testData} />);

    // Check if the gallery title is rendered
    const titleElement = screen.getByText('Kalvium Gallery');
    expect(titleElement).toBeTruthy(); 

    // Check if images are rendered
    testData.forEach(({ img }) => {
      const imageElement = screen.getByAltText(`Gallery image ${img}`);
      expect(imageElement).toBeTruthy();
    });
  });
});
