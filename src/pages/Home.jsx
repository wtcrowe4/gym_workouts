import React, { useState } from 'react'
import { Box } from '@mui/material'

import Hero from '../components/Hero'
import Search from '../components/Search'
import Workouts from '../components/Workouts'



const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [searchResults, setSearchResults] = useState([])

    return (
        <Box>
            <Hero />
            <Search setSearchResults={setSearchResults} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Workouts setSearchResults={setSearchResults} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    )
}

export default Home