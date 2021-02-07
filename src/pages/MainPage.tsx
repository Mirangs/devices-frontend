import React, { useEffect } from 'react'
import { Container, Box, AppBar, Typography } from '@material-ui/core'
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
      <AppBar position="static">
        <Typography component="div">
          <Box
            component="h1"
            fontSize="h4.fontSize"
            fontWeight={500}
            textAlign="center"
            m={2}
          >
            Devices Projects
          </Box>
        </Typography>
      </AppBar>
      <Container maxWidth="lg">
        <ProjectsList />
      </Container>
    </>
  )
}

export default MainPage
