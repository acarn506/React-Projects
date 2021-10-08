import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    const [menuItems, setMenuItems] = useState(items)
    const [currCategory, setCurrCategory] = useState('All')
    //const [categories, setCategories] = useState([])

    const categories = menuItems.reduce( (previous, curr) => {
        if (!previous.includes(curr.category)) {
            previous.push(curr.category)
        }
        return previous
    }, ['All'])

    const getCategory = (category) => {
        console.log('get category', category)
        setCurrCategory(category)
    }

  return (
      <main>
          <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
          </div>
          <Categories categories={categories} getCategory={getCategory}/>
          <section className='section-center'>
              <Menu/>
          </section>
         
      </main>
  )
}

export default App;