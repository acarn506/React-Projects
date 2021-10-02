import React from 'react';
import Tour from './Tour';
const Tours = ({ tourInfo, removeTour }) => {
  
  return (
    <div>
      {tourInfo.map( tour => (
        <Tour key={tour.id} {...tour} removeTour={removeTour}/>
      ))}
    </div>
  ) 
};

export default Tours;