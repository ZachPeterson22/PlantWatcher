import React, { useState, useEffect } from 'react';
import './App.css';
import Plants from './Plants.js';

function App() {

  const apiUrl = 'https://perenual.com/api/species-list?key=sk-5vqy65ac6a30b8a6e3841';

  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState();
  // const [currentPage, setCurrentPage] = useState();

  useEffect(() => {

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
    <>
      <div className='title'>Plant Watcher</div>
      {isLoading ? <div>Loading Plants...</div> : <Plants plants={plants}></Plants>}
      {/* put Plant.js here based on routing */}
    </>
  );
}

export default App;
