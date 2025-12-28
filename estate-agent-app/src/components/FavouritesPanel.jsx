import React from 'react';

export default function FavouritesPanel({
  favourites,
  onDropAdd,
  onDragRemove,
  removeFavourite,
  clearFavourites
}) {

  function handleDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('propertyId');
    onDropAdd(id);
  }

  function allowDrop(e) {
    e.preventDefault();
  }
  return (
    <aside
      className="favourites-panel"
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      <h2>Favourites ({favourites.length})</h2>

      <ul>
        {favourites.map(f => (
          <li
            key={f.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('propertyId', f.id);
              e.dataTransfer.effectAllowed = 'move';
            }}
            onDragEnd={(e) => {
              // If dropEffect is "none", it was dropped outside
              if (e.dataTransfer.dropEffect === 'none') {
                removeFavourite(f.id);
              }
          }}     
          >
            <img src={f.images[0]} alt={f.type} />
            <div className="fav-info">
              <strong>{f.type} – {f.bedrooms} Bed</strong>
              <span>£{f.price.toLocaleString()}</span>
              <button onClick={() => removeFavourite(f.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={clearFavourites}>
        Clear favourites
      </button>

      <p className="hint">
        Drag properties here to add. Drag out to remove.
      </p>
    </aside>
  );
}
