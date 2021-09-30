   
import React from 'react';

const List = ({ people }) => {

  const persons = people.map( person => (
      <article key={person.id} className='person'>
        <img src={person.image} alt={person.name}/>
        <div>
          <h4>{person.name}</h4>
          <p>{`${person.age} years`}</p>
        </div>
      </article>
  ))

  return (
    <>
       {persons}
    </>
  );
};

export default List;