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
 
    useEffect(() => {
        const getWorkoutDetails = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youTubeUrl = 'https://youtube-search-results.p.rapidapi.com/youtube-search/'

            const workoutDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, workoutOptions)
            
            const workoutVideosData = await fetchData(`${youTubeUrl}?q=${workoutDetailsData.name}`, videoOptions)
            console.log(workoutVideosData)

            setWorkoutDetails(workoutDetailsData)
            setWorkoutVideos(workoutVideosData)
        }
        getWorkoutDetails()
    }, [id])

   return (
        <Box>
            <Detail workoutDetails={workoutDetails} />
            <WorkoutVideos workoutVideos={workoutVideos} name={workoutDetails.name}/>
            <SimilarWorkouts similarWorkouts={similarWorkouts}/>
        </Box>
   )
}

export default WorkoutDetail