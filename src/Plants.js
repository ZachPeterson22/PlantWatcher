import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Plants(props) {
  return (
    <>
      <div className='plants'>
        {props.plants.data.map((plant, i) => (
          <div key={i} className='plant-thumbnail'>
            <div className='plant-thumbnail-title'> {plant.common_name}</div>
            {plant.default_image ? 
            <div className='plant-thumbnail-img'>
              <img src={plant.default_image.thumbnail} alt='plant-img'/>
            </div > : <div className='plant-thumbnail-img'>No Image Provided</div>}
            <Link className='more-info-btn' to={`/plant/${plant.id}`}>Click for more info...</Link>
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
