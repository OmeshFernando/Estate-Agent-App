import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';
import FavouritesPanel from './FavouritesPanel';

// Mock filterProperties so we test SearchForm logic, not utils
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

    expect(screen.getByPlaceholderText(/br1,br2/i)).toBeInTheDocument();
  });

  test('allows user to type postcode', async () => {
    render(
      <SearchForm
        properties={mockProperties}
        setResults={mockSetResults}
      />
    );

    const postcodeInput = screen.getByPlaceholderText(/br1,br2/i);
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
  test('submitting form with multiple filters calls filterProperties with correct criteria', async () => {
  const { filterProperties } = require('../utils/searchUtils');
  
  render(<SearchForm properties={mockProperties} setResults={mockSetResults} />);

  // Interact with multiple fields
  await userEvent.selectOptions(screen.getByLabelText(/type/i), 'house');
  await userEvent.type(screen.getByLabelText(/min price/i), '200000');
  await userEvent.type(screen.getByLabelText(/min beds/i), '2');

  const searchButton = screen.getByRole('button', { name: /search/i });
  await userEvent.click(searchButton);

  // Verify that filterProperties was called with the combined object
  expect(filterProperties).toHaveBeenCalledWith(
    mockProperties,
    expect.objectContaining({
      type: 'house',
      minPrice: '200000',
      minBeds: '2'
    })
  );
});

});
describe('FavouritesPanel Component', () => {
  const mockFavourites = [
    {
      id: "prop1",
      type: 'Flat',
      bedrooms: 2,
      price: 345000,
      images: ['flat1.jpg']
    }
  ];

  // Create mock functions to track calls
  const mockRemoveFavourite = jest.fn();
  const mockClearFavourites = jest.fn();
  const mockOnDropAdd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

test('calls removeFavourite when the Remove button is clicked', async () => {
    render(
      <FavouritesPanel 
        favourites={mockFavourites} 
        removeFavourite={mockRemoveFavourite} 
      />
    );

    const removeBtn = screen.getByRole('button', { name: /remove/i });
    await userEvent.click(removeBtn);

    expect(mockRemoveFavourite).toHaveBeenCalledWith("prop1");
  });

  test('calls clearFavourites when the Clear button is clicked', async () => {
    render(
      <FavouritesPanel 
        favourites={mockFavourites} 
        clearFavourites={mockClearFavourites} 
      />
    );

    const clearBtn = screen.getByRole('button', { name: /clear favourites/i });
    await userEvent.click(clearBtn);

    expect(mockClearFavourites).toHaveBeenCalled();
  });

});
