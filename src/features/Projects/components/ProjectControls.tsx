import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import {
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core'
import DeleteButton from '@material-ui/icons/DeleteOutline'
import EditButton from '@material-ui/icons/EditOutlined'
import { deleteProject } from '../projectReducer'
import { DeleteContext } from '../DeleteContext'

import 'react-toastify/dist/ReactToastify.css'

export interface ProjectControlsProps {
  projectId: number
  title: string
  handleEditing: () => void
}

const ProjectControls: React.FC<ProjectControlsProps> = ({
  projectId,
  title,
  handleEditing,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const dispatch = useDispatch()
  const { onDeleteFinished } = useContext(DeleteContext)

  const onDeleteClick = () => {
    closeDeleteModal()
    dispatch(deleteProject(projectId))
    onDeleteFinished(`Successfully deleted ${title} project`)
  }

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const onEditClick = () => {
    handleEditing()
  }

  return (
    <span>
      <IconButton onClick={onEditClick} aria-label="Edit project">
        <EditButton />
      </IconButton>
      <IconButton
        color="secondary"
        onClick={openDeleteModal}
        aria-label="Delete project"
      >
        <DeleteButton />
      </IconButton>
      <Dialog
        open={isDeleteModalOpen}
        onClose={closeDeleteModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteModal} color="primary">
            Cancel
          </Button>
          <Button onClick={onDeleteClick} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default ProjectControls
