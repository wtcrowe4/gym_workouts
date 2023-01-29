import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'


const WorkoutCard = ({ workout }) => {
  return (
    <Link className='workout-card' to={`/workout/${workout.id}`}>
        <img src={workout.gifUrl} alt={workout.name} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{ backgroundColor:'#FF2625', color:'white', height:'50px', borderRadius:'10px', fontSize:'20px', fontWeight:'600' }} 
                className='workout-btn'>
                    {workout.bodyPart}
            </Button>
            <Button sx={{ backgroundColor:'#FF2625', color:'white', height:'50px', borderRadius:'10px', fontSize:'20px', fontWeight:'600' }}
                className='workout-btn'>
                    {workout.target}
            </Button>
        </Stack>
        <Typography fontWeight={600} sx={{ fontSize: { lg: '2rem', xs: '1rem'}}} mb='1rem' textAlign='center'>{workout.name}</Typography>

    </Link>
  )
}

export default WorkoutCard