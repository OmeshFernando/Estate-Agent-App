import React from 'react';

export default function FavouritesPanel({ favourites, removeFavourite, clearFavourites }) {

  function onDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    // handle add favourite via event: dispatch a custom event to parent? Simpler: handle drag add in App via window event.
    const event = new CustomEvent('add-fav-via-drag', { detail: { id }});
    window.dispatchEvent(event);
  }
  function onDragOver(e) { e.preventDefault(); }

  return (
    <aside className="favourites-panel" onDrop={onDrop} onDragOver={onDragOver}>
      <h2>Favourites ({favourites.length})</h2>
      <ul>
        {favourites.map(f => (
          <li key={f.id}>
            <img src={f.images?.[0]} alt={f.type} />
            <div  className="fav-info">
              <strong>{f.type} – {f.bedrooms} Bed</strong>
              <button onClick={()=>removeFavourite(f.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={clearFavourites}>Clear favourites</button>
      <p className="hint">Drag properties here to add them</p>
    </aside>
  )
}
