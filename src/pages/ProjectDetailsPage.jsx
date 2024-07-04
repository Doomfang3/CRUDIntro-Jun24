import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProjectDetailsPage = () => {
  const navigate = useNavigate()

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

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${details.id}`,
        {
          method: 'DELETE',
        }
      )
      if (response.ok) {
        navigate('/projects')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Displaying the data */}
      <h2>{details.title}</h2>
      <p>{details.description}</p>
      <Link to={`/projects/${details.id}/update`}>
        <button type='button'>Update</button>
      </Link>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </>
  )
}

export default ProjectDetailsPage
