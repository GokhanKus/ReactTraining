import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../movies';

function MUIAutoComplete() {
    console.log(top100Films);
    return (

        <div>
            <Autocomplete
                options={top100Films}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div >
    )
}

export default MUIAutoComplete