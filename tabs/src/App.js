import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [jobInfo, setJobInfo] = useState([])
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const fetchData = async () => {
        try {
            const data = await fetch(url)
            .then(res => res.json())
            setJobInfo(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    console.log('data', jobInfo)
    useEffect(() => {
        fetchData()
    }, [])

    const companyBtns = jobInfo.map( (job, idx) => (
        <button key={job.id} className={`job-btn ${idx === value && 'active-btn'}`} onClick={ () => setValue(idx)}>{job.company}</button>
    ))

    if (loading) {
        return (
            <section className='section loading'>
                <h1>Loading...</h1>
            </section>
        )
    }

    const {company, dates, duties, title} = jobInfo[value]

  return (
      <main>
          <section className='section'>
              <header className='title'>
                  <h2>Experience</h2>
                  <div className='underline'></div>
              </header>
              <div className='jobs-center'>
                  <div className='btn-container'>
                    {companyBtns}
                  </div>
                  <article className='job-info'>
                      <h3>{title}</h3>
                      <h4>{company}</h4>
                      <p className='job-date'>{dates}</p>
                      {
                          duties.map( (duty, idx) => {
                            return (
                                <div key={idx}className='job-desc'>
                                    <FaAngleDoubleRight className='job-icon'/>
                                    <p>{duty}</p>
                                </div>
                            )
                          })
                      }
                  </article>
            </div>
          </section>
      </main>
  )
}

export default App