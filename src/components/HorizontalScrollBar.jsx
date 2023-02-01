import React, { useContext } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart.jsx'
import WorkoutCard from './WorkoutCard.jsx'

import RightArrowImg from '../assets/icons/right-arrow.png'
import LeftArrowImg from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <Typography className='left-arrow'>
            <img src={LeftArrowImg} alt='left arrow' onClick={()=>scrollPrev()} />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Button className='right-arrow' onClick={(e)=>scrollNext()}>
            <img src={RightArrowImg} alt='right arrow' />
        </Button>
    )
}

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} data={data} 
        style={{ overflowX: 'scroll', whiteSpace: 'wrap', width: '100%' }}>
            {data.map((item) => (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '10px', margin: '40px 100px' }}
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item}>
                        {isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> :
                           <WorkoutCard workout={item} />}
                    </Box>
            ))}
        </ScrollMenu>

    )
}

export default HorizontalScrollBar