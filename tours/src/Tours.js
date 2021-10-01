import React from 'react';
import Tour from './Tour';
const Tours = ({ tourInfo }) => {
  
  return (
    <div>
      {tourInfo.map( tour => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  ) 
};

export default Tours;