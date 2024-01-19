import React from 'react';
import './imagegrid.css'

const ImageGrid = () => {
  const mediaItems = [
    { type: 'image', src: 'https://slickstiles.com/cdn/shop/files/hippie_trippie_1.gif?v=1696958428&width=500', link: '/glasscases', text: 'Glass Cases' },
    { type: 'image', src: 'https://www.printbebo.in/wp-content/uploads/2022/04/151-You-Are-My-Pillow-Cute-Couple-Phone-Case.jpg', link: '/siliconcases', text: 'Silicon Cases' },
    { type: 'image', src: 'https://i.pinimg.com/736x/f4/68/b8/f468b87def23dd7e25c6ea35dbcccb2b.jpg', link: '/hardcases', text: 'Hard Cases' },
    { type: 'image', src: 'https://i.pinimg.com/564x/4f/ea/41/4fea41434ba79817ce1a41c62857d27f.jpg', link: '/dairies', text: 'Dairies' },
    { type: 'image', src: 'https://i.pinimg.com/564x/6f/c1/05/6fc105e491acf57acfe211d8648fa490.jpg', link: '/mugs', text: 'Mugs' }
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
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-r from-gray-700 to-gray-900		 bg-opacity-50 text-white font-bold text-lg">
            {media.text}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
