import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'


const Search = () => {
  return (
        <Stack alignItems='center' mt='30rem' justifyContent='center' p='20px'>
            <Typography fontWeight={600} sx={{ fontSize: { lg: '2rem', xs: '1rem'}}} mb='1rem' textAlign='center'>Find the Workout for You</Typography>
            <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <TextField sx={{ width: { lg: '30rem', xs: '100%' }, mr: { lg: '1rem', xs: '0' } }} id="outlined-basic" label="Search Workouts" variant="outlined" />
                <Button sx={{ width: { lg: '10rem', xs: '100%' }, mt: { lg: '0', xs: '1rem' }, backgroundColor:'#FF2625', color:'white', height:'50px', borderRadius:'10px', fontSize:'20px', fontWeight:'600' }} variant="contained">Search</Button>
            </Box>

        </Stack>
    )
}

export default Search