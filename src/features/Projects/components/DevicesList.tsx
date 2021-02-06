import React from 'react'
import { Device } from '.prisma/client'
import DeviceItem from './DeviceItem'

export interface DevicesListProps {
  devices: Device[]
}

const DevicesList: React.FC<DevicesListProps> = ({ devices }) => {
  return (
    <ul>
      {devices.map((device) => (
        <li key={device.deviceId}>
          <DeviceItem {...device} />
        </li>
      ))}
    </ul>
  )
}

export default DevicesList
