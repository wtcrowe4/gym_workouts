import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroImage from'../assets/images/banner.png'

const Hero = () => {
  return (
        <Box sx={{ mt:{ lg:'212px', xs:'70px'}, ml:{ sm:'50px'}}} position='relative' p='20px'>
            <Typography color='#FF2625' fontWeight='800' fontSize='36px'>
               Find Workouts
            </Typography>
            <Typography color='black' fontWeight='400' fontSize='20px'>
                Find your perfect workout
            </Typography>
            <Typography color='black' fontWeight='400' fontSize='20px' mb={10}>
                and start your journey to a healthier life
            </Typography>
            <Button variant='contained' sx={{ mt:'20px', backgroundColor:'#FF2625', color:'white', width:'200px', height:'50px', borderRadius:'10px', fontSize:'20px', fontWeight:'600'}}>
                Get Started
            </Button>
            <Typography sx={{ opacity: 0.2, display: { lg:'block', xs:'none'}, position:'absolute', top:'20', left:'20', fontSize:'200px', fontWeight:'800', color:'#FF2625', zIndex:'2'}}>
                Workouts
            </Typography>
            <img src={HeroImage} alt='Hero' className='hero-banner-img'/>
        </Box>
    )
}

export default Hero