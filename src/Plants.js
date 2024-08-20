import React, { useState, useEffect } from 'react';
import './App.css';

function Plants(props) {
  // route this with an onclick on the list of plants and use the same props the Plants is using

  return (
    <>
      <div className='plants'>
        {props.plants.data.map((plant, i) => (
          <div key={i} className='plant-info'>
            <div className='plant-title'> {plant.common_name}</div>
            {plant.default_image ? 
            <div className='plant-img'>
              <img src={plant.default_image.thumbnail} alt='plant-img'/>
            </div > : <div className='plant-img'>No Image Provided</div>}
            <div className='more-info-btn'>Click for more info...</div>
          </div>
        ))}
      </div>
      {/* <div className='pagination'>
        <button className='page-btn'>previous page</button>
        <button className='page-btn'>next page</button>
      </div> */}
    </>
  );
}

export default Plants;
