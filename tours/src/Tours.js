import React from 'react';
import Tour from './Tour';
const Tours = ({ tourInfo }) => {
  console.log('tourInfo', tourInfo)
  return (
    <div>
      {tourInfo.map( tour => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  ) 
};

export default Tours;