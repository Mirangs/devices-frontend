import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { projectsSlice } from '../features/Projects/projectReducer'

export const store = configureStore({
  reducer: {
    projects: projectsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
