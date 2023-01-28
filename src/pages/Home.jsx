import React from 'react'
import { Box } from '@mui/material'

import Hero from '../components/Hero'
import Search from '../components/Search'
import Workouts from '../components/Workouts'


const Home = () => {
  return (
    <Box>
        <Hero />
        <Search />
        <Workouts />
    </Box>
  )
}

export default Home