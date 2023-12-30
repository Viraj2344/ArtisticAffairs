import React from 'react';

const ProductCard = () => {
  const mediaItems = [
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000', link: '/allproducts', text: 'All Collections' },
    { type: 'image', src: 'https://mind-spark.org/artisticaffairs/assets/anime.PNG', link: '/animecases', text: '' },
    { type: 'image', src: 'https://mind-spark.org/artisticaffairs/assets/marvel.PNG', link: '/marvelcases', text: '' },
    { type: 'image', src: 'https://mind-spark.org/artisticaffairs/assets/asthetic.PNG', link: '/abstractcases', text: '' },
    { type: 'image', src: 'https://mind-spark.org/artisticaffairs/assets/taylorswift.PNG', link: '/travelcases', text: '' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000', link: '/hippietrippiecases', text: 'Hippie Trippie Case' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000', link: '/animecases', text: 'Anime Cases' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_1.png?v=1693224199&width=1000', link: '/cricketcases', text: 'Cricket Cases' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000', link: '/footballcases', text: 'Football Cases' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow.png?v=1693224267&width=1000', link: '/musiccases', text: 'Music Cases' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_1.png?v=1693224199&width=1000', link: '/carsbikescases', text: 'Cars/Bikes Case' },
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/Pink_Watercolor_Abstract_Cozy_Vibes_Square_Pillow_5.png?v=1693225180&width=1000', link: '/gamingcases', text: 'Gaming Cases' },
  ];

  return (
    <div className="overflow-x-auto flex gap-5 p-7 bg-gradient-to-r from-gray-700 to-gray-900		"> 
      {mediaItems.map((media, index) => (
        <a
          key={index}
          href={media.link}
          target="_blank"
          rel="noopener noreferrer"
          className="productcard group relative flex-shrink-0 overflow-hidden bg-gray-100 hover:bg-gray-300 rounded-2xl transition duration-300 transform hover:scale-105"
          style={{ minWidth: '250px', maxWidth: '380px', height: '380px' }}
        >
          {media.type === 'video' ? (
            <video
              src={media.src}
              alt={`Video ${index + 1}`}
              className="w-full h-full object-cover border-white border-4 rounded-2xl" 
              controls
            />
          ) : (
            <img
              src={media.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover border-white border-4 rounded-2xl" 
            />
          )}
        
        </a>
      ))}
    </div>
  );
};

export default ProductCard;
