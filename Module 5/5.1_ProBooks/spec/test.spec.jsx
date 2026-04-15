import axios from 'axios';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import App from '../src/App.jsx';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('App Component', () => {

  // ✅ Test Case 1: Successful API Fetch & Title Rendering
  it('renders book titles after successful API call', async () => {
    const mockedResponse = {
      data: {
        books: [
          { id: '1', title: 'Book One', description: 'Desc 1', authors: ['A1'], imageLinks: {} },
        ],
      },
    };

    vi.spyOn(axios, 'get').mockResolvedValue(mockedResponse);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Book One')).toBeTruthy();
    });
  });


  // ✅ Test Case 2: Renders Book Description Correctly
  it('renders book description correctly', async () => {
    const mockedResponse = {
      data: {
        books: [
          { id: '1', title: 'Book One', description: 'Test Description', authors: ['A1'], imageLinks: {} },
        ],
      },
    };

    vi.spyOn(axios, 'get').mockResolvedValue(mockedResponse);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Test Description')).toBeTruthy();
    });
  });


  // ✅ Test Case 3: Authors Render Inside <span>
  it('renders authors inside span elements', async () => {
    const mockedResponse = {
      data: {
        books: [
          {
            id: '1',
            title: 'Book One',
            description: 'Desc',
            authors: ['Author One', 'Author Two'],
            imageLinks: {},
          },
        ],
      },
    };

    vi.spyOn(axios, 'get').mockResolvedValue(mockedResponse);

    render(<App />);

    await waitFor(() => {
      const author = screen.getByText('Author One');
      expect(author.tagName).toBe('SPAN');
    });
  });


  // ✅ Test Case 4: Image Thumbnail Renders Properly
  it('renders book thumbnail image correctly', async () => {
    const mockedResponse = {
      data: {
        books: [
          {
            id: '1',
            title: 'Book One',
            description: 'Desc',
            authors: ['A1'],
            imageLinks: { smallThumbnail: 'https://example.com/img.jpg' },
          },
        ],
      },
    };

    vi.spyOn(axios, 'get').mockResolvedValue(mockedResponse);

    render(<App />);

    await waitFor(() => {
      const img = screen.getByRole('img');
      expect(img).toBeTruthy();
      expect(img.getAttribute('src')).toBe('https://example.com/img.jpg');
    });
  });


  // ✅ Test Case 5: Handles Empty Book List Gracefully
  it('renders nothing when book list is empty', async () => {
    const mockedResponse = {
      data: {
        books: [],
      },
    };

    vi.spyOn(axios, 'get').mockResolvedValue(mockedResponse);

    render(<App />);

    await waitFor(() => {
      expect(screen.queryByRole('heading')).toBeNull();
    });
  });

});