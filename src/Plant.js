import React from 'react'

function Plant() {
  return (
    <>
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
    </>
  )
}

export default Plant