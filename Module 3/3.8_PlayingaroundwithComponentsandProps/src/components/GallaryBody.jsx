import React from 'react';

export default function GallaryBody(props) {
  const imageData = props.data;

  return (
    <div>
      {/* Map through the data array to render images */}
      {imageData && imageData.map((item) => (
        <div key={item.id} className="image-column">
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}