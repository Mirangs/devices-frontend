# Devices Front-End

This project depends on [Devices Backend Project](https://github.com/Mirangs/devices-backend)

## Prequisites

You need **NodeJS 14.15.4** installed on your machine
Before running service, dont forget to install dependencies (`yarn or npm i`)

## Scripts

Start project

`yarn start (or npm start)`

## Env file

Project has file called **.env** which contains `REACT_APP_DEVICES_API` endpoint (related to serve endpoint in [Devices Backend Project](https://github.com/Mirangs/devices-backend))

## Types

While first start, you may encounter problem with reducer types. To solve it, you need to generate Prisma types

`npx prisma generate`
