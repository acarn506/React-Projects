import React, {useState, useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Review = () => {
    const [value, setValue] = useState(0)
    const [persons, setPersons] = useState(data)

    const checkValue = (number) => {
        if (number > persons.length - 1) {
            return 0
        }

        if (number < 0) {
            return persons.length - 1
        }

        return number
    }

    const switchPerson = (direction) => {
        if (direction === 'prev') {
            let idx = value - 1
            setValue(checkValue(idx))
        }

        if (direction === 'next') {
            let idx = value + 1
            setValue(checkValue(idx))
        }
    } 

    return (
        <>
        {
            persons.map( person => {
                const {id, image, name, title, quote} = person
                return (
                    <article key='id'>
                        <img src={image} alt={name} className='person-img'/>
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'/>
                    </article>
                )
            })
        }
            <button className='prev'>
            <FiChevronLeft onClick={() => switchPerson('prev')}/>
            </button>
            <button className='next'>
            <FiChevronRight onClick={() => switchPerson('prev')}/>
            </button>
        </>
       
    )
}

export default Review