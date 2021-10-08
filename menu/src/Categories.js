import React from 'react';

const Categories = ({ categories, getCategory }) => {
  return (
      <div className='btn-container'>
        { categories.map( btn => (
            <button key={btn} className='filter-btn' onClick={ () => getCategory(btn)}>{btn}</button>
        ))}
      </div>
  )
}
export default Categories;