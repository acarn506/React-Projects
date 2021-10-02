import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
    const [tourInfo, setTourInfo] = useState([])
    const [loading, setLoading] = useState(true)

    function removeTour(id) {
        const newTours = tourInfo.filter( tour => {
            return tour.id !== id
        })

        setTourInfo(newTours)
    }
    
    async function fetchData() {
        setLoading(true)

        try {
            const data = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then((res) => res.json())
              setTourInfo(data)
              setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    console.log(tourInfo)

    // set loading state
    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        )
    }

  return (
      <>
        <main>
            <section>
                <div className='title'>
                    <h1>Our Tours</h1>
                    <div className='underline'></div>
                    { tourInfo.length === 0 ? <button className='btn' onClick={fetchData}>Refresh</button> : null }
                </div>
                <Tours tourInfo={tourInfo} removeTour={removeTour}/>
            </section>
        </main>
      </>
  )
}

export default App