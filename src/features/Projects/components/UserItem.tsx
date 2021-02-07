import React from 'react'
import { User } from '.prisma/client'
import { Typography } from '@material-ui/core'

const UserItem: React.FC<User> = ({ firstName, lastName }) => {
  return <Typography component="p">{`${firstName} ${lastName}`}</Typography>
}

export default UserItem
