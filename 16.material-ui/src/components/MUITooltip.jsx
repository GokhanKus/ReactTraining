import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';

function MUITooltip() {
    return (
        <div>
            <Stack sx={{ margin: '100px' }} spacing={10} direction="row" >
                <Tooltip title="Arrow Butonu top position" arrow placement='top'>
                    <Button>Arrow</Button>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Stack>
        </div>
    )
}

export default MUITooltip