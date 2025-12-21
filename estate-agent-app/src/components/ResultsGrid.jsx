import React from 'react';
import PropertyCard from './PropertyCard';

export default function ResultsGrid({ results, addFavourite }) {
  return (
    <section className="results-grid">
      {results.length === 0 && <p>No properties found for the selected criteria.</p>}
      {results.map(property => (
        <PropertyCard key={property.id} property={property} addFavourite={addFavourite}/>
      ))}
    </section>
  );
}
