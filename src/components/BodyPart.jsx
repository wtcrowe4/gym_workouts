import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card' 
        sx={{ borderTop:  bodyPart === item ? '4px solid red' : '4px solid transparent', 
             backgroundColor:'beige', borderBottomLeftRadius:'20px', width:'270px', height:'280px', cursor:'pointer', gap:'47px', border:'1px solid gray' }}> 
        <img src={Icon} alt='gym icon' style={{ width: '40px', height: '40px' }} /> 
        {/* <Typography fontWeight={600} sx={{ fontSize: { lg: '2rem', xs: '1rem'}}} mb='1rem' textAlign='center'>{item}</Typography> */}

    </Stack>
  )
}

export default BodyPart