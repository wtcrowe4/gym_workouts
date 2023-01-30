import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/icons/dumbell.jpg'

const Footer = () => {
  return (
    <Box sx={{backgroundColor: 'black', color: 'white', p: '10px', mt:'80x', width: '100vw'}}>
      <Stack gap='20px' sx={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <img src={Logo} alt='logo' width='50px' height='50px' loading='lazy' />
        <Typography variant='h6' sx={{textAlign: 'right'}}>
          Thomas Crowe
        </Typography>
        <Typography variant='h6' sx={{textAlign: 'right'}}>
          2023
        </Typography>
      </Stack>
    </Box>

        
  )
}

export default Footer