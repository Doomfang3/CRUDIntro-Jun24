import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import AddProjectPage from './pages/AddProjectPage'
import UpdateProjectPage from './pages/UpdateProjectPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />} />
        <Route path='/projects/add' element={<AddProjectPage />} />
        <Route path='/projects/:projectId/update' element={<UpdateProjectPage />} />

        <Route path='*' element={<h1>Not found </h1>} />
      </Routes>
    </>
  )
}

export default App
