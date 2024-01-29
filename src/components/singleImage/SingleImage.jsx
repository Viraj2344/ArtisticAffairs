import React from 'react';
import './SingleImage.css';

function SingleImage({ imageUrl }) {
  return (
    <section className="single-image-container custom-cursor">
      <div className="image-wrapper bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="content-over-media aspect-video full-bleed text-custom" style={{ '--text-color': '255 255 255' }}>
          <video autoPlay muted loop playsInline preload="metadata" poster="//coveritup.com/cdn/shop/files/preview_images/af521efd6a704bec871e9c006c5dc2f9.thumbnail.0000000000_800x.jpg?v=1698137885">
            <source src="https://cdn.shopify.com/videos/c/vp/af521efd6a704bec871e9c006c5dc2f9/af521efd6a704bec871e9c006c5dc2f9.HD-1080p-4.8Mbps-19796034.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
        </div>
      </div>
    </section>
  );
}

export default SingleImage;
