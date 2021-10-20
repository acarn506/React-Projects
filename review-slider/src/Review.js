import React, {useState, useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Review = () => {
    const [value, setValue] = useState(0)
    const [persons, setPersons] = useState(data)

    useEffect( () => {
        const lastIndex = persons.length - 1

        if (value > lastIndex) {
            setValue(0)
        }

        if (value < 0) {
            setValue(lastIndex)
        }

    }, [value, persons])

    useEffect(() => {
        let slider = setInterval( () => {
            setValue(value + 1)
        }, 3000)

        return () => clearInterval(slider)

    }, [value])

    return (
        <>
        {
            persons.map( (person, idx) => {

                const {id, image, name, title, quote} = person

                let position = 'nextSlide'

                if (idx === value) {
                    position = 'activeSlide'
                }

                if (idx === value - 1 || (value === 0 && idx === persons.length - 1) ) {
                    position = 'lastSlide';
                }
                return (
                    <article className={position} key={id}>
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
            <FiChevronLeft onClick={() => setValue(value - 1)}/>
            </button>
            <button className='next'>
            <FiChevronRight onClick={() => setValue(value + 1)}/>
            </button>
        </>
       
    )
}

export default Review