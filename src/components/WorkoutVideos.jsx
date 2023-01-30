import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const WorkoutVideos = (workoutVideos, name) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <Typography variant='h4' sx={{color: 'red', fontWeight: 'bold', textTransform: 'uppercase', textShadow: '2px 2px black'}}>
        Watch <span style={{ textTransform: 'capitalize' }}></span> Videos
      </Typography>
      <Stack sx={{flexDirection: 'row', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {workoutVideos.map((video) => {
          return (
            <iframe
              key={video.id}
              width='300'
              height='200'
              src={video.url}
              title={video.name}
              loading='lazy'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          )
        })}
      </Stack>
      </Box>
  )
}

export default WorkoutVideos