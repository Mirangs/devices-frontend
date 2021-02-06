import React from 'react'
import ProjectItem from './ProjectItem'
import { useSelector } from 'react-redux'
import { projectsSelector } from 'features/Projects/projectReducer'

const ProjectsList = () => {
  const { projects } = useSelector(projectsSelector)

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectsList
