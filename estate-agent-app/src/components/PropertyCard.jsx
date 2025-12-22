import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property, addFavourite }) {
  const thumb = property.picture;
  return (
    <article className="property-card" 
    draggable="true" 
    onDragStart={(e)=>{ 
      e.dataTransfer.setData('text/plain', property.id); 
      }}
      >
        <Link to={`/property/${property.id}`} className="card-link">
        <img src={thumb} alt={property.type} className="thumb" />
        </Link>
      <div className="card-body">
        <h3><Link to={`/property/${property.id}`}>{property.title}</Link></h3>

        <p className="price">£{property.price.toLocaleString()}</p>
        <p className="short">{property.short_description}</p>

        <div className="card-actions">
          <button onClick={()=>addFavourite(property)}>♥ Favourite</button>
          <Link to={`/property/${property.id}`} className="details">View</Link>
        </div>
        
      </div>
    </article>
  );
}
