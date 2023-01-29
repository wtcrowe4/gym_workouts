import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { workoutOptions, fetchData } from '../utils/fetchData.js'

import WorkoutCard from './WorkoutCard.jsx'

const Workouts = ({ workouts, setWorkoutss, bodyPart, setBodyPart }) => {
  
    const [currentPage, setCurrentPage] = useState(1)
    const [workoutsPerPage] = useState(10)

    const indexOfLastWorkout = currentPage * workoutsPerPage
    const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage
    const currentWorkouts = workouts.slice(indexOfFirstWorkout, indexOfLastWorkout)

    const paginate = (e, vaule) => {
        setCurrentPage(vaule)
        window.scrollTo({top: 1800, behavior: 'smooth'})
    }

    useEffect(() => {
        
    }, [])

  return (
    <Box 
        id='workouts' 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%', 
            mt: '1rem', 
            p: '20px' }}>
        <Typography variant='h3' mb='1rem'>
            Showing {workouts.length} results for {workouts={bodyPart} ? bodyPart : 'all'}
        </Typography> 
        <Stack 
            direction={{ lg: 'row', xs: 'column' }} 
            spacing={{ lg: '1rem', xs: '0' }} 
            sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {currentWorkouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
            ))}   
        </Stack>
        <Stack sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', mt: '1rem' }}>
            {workouts.length > workoutsPerPage && (
                <Pagination 
                    count={Math.ceil(workouts.length / workoutsPerPage)} 
                    color='primary' 
                    defaultPage={1} 
                    page={currentPage}
                    onChange={paginate}  />
            )}
        </Stack>
        

            
    </Box>
  )
}

export default Workouts