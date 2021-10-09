import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const fetchData = async () => {
        try {
            const data = await fetch(url)
            .then(res => res.json())
            setJobs(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    console.log('data', jobs)
    useEffect(() => {
        fetchData()
    }, [])

  return (<h2>tabs project setup</h2>)
}

export default App