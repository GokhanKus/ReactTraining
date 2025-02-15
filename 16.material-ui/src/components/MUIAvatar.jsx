import { Avatar, Stack } from '@mui/material'
import React from 'react'

function MUIAvatar() {
    return (
        <div>
            <Stack sx={{ margin: '25px 10px' }} spacing={5} direction="row">
                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
                <Avatar sx={{ bgcolor: 'purple' }}>OP</Avatar>
                <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/68.jpg" />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/68.jpg" />
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/70.jpg" />
            </Stack>
        </div>
    )
}

export default MUIAvatar