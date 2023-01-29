import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { workoutOptions, fetchData } from '../utils/fetchData.js'

import HorizontalScrollBar from './HorizontalScrollBar.jsx'


const Search = ({ workouts, setWorkouts, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const getBodyParts = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', workoutOptions)
            // const equipmentData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/equipmentList', workoutOptions)

            setBodyParts(['all', ...bodyPartData])
            // setEquipment(['all', ...equipmentData])
        }
        getBodyParts()
    }, [])

    const handleSearch = async () => {
        if(search){
            console.log(search)
            const workoutData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', workoutOptions)
            
            const searchedWorkouts = workoutData.filter((workout) => 
                workout.name.toLowerCase().includes(search) ||
                workout.target.toLowerCase().includes(search) ||
                workout.equipment.toLowerCase().includes(search) ||
                workout.bodyPart.toLowerCase().includes(search))
            
            setWorkouts(searchedWorkouts)
            console.log(searchedWorkouts)
            setSearch('')
        }
    }

    



    return (
        <Stack alignItems='center' mt='30rem' justifyContent='center' p='20px'>
            <Typography fontWeight={600} sx={{ fontSize: { lg: '2rem', xs: '1rem'}}} mb='1rem' textAlign='center'>Find the Workout for You</Typography>
            <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <TextField sx={{ width: { lg: '30rem', xs: '100%' }, mr: { lg: '1rem', xs: '0' } }} label="Search Workouts" variant="outlined"
                    // style = {{ "&.MuiOutlinedInputRoot": { "&.Mui-focused fieldset": { borderColor: "red" } } }}  
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase()) } />
                <Button sx={{ 
                    width: { lg: '10rem', xs: '100%' }, mt: { lg: '0', xs: '1rem' }, 
                    backgroundColor:'#FF2625', color:'white', height:'50px', borderRadius:'10px', fontSize:'20px', fontWeight:'600' }} 
                    variant="contained"
                    onClick={handleSearch}
                    className='search-btn'>
                        Search
                    </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>

        </Stack>
    )
}

export default Search