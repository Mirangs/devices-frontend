import React from 'react'
import { UserElement } from '../projectReducer'
import UserItem from './UserItem'

export interface UsersListProps {
  users: UserElement[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(({ user }) => (
        <li key={user.id}>
          <UserItem {...user} />
        </li>
      ))}
    </ul>
  )
}

export default UsersList
