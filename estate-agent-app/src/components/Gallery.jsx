import React, { useState } from 'react';

export default function Gallery({ images = [] }) {

  // Safety: if no images, don't render gallery
  if (!images.length) {
    return <p>No images available</p>;
  }

  // Main image state
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="gallery">

      {/* Main Image */}
      <div className="main-image">
        <img src={mainImage} alt="Property view" />
      </div>

      {/* Thumbnails */}
      <div className="thumbs">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={img === mainImage ? 'active' : ''}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

    </section>
  );
}
