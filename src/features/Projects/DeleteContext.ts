import React from 'react'

export interface DeleteContextProps {
  onDeleteFinished: (title: string) => void
}

export const DeleteContext = React.createContext<DeleteContextProps>({
  onDeleteFinished: () => {},
})
