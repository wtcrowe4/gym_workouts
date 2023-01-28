import React from 'react'
import { Box } from '@mui/material'

import BodyPart from './BodyPart.jsx'

const HorizontalScrollBar = ({ data }) => {
    return (
        <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap', width: '100%' }}>
            {data.map((item, index) => (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '10px', margin: '10px' }}
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item}>
                        <BodyPart item={item} />
                    </Box>
            ))}
        </div>

    )
}

export default HorizontalScrollBar