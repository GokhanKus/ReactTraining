import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../movies';
import { Box } from '@mui/material';

function MUIAutoComplete() {
    console.log(top100Films);
    return (

        <Box>
            <Autocomplete
                options={top100Films}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </Box >
    )
}

export default MUIAutoComplete