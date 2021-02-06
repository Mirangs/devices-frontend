import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import ProjectsList from 'features/Projects/components/ProjectsList'
import { useDispatch } from 'react-redux'
import { fetchProjects } from 'features/Projects/projectReducer'

const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <>
      <Typography component="h1">Main page</Typography>
      <ProjectsList />
    </>
  )
}

export default MainPage
