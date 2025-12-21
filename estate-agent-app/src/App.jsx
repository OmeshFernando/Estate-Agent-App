import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import propertiesData from './data/properties.json';
import SearchForm from './components/SearchForm';
import ResultsGrid from './components/ResultsGrid';
import PropertyPage from './components/PropertyPage';
import FavouritesPanel from './components/FavouritesPanel';
import Header from './components/Header';
import './styles/main.css';

function App() {
  const [properties] = useState(propertiesData.properties);
  const [results, setResults] = useState(propertiesData.properties);
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favourites')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (property) => {
    if (!favourites.find(p => p.id === property.id)) {
      setFavourites(prev => [...prev, property]);
    }
  };
  const removeFavourite = (id) => setFavourites(prev => prev.filter(p => p.id !== id));
  const clearFavourites = () => setFavourites([]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <FavouritesPanel favourites={favourites} removeFavourite={removeFavourite} clearFavourites={clearFavourites}/>
        <Routes>
          <Route path="/" element={
            <>
              <SearchForm properties={properties} setResults={setResults}/>
              <ResultsGrid results={results} addFavourite={addFavourite}/>
            </>
          } />
          <Route path="/property/:id" element={<PropertyPage properties={properties} addFavourite={addFavourite}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
