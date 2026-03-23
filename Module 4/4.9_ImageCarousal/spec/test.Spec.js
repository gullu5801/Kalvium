import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import Carousel from '../src/components/Carousel.jsx';
import { images } from '../src/data/CarouselData.jsx';

describe('Carousel Component', () => {

  it('should display the image carousel using Functional Component', () => {
    render(<Carousel />);
    expect(screen.getByText(images[0].title)).toBeTruthy();
  });

  it('should display the first image on initial render', () => {
    render(<Carousel />);
    const image = screen.getByRole('img');
    expect(image.getAttribute('src')).toBe(images[0].img);
  });

  it('should move to next image on clicking next arrow', () => {
    render(<Carousel />);

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1];

    fireEvent.click(nextButton);

    expect(screen.getByText(images[1].title)).toBeTruthy();
  });

  it('should move to previous image on clicking previous arrow', () => {
    render(<Carousel />);

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];

    fireEvent.click(prevButton);

    expect(
      screen.getByText(images[images.length - 1].title)
    ).toBeTruthy();
  });

  it('should display the subtitle of the current image', () => {
    render(<Carousel />);
    expect(screen.getByText(images[0].subtitle)).toBeTruthy();
  });

});
