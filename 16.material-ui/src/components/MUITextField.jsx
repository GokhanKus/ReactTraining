import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

function MUITextField() {
    return (
        <div>
            <div >
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsim" size="small" variant='outlined' color='warning' />
                <TextField label="İsim" size="small" variant="filled" color='warning' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="İsim" size='medium' variant='outlined' color="info" helperText="İsminizi giriniz" />
                <TextField label="Sifre" size="small" variant="filled" color="primary" helperText='Sifrenizi giriniz' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField value="+13651891810" disabled variant='outlined' color="info" helperText='TCNO' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField slotProps={{ input: { readOnly: true } }} defaultValue="Hello World" variant='outlined' color="info" helperText='readonly area' />
            </div>

            <div style={{ marginBottom: '30px' }}>

                <TextField id="input-with-icon-textfield" size="small" label="kg cinsinden" slotProps={{
                    input: {
                        endAdornment: (<InputAdornment position="end">KG</InputAdornment>),
                    },
                }} variant="standard" />
            </div>

            <div style={{ marginBottom: '30px' }}>

                <TextField id="input-with-icon-textfield" label="kisi ismi" slotProps={{
                    input: {
                        startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>),
                    },
                }} variant="standard" />
            </div>

        </div>
    )
}

export default MUITextField