import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetailsPage = () => {
  const { projectId } = useParams()

  /* A way to store data */
  const [details, setDetails] = useState({})

  /* A way to fetch your data */
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`
        )

        if (!response.ok) {
          throw new Error('Response not ok', response)
        }

        const data = await response.json()

        setDetails(data)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    fetchDetails()
  }, [])

  /* Fetching your data at the right time */

  return (
    <>
      {/* Displaying the data */}
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </>
  )
}

export default ProjectDetailsPage
