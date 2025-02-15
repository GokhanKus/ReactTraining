import { Box } from '@mui/material';
import React from 'react'

function CustomTabPanel(props) {
    const { value, index, children } = props;
    return (
        <div>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    )
}

export default CustomTabPanel