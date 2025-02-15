import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

function MUIAlert() {
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert sx={{ width: '350px' }} severity="success" variant='filled'>This is a success Alert.</Alert>
                <Alert severity="info" variant="standard">This is an info Alert.</Alert>
                <Alert severity="warning" variant="outlined">This is a warning Alert.</Alert>
                <Alert severity="error" variant="filled">This is an error Alert.</Alert>

                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
                <Alert severity="warning" variant='filled'>
                    <AlertTitle>WARNING</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
                <Alert severity="info" variant='filled'>
                    <AlertTitle>INFO</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
            </Stack>
        </div>
    )
}

export default MUIAlert