import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProjectPage = () => {
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
        'https://project-management-api-4641927fee65.herokuapp.com/projects',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )
      if (response.status === 201) {
        const projectData = await response.json()
        console.log(projectData)
        navigate(`/projects/${projectData.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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
    </>
  )
}

export default AddProjectPage
