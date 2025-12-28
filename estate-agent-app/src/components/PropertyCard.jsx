import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property, addFavourite }) {
  const thumb = property.images[0];
  return (
    <article className="property-card" 
    draggable 
    onDragStart={(e)=>{ 
      e.dataTransfer.setData('propertyId', property.id); 
      e.dataTransfer.effectAllowed = 'move';
      }}
      >
         {/* Disable drag inside the link */}
        <Link
         to={`/property/${property.id}`} 
         className="card-link"
         draggable={false}
         >
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
          ♥ 
        </button>
        
      </div>
    </article>
  );
}
