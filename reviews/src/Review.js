import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => {
    if (number < 0) {
      number = people.length - 1
    }

    if (number > people.length - 1) {
      number = 0
    }
    return number
  }

  function changePerson(direction) {
    if (direction === 'prev') {
      let newIdx = index - 1
      setIndex(checkNumber(newIdx))
    }

    if (direction === 'next') {
      let newIdx = index + 1
      setIndex(checkNumber(newIdx))
    }
  }

  function randomPerson() {
    let newIdx = Math.floor(Math.random() * people.length)
    if (newIdx === index) {
      newIdx = newIdx + 1
    }

    setIndex(checkNumber(newIdx))
  }
  return (
      <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={ () => changePerson('prev')}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn'  onClick={ () => changePerson('next')}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={() => randomPerson()}>Surprise Me</button>
      </article>
  )
};

export default Review;