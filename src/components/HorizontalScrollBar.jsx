import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart.jsx'

import RightArrowImg from '../assets/icons/right-arrow.png'
import LeftArrowImg from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
    return (
        <Typography onClick={()=>scrollPrev()} className='left-arrow'>
            <img src={LeftArrowImg} alt='left arrow' />
        </Typography>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
    return (
        <Typography onClick={()=>scrollNext()} className='right-arrow'>
            <img src={RightArrowImg} alt='right arrow' />
        </Typography>
    )
}

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} data={data} 
        style={{ overflowX: 'scroll', whiteSpace: 'wrap', width: '100%' }}>
            {data.map((item, index) => (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '10px', margin: '40px 100px' }}
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item}>
                        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    </Box>
            ))}
        </ScrollMenu>

    )
}

export default HorizontalScrollBar