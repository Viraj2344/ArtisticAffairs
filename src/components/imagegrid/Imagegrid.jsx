import React from 'react';
import './imagegrid.css'

const ImageGrid = () => {
  const mediaItems = [
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/hippie_trippie_1.gif?v=1696958428&width=500', link: '/phonecases', text: 'Phone Cases' },
    { type: 'image', src: 'https://homafy.com/wp-content/uploads/2022/08/tumbler-with-quote.jpg', link: '/Tumblers', text: 'Tumblers' },
    { type: 'image', src: 'https://i.pinimg.com/564x/6f/c1/05/6fc105e491acf57acfe211d8648fa490.jpg', link: '/mugs', text: 'Mugs' },
    { type: 'image', src: 'https://m.media-amazon.com/images/I/517oEk-4WhL._AC_UF1000,1000_QL80_.jpg', link: '/Cans', text: 'Cans' }
  ];

  return (
    <div className="overflow-x-auto flex gap-5 p-7 scrollbar-hidden">
      {mediaItems.map((media, index) => (
        <a
          key={index}
          href={media.link}

          rel="noopener noreferrer"
          className="group relative flex-shrink-0 overflow-hidden bg-gray-100 hover:bg-gray-300 rounded-2xl transition duration-300 transform hover:scale-105"
          style={{ fontFamily:'Salsa', minWidth: '200px', maxWidth: '160px', height: '240px' /* Set a suitable height for your items */ }}

        >
          {media.type === 'video' ? (
            <video
              src={media.src}
              alt={`Video ${index + 1}`}
              className="w-full h-full object-cover"
              controls
            />
          ) : (
            <img
              src={media.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover shadow-black rounded-2xl"
            />
          )}
          <div className="mediatext absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-700 to-gray-900		 bg-opacity-50 text-white font-bold text-lg">
            {media.text}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
