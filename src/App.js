import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const apiUrl = 'https://perenual.com/api/species-list?key=sk-5vqy65ac6a30b8a6e3841';

  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState();

  useEffect(() => {
    // fetch(apiUrl)
    // .then(response => response.json())
    // .then(data => {
    //   setPlants(data); 
    //   console.log('data', data)
    // })
    // .catch(error => console.error(error))

    async function getPlants() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Plant Data', data);
        setPlants(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }

    getPlants();
  }, []);

  return (
    <div className="App">
      <div className='title'>Plant Watcher</div>
      <div className='plants'>
        {isLoading ? <div>Loading Plants</div> : plants.data.map((plant, i) => (
          <div key={i} className='plant-info'>
            <div className='info-item'>Common Name: {plant.common_name}</div>
            <div className='info-item'>Other Name: {plant.other_name.map((name, i) => <div key={i}>{name}</div>)}</div>
            <div className='info-item'>Scientific Name: {plant.scientific_name[0]}</div>
            <div className='info-item'>Cycle Type: {plant.cycle}</div>
            <div className='info-item'>Watering Frequency: {plant.watering}</div>
            <div className='info-item'>Lighting: {plant.sunlight.map((light, i) => <div key={i}>{light}</div>)}</div>
          </div>
        ))}
        {/* {isLoading ? <div>a</div> : <div>{plants.data[0].common_name}</div> } */}
      </div>
    </div>
  );
}

export default App;
