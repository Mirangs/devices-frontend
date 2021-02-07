import React, { useState } from 'react'
import {
  Box,
  Grid,
  GridProps,
  BoxProps,
  Typography,
  Card,
  CardContent,
  CardProps,
} from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ProjectItem } from '../projectReducer'
import DevicesList from './DevicesList'
import UsersList from './UsersList'
import ProjectControls from './ProjectControls'
import EditProjectItem from './EditProjectItem'
import { editProjectName } from '../projectReducer'

const DatesBox = styled.div`
  margin-top: 15px;
`

const Wrapper = styled(Typography)`
  display: flex;
  flex-direction: column;
  width: 100%;
` as React.ComponentType<BoxProps>

const ListContainer = styled(Grid)`
  margin-bottom: auto;
` as React.ComponentType<GridProps & BoxProps>

const ProjectCard = styled(Card)`
  display: flex;
  width: 100%;
` as React.ComponentType<CardProps>

const ProjectCardContent = styled(CardContent)`
  display: flex;
  width: 100%;
`

const DeviceItem: React.FC<ProjectItem> = ({
  id,
  title,
  devices,
  users,
  beginDate,
  expirationDate,
}) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(title)

  const handleEditing = () => {
    setIsEditing(true)
  }

  const cancelEditing = () => {
    setIsEditing(false)
    setEditTitle(title)
  }

  const confirmEditing = () => {
    dispatch(editProjectName({ id, title: editTitle }))
    setIsEditing(false)
  }

  return (
    <ProjectCard variant="outlined">
      <ProjectCardContent>
        <Wrapper component="section">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            component="div"
          >
            {!isEditing && (
              <Box component="h2" fontSize="h4.fontSize" fontWeight={500} m={1}>
                {title}
              </Box>
            )}
            {!!isEditing && (
              <EditProjectItem
                projectId={id}
                confirmEditing={confirmEditing}
                cancelEditing={cancelEditing}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
              />
            )}
            <ProjectControls
              projectId={id}
              title={title}
              handleEditing={handleEditing}
            />
          </Box>
          <ListContainer container>
            <Grid item xs={6}>
              <Box component="h3">
                Devices: {!devices.length && <span>-</span>}
              </Box>
              {!!devices.length && <DevicesList devices={devices} />}
            </Grid>
            <Grid item xs={6}>
              <Box component="h3">Users: {!users.length && <span>-</span>}</Box>
              <UsersList users={users} />
            </Grid>
          </ListContainer>
          <DatesBox>
            <Box component="p">
              <Box component="b">Begin Date: </Box>
              {new Date(beginDate).toLocaleString()}
            </Box>
            <Box component="p">
              <Box component="b">Expiration Date: </Box>
              {!!expirationDate
                ? new Date(expirationDate).toLocaleString()
                : '-'}
            </Box>
          </DatesBox>
        </Wrapper>
      </ProjectCardContent>
    </ProjectCard>
  )
}

export default DeviceItem
