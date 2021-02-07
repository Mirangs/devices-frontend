import React from 'react'
import styled from 'styled-components'
import {
  Grid,
  Box,
  CircularProgress,
  GridProps,
  BoxProps,
} from '@material-ui/core'
import ProjectItem from './ProjectItem'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { projectsSelector } from 'features/Projects/projectReducer'
import { DeleteContext } from '../DeleteContext'

const DeleteToastr = styled(ToastContainer)`
  font-size: 12px;
`

const ListReset = styled(Grid)`
  list-style: none;
  padding-top: 30px;
  padding-left: 0;
` as React.ComponentType<GridProps & BoxProps>

const ListItem = styled(Grid)`
  display: flex;
  margin-bottom: 20px;

  &:nth-of-type(odd) {
    padding-right: 10px;
  }

  &:nth-of-type(even) {
    padding-left: 10px;
  }
` as React.ComponentType<GridProps & BoxProps>

const ProjectsLoader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`

const ProjectsList = () => {
  const { projects, isLoading, error } = useSelector(projectsSelector)

  if (isLoading) {
    return <ProjectsLoader />
  }

  if (error) {
    return <p>{error || 'Something went wrong...'}</p>
  }

  if (!projects.length) {
    return (
      <Box component="h2" textAlign="center">
        There is no projects yet
      </Box>
    )
  }

  return (
    <DeleteContext.Provider
      value={{
        onDeleteFinished: (title: string) => {
          toast(title, {
            position: 'bottom-center',
            type: 'error',
            autoClose: 3000,
          })
        },
      }}
    >
      <ListReset container component="ul">
        {projects.map((project) => (
          <ListItem component="li" item xs={12} lg={6} key={project.id}>
            <ProjectItem {...project} />
          </ListItem>
        ))}
      </ListReset>
      <DeleteToastr />
    </DeleteContext.Provider>
  )
}

export default ProjectsList
