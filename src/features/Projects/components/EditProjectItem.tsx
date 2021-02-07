import React from 'react'
import { IconButton, TextField, Box } from '@material-ui/core'
import { CheckOutlined, ClearOutlined } from '@material-ui/icons'

export interface EditProjectItemProps {
  projectId: number
  editTitle: string
  confirmEditing: () => void
  cancelEditing: () => void
  setEditTitle: (title: string) => void
}

const EditProjectItem: React.FC<EditProjectItemProps> = ({
  projectId,
  confirmEditing,
  cancelEditing,
  editTitle,
  setEditTitle,
}) => {
  const onEditSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    confirmEditing()
  }

  return (
    <form onSubmit={onEditSubmitted}>
      <Box component="span" mr={2}>
        <TextField
          id={`${projectId}-project-name`}
          label="Project Name"
          variant="outlined"
          value={editTitle}
          onChange={({ target: { value } }) => {
            setEditTitle(value)
          }}
          autoFocus
        />
      </Box>
      <IconButton type="submit" aria-label="Confirm">
        <CheckOutlined />
      </IconButton>
      <IconButton onClick={cancelEditing} aria-label="Cancel">
        <ClearOutlined />
      </IconButton>
    </form>
  )
}

export default EditProjectItem
