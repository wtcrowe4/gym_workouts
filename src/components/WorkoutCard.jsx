import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'


const WorkoutCard = ({ workout }) => {

  

  return (
    <div className='workout-card-wrapper'>
    <Link className='workout-card' to={`/workout/${workout.id}`}>
        <img src={workout.gifUrl} alt={workout.name} loading='lazy' />
        <Stack direction='row' spacing={'.5rem'}>
            <Button sx={{ backgroundColor:'#FF2625', color:'white', height:'50px', borderRadius:'10px', fontSize:'15px', fontWeight:'600' }} 
                className='workout-btn'>
                    {workout.bodyPart}
            </Button>
            <Button sx={{ backgroundColor:'#FF2625', color:'white',  borderRadius:'10px', fontSize:'15px', fontWeight:'600' }}
                className='workout-btn'>
                    {workout.target}
            </Button>
        </Stack>
        <Typography color='red' sx={{ fontSize: { lg: '1.5rem', xs: '.5rem'}, textTransform: 'uppercase', textShadow:'1px 1px black'}} mb='1rem' textAlign='center'>{workout.name}</Typography>

    </Link>
    </div>
  )
}

export default WorkoutCard