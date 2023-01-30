import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const WorkoutVideos = ({ workoutVideos, name }) => {

  let videos = workoutVideos.items
  const numberOfVideosToShow = 1

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <Typography variant='h4' sx={{color: 'red', fontWeight: 'bold', textShadow: '2px 2px black', textAlign: 'center'}} mt='4rem' >
        Watch <span style={{ textTransform: 'capitalize' }}>{workoutVideos.correctedQuery}</span> Videos
      </Typography>
      <Stack sx={{ gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}} direction={{ lg: 'row', xs: 'column' }} >
        {videos?.slice(0,numberOfVideosToShow).map((video) => {
          return (
              <Stack key={video.id} sx={{flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
                <iframe
                  className='video-iframe'
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(2)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  width='300'
                  height='200'
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading='lazy'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target='_blank' rel='noreferrer' className='video-title-link'>
                  <Typography variant='h6' sx={{color: 'black', fontWeight: 'bold', textShadow: '1px 1px gray'}}>
                    {video.title}
                  </Typography>
                </a>
              </Stack>
          )
        })}
      </Stack>
      </Box>
  )
}

export default WorkoutVideos