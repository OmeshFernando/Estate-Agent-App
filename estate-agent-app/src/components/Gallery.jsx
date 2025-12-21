import React, { useState } from 'react';

export default function Gallery({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="gallery">
      <div className="main-image">
        <img src={images[index]} alt={`image-${index}`} />
      </div>
      <div className="thumbs">
        {images.map((src, i) => (
          <img key={i} className={i===index ? 'active' : ''} src={src} alt={`thumb-${i}`} onClick={()=>setIndex(i)} />
        ))}
      </div>
    </div>
  );
}
