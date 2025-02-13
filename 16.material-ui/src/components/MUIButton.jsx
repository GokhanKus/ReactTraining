import { Button } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Kaydol</Button>
                <Button variant="contained">Kaydol</Button>
                <Button variant='outlined'>Kaydol</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button color='primary'>Giris Yap</Button>
                <Button color='error'>Giris Yap</Button>
                <Button color='info'>Giris Yap</Button>
                <Button color='secondary'>Giris Yap</Button>
                <Button color="warning" variant='contained'>Giris Yap</Button>
                <Button color="success" variant='outlined'>Giris Yap</Button>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained' color="success" startIcon={<AddCircleIcon />}>Giris Yap</Button>
                <Button size='medium' variant='contained' color="success">Giris Yap</Button>
                <Button size='large' variant='contained' color="success" endIcon={<AddCircleIcon />}>Giris Yap</Button>
            </div>
        </div>
    )
}

export default MUIButton