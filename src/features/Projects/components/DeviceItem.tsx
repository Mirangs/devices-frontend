import React from 'react'
import { Device } from '.prisma/client'
import { Typography } from '@material-ui/core'

const DeviceItem: React.FC<Device> = ({ serialNumber }) => {
  return <Typography component="p">Serial: {serialNumber}</Typography>
}

export default DeviceItem
