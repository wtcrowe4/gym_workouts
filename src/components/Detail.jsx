import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImg from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImg from '../assets/icons/equipment.png'



const Detail = ({ workoutDetails }) => {
    const { bodyPart, gifUrl, name, target, equipment } = workoutDetails

    const clickableDetails = [
        {
            name: bodyPart,
            icon: BodyPartImg,
            //link:
        }, {
            name: target,
            icon: TargetImg,
            //link:
        }, {
            name: equipment,
            icon: EquipmentImg,
            //link:
        }
    ]
    
    
    return (
        <Stack gap='50px' sx={{flexDirection:{ lg: 'row', sm: 'column'}, p:'20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} width='300px' height='300px' loading='lazy' className='detail-image' />
            <Stack sx={{flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>{name}</Typography>
                {clickableDetails.map((detail) => {
                    return (
                        <Stack key={detail.name} gap='10px' sx={{flexDirection: 'row', alignItems: 'center'}}>
                            <Button sx={{padding: '0px'}}>
                                <img src={detail.icon} alt='body-part' width='30px' height='30px' loading='lazy' />
                            </Button>
                            <Typography variant='h6'>{detail.name}</Typography>
                        </Stack>
                    )})
                }
            </Stack>
            <Typography variant='h6' sx={{textAlign: 'center'}}>
                The {name} is a {bodyPart} exercise that primarily targets the {target} and is done using {equipment}.
            </Typography>        
        </Stack>
  )
}

export default Detail