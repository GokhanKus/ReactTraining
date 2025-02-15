import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { Badge, Stack } from '@mui/material';

function MUIBadge() {
    return (
        <div>
            <Stack sx={{ margin: '50px 10px' }} spacing={10} direction="row">
                <Badge sx={{ transform: "scale(1.5)" }} badgeContent={14} color="secondary" max={9}>
                    <EmailIcon fontSize='large' />
                </Badge>
                <Badge sx={{ transform: "scale(1.5)" }} badgeContent={6} color="primary">
                    <EmailIcon fontSize='large' />
                </Badge>
            </Stack>
        </div>
    )
}

export default MUIBadge