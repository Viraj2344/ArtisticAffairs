import React from 'react';
import './BigText.css'; // Don't forget to create the corresponding CSS file for styling

const BigText = () => {
  return (
    
    <div className="big-text-container ">
      <div className="big-text">
        <span style={{ fontFamily:'Salsa' }}>100%</span>
      </div>
      <div className="small-text text-white">
        <span>Premium Print Guarantee</span>
      </div>
    </div>
  );
};

export default BigText;
