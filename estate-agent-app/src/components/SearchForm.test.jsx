import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

// 🔹 Mock filterProperties so we test SearchForm logic, not utils
jest.mock('../utils/searchUtils', () => ({
  filterProperties: jest.fn(() => [])
}));

describe('SearchForm Component', () => {

  const mockProperties = [
    { id: 1, type: 'house', price: 300000, beds: 3, postcode: 'NW1' }
  ];

  const mockSetResults = jest.fn();

  beforeEach(() => {
    mockSetResults.mockClear();
  });

  test('renders Search and Reset buttons', () => {
    render(
      <SearchForm
        properties={mockProperties}
        setResults={mockSetResults}
      />
    );

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  test('renders postcode input field', () => {
    render(
      <SearchForm
        properties={mockProperties}
        setResults={mockSetResults}
      />
    );

    expect(screen.getByPlaceholderText(/nw1/i)).toBeInTheDocument();
  });

  test('allows user to type postcode', async () => {
    render(
      <SearchForm
        properties={mockProperties}
        setResults={mockSetResults}
      />
    );

    const postcodeInput = screen.getByPlaceholderText(/nw1/i);
    await userEvent.type(postcodeInput, 'SW1');

    expect(postcodeInput.value).toBe('SW1');
  });

  test('submitting form calls setResults', async () => {
    render(
      <SearchForm
        properties={mockProperties}
        setResults={mockSetResults}
      />
    );

    const searchButton = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchButton);

    expect(mockSetResults).toHaveBeenCalled();
  });

  test('reset button resets results to all properties', async () => {
    render(
      <SearchForm
        properties={mockProperties}
        setResults={mockSetResults}
      />
    );

    const resetButton = screen.getByRole('button', { name: /reset/i });
    await userEvent.click(resetButton);

    expect(mockSetResults).toHaveBeenCalledWith(mockProperties);
  });

});
