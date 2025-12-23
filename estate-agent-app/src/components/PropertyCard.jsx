import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property, addFavourite }) {
  const thumb = property.images[0];
  return (
    <article className="property-card" 
    draggable="true" 
    onDragStart={(e)=>{ 
      e.dataTransfer.setData('text/plain', property.id); 
      }}
      >
        <Link to={`/property/${property.id}`} className="card-link">
        <img src={thumb} alt={property.type} className="thumb" />

        <div className="card-body">
          <h3>{property.type} – {property.bedrooms} Bed</h3>

          <p className="price">
            £{property.price.toLocaleString()}
          </p>

          <p className="short">
            {property.description.substring(0, 120)}...
          </p>
        </div>
      </Link>

        <div className="card-actions">
        <button onClick={() => addFavourite(property)}>
          ♥ Favourite
        </button>
        
      </div>
    </article>
  );
}
