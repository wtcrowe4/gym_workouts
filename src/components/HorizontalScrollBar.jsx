import React from 'react'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart.jsx'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu style={{ overflowX: 'scroll', whiteSpace: 'wrap', width: '100%' }}>
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