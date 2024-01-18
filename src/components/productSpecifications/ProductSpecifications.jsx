import React from 'react';

const ProductSpecificationsTable = ({ mode }) => {
  const tableStyle = {
    backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '#F4F4F4',
    color: mode === 'dark' ? 'white' : 'black',
  };

  const titles = [
    'Glass Case',
    'Silicon Case',
    'Hard Case',
  ];

  const specifications = [
    'Available for 200+ phone models\n360° edge protection, hard TPU glass on the back for premium print',
    'Available for iPhone models only\nSilicons on the edges provide 6ft drop protection',
    'Available for 600+ phone models\nPremium print quality, with perfect openings for ports and camera',
  ];

  return (
    <div className="container 	 text-white my-3 rounded-xl mx-auto p-4 text-center">
      <h1 className={`text-3xl 	 text-white font-bold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
      style={{ fontFamily:'Salsa' }}>
        Product Specifications
      </h1>
      <h5 className="text-sm mb-4 ">
        Information regarding various products available on the website
      </h5>
      <div className={`overflow-x-auto		 text-white ${mode === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-900		' : ''}`}>
        <table className="w-full  rounded-lg " style={{ borderRadius:'36px' , ...tableStyle }}>
          <colgroup>
            <col style={{ width: '33%' }} />
            <col style={{ width: '33%' }} />
            <col style={{ width: '34%' }} />
          </colgroup>
          <thead>
            <tr>
              <th className="py-2 px-2 md:px-4 border-b font-bold">Products</th>
              <th className="py-2 px-2 md:px-4 border-b">Specifications</th>
              <th className="py-2 px-2 md:px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {titles.map((title, index) => (
              <tr key={index}>
                <td className="py-2 px-2 md:px-4 bg-gradient-to-r from-gray-700 to-gray-700		 text-white border-b font-bold">{title}</td>
                <td className="py-2 px-2 md:px-4 bg-gradient-to-r from-gray-700 to-gray-700		 text-white border-b">{specifications[index]}</td>
                <td className="py-2 px-2 md:px-4 bg-gradient-to-r from-gray-700 to-gray-700		 text-white border-b">Additional details go here</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecificationsTable;
