import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProjectPage = () => {
  const { projectId } = useParams()

  const navigate = useNavigate()

  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
  })

  const handleInput = event => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const payload = formInput

    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
      if (response.status === 200) {
        navigate(`/projects/${projectId}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
        delete data.id
        setFormInput(data)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    fetchDetails()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input type='text' name='title' value={formInput.title} onChange={handleInput} />
      </label>
      <label>
        Description
        <textarea
          name='description'
          rows={5}
          cols={20}
          value={formInput.description}
          onChange={handleInput}
        />
      </label>
      <button type='submit'>submit!</button>
    </form>
  )
}

export default UpdateProjectPage
