import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Plant.css';

function Plant() {

  const { plantId } = useParams();

  const apiUrl = `https://perenual.com/api/species/details/${plantId}?key=sk-5vqy65ac6a30b8a6e3841`;

  const [isLoading, setIsLoading] = useState(true);
  const [plant, setPlant] = useState();

  useEffect(() => {
    async function getPlant() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Solo Plant Data', data);
        setPlant(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }

    getPlant();
  }, []);

  return (
    <>
      {isLoading ? <div>Loading Plant Info...</div> : 
      <div className='plant-page'>
        <div className='plant-title'>{plant.common_name}</div>
        <div className='plant-page-info'>
          <div className='plant-info-left'>
            <div>
              {plant.default_image ? 
              <div className='plant-img'>
                <img src={plant.default_image.medium_url} alt='plant-img'/>
              </div > : <div className='plant-img'>No Image Provided</div>}
            </div>
          </div>
          <div className='plant-info-right'>
            <div className='info-item'>
              <div>Other Name: {plant.other_name}</div>
              {plant.other_name.map((name, i) => <div key={i}>{name}</div>)}
            </div>
            <div className='info-item'>Scientific Name: {plant.scientific_name[0]}</div>
            <div className='info-item'>Cycle Type: {plant.cycle}</div>
            <div className='info-item'>Watering Frequency: {plant.watering}</div>
            <div className='info-item'>
              <div>Lighting: </div>
              {plant.sunlight.map((light, i) => <li key={i}>{light}</li>)}
            </div>
            <div className='info-item'>Watering Frequency: {plant.watering_general_benchmark.value} {plant.watering_general_benchmark.unit}</div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Plant