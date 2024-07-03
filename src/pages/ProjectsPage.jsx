import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* https://project-management-api-4641927fee65.herokuapp.com/projects */
const ProjectsPage = () => {
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        'https://project-management-api-4641927fee65.herokuapp.com/projects'
      )
      if (!response.ok) {
        throw new Error('response not ok', response)
      }
      const parsedData = await response.json()
      setProjects(parsedData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <>
      <h1>Project Page</h1>
      {projects.map(project => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <h2>{project.title}</h2>
        </Link>
      ))}
    </>
  )
}

export default ProjectsPage
