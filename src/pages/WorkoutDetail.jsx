import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { fetchData, videoOptions, workoutOptions } from '../utils/fetchData.js'

import Detail from '../components/Detail.jsx'
import WorkoutVideos from '../components/WorkoutVideos.jsx'
import SimilarWorkouts from '../components/SimilarWorkouts.jsx'


const WorkoutDetail = () => {
    const { id } = useParams()
    const [workoutDetails, setWorkoutDetails] = useState({})
    const [workoutVideos, setWorkoutVideos] = useState([])
    const [similarWorkouts, setSimilarWorkouts] = useState([])
    const [sameEquipmentWorkouts, setSameEquipmentWorkouts] = useState([])
 
    useEffect(() => {
        const getWorkoutDetails = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youTubeUrl = 'https://youtube-search-results.p.rapidapi.com/youtube-search/'

            const workoutDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, workoutOptions)
            setWorkoutDetails(workoutDetailsData)
            
            const workoutVideosData = await fetchData(`${youTubeUrl}?q=${workoutDetailsData.name}`, videoOptions)
            setWorkoutVideos(workoutVideosData)
            
            const targetMuscle = workoutDetailsData.target
            const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${targetMuscle}`, workoutOptions)
            setSimilarWorkouts(targetMuscleData)
            
            const equipment = workoutDetailsData.equipment
            const sameEquipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${equipment}`, workoutOptions)
            setSameEquipmentWorkouts(sameEquipmentData)
            
            

        }
        getWorkoutDetails()
    }, [id])

   return (
        <Box>
            <Typography variant='h2' sx={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold', color: 'black', textShadow: '2px 2px red'}} mt='5rem' >
                Workout Details
            </Typography>
            <Detail workoutDetails={workoutDetails} />
            <WorkoutVideos workoutVideos={workoutVideos} name={workoutDetails.name}/>
            <SimilarWorkouts similarWorkouts={similarWorkouts} sameEquipmentWorkouts={sameEquipmentWorkouts}/>
        </Box>
   )
}

export default WorkoutDetail