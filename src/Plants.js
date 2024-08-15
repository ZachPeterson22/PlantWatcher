import React, { useState, useEffect } from 'react';
import './App.css';

function Plants(props) {

  return (
      <div className='plants'>
        {props.plants.data.map((plant, i) => (
          <div key={i} className='plant-info'>
            {plant.default_image ? 
            <div className='plant-img'>
              <img src={plant.default_image.thumbnail} alt='plant-img'/>
            </div > : <div className='plant-img'>No Image Provided</div>}
            <div className='info-item'>Common Name: {plant.common_name}</div>
            <div className='info-item'>
              <div>Other Name: </div>
              {plant.other_name.map((name, i) => <div key={i}>{name}</div>)}
            </div>
            <div className='info-item'>Scientific Name: {plant.scientific_name[0]}</div>
            <div className='info-item'>Cycle Type: {plant.cycle}</div>
            <div className='info-item'>Watering Frequency: {plant.watering}</div>
            <div className='info-item'>
              <div>Lighting: </div>
              {plant.sunlight.map((light, i) => <div key={i}>{light}</div>)}
            </div>
          </div>
        ))}
      </div>
  );
}

export default Plants;
