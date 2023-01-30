import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <InfinitySpin color='red' height={200} width={200} />
    </Stack>
  )
}

export default Loader