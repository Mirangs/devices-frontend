import { Typography } from '@material-ui/core'
import React from 'react'
import { ProjectItem } from '../projectReducer'
import DevicesList from './DevicesList'
import UsersList from './UsersList'

const DeviceItem: React.FC<ProjectItem> = ({
  title,
  devices,
  users,
  beginDate,
  expirationDate,
}) => {
  return (
    <>
      <Typography component="h2">{title}</Typography>
      <Typography component="h3">Devices: </Typography>
      <DevicesList devices={devices} />
      <Typography component="h3">Users: </Typography>
      <UsersList users={users} />
      <Typography component="p">Begin Date: {beginDate}</Typography>
      <Typography component="p">
        Expiration Date: {expirationDate || '-'}
      </Typography>
    </>
  )
}

export default DeviceItem
