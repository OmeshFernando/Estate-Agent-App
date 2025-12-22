import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from './Gallery';
import TabsSection from './TabsSection';


export default function PropertyPage({ properties, addFavourite }) {
  const { id } = useParams();
   // Find property safely
  const property = properties.find(p => p.id === id);
  if (!property){
    return <p>Property not found</p>;
  } 

  return (
    <main className="property-page">
      <h1>
        {property.type} – {property.bedrooms} Bedroom
      </h1>

      <p className="price">
        £{property.price.toLocaleString()}
      </p>

      {/* Gallery uses picture as single image */}
      <Gallery images={property.images} />

      {/* Tabs component (Description / Map etc.) */}
      <TabsSection property={property} />

      <button
        className="fav-btn"
        onClick={() => addFavourite(property)}
      >
        ♥ Add to favourites
      </button>
    </main>
  )
}
