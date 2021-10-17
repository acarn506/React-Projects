import React from 'react';
import Review from './Review'

function App() {
  return (
    <main className='section'>
            <header className='title'>
                <h2>
                <span>/</span>Reviews
                </h2>
            </header>
            <section className='section-center'>
                <Review />
            </section>
    </main>
  ) 
}

export default App;