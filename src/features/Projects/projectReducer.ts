import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'app/store'
import { Project, User, Device } from '.prisma/client'

export interface UserElement {
  user: User
}

export interface ProjectItem extends Project {
  users: UserElement[]
  devices: Device[]
}

interface InitialState {
  projects: ProjectItem[]
  isLoading: boolean
  error: string
}

const initialState: InitialState = {
  projects: [],
  isLoading: false,
  error: '',
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (
      state: InitialState,
      action: PayloadAction<ProjectItem[]>
    ) => {
      state.projects = action.payload
    },
    setIsLoading: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state: InitialState, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    deleteProject: (state: InitialState, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(({ id }) => id !== action.payload)
    },
    editProjectName: (
      state: InitialState,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return {
            ...project,
            title: action.payload.title,
          }
        }

        return project
      })
    },
  },
})

export const {
  setProjects,
  setIsLoading,
  setError,
  deleteProject,
  editProjectName,
} = projectsSlice.actions

export const fetchProjects = (): AppThunk => async (dispatch) => {
  dispatch(setIsLoading(true))
  try {
    const BASE_URL = process.env.REACT_APP_DEVICES_API
    const res = await fetch(`${BASE_URL}/projects`)
    const json = await res.json()
    dispatch(setProjects(json))
  } catch (e) {
    dispatch(setError(e.toString()))
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const projectsSelector = (state: RootState) => state.projects
