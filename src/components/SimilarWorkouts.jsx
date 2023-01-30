import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Loader from './Loader'
import HorizontalScrollBar from './HorizontalScrollBar'

const SimilarWorkouts = ({ similarWorkouts, sameEquipmentWorkouts}) => {
  return (
    <Box sx={{ mt:{lg: '2rem', xs: '.5rem'}, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', p: '20px' }}>
        <Typography variant='h4' mb='1rem' mt='3rem' sx={{textShadow:'1px 1px red'}} >
            Similar Workouts
        </Typography>
        <Stack direction='row' spacing={{ lg: '2rem', xs: '1rem' }} sx={{ height:'20rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            {similarWorkouts.length ?
                <HorizontalScrollBar data={similarWorkouts} /> :
                <Loader />
            }
        </Stack>
        <Typography variant='h4' mb='1rem' mt='1rem' sx={{textShadow:'1px 1px red'}}>
            Same Equipment Workouts
        </Typography>
        <Stack direction='row' spacing={{ lg: '2rem', xs: '1rem' }} sx={{ height:'20rem', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            {sameEquipmentWorkouts.length ?
                <HorizontalScrollBar data={sameEquipmentWorkouts} /> :
                <Loader />
            }
        </Stack>
    </Box>

  )
}

export default SimilarWorkouts