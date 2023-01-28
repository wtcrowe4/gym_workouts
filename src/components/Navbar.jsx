import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/icons/dumbell.jpg'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' sx={{ gap: {sm: '122px', xs: '40px'}, mt:{ sm:'32px', xs:'20px' }}} px='20px'>
        <Link to="/">
            <img src={Logo} alt="Logo" style={{
                width: '88px', height: '88px', margin: '0 20px'
            }}/>
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to="/" style ={{ textDecoration: 'none', color: 'black', borderBottom: '2px solid red' }}>Home</Link>
            <a href="#excersises" style ={{ textDecoration: 'none', color: 'black', borderBottom: '2px solid red' }}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar