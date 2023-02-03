import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart.jsx'
import WorkoutCard from './WorkoutCard.jsx'

import RightArrowImg from '../assets/icons/right-arrow.png'
import LeftArrowImg from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <Typography className='left-arrow' onClick={()=>scrollPrev()}>
            <img src={LeftArrowImg} alt='left arrow'  />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Typography className='right-arrow' onClick={()=>scrollNext()}
            onMouseOver={()=>scrollNext()}
        >
            <img src={RightArrowImg} alt='right arrow' />
        </Typography>
    )
}

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} data={data} className='scroll-menu'> 
        
            {data.map((item) => (
                <>
                    {isBodyPart ? 
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '10px', margin: '40px 100px' }}
                            key={item.id || item}
                            itemID={item.id || item}
                            title={item}>
                                <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
                        </Box> :
                        <Box>
                            {/* add styling and data here for workout cards on detail page */}
                            <WorkoutCard workout={item} />
                        </Box>
                }
                </>
            ))}
        </ScrollMenu>

    )
}

export default HorizontalScrollBar