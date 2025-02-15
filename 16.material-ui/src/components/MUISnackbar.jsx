import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>KAPAT</Button>
            <IconButton
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
        </>
    );

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Bilgilendirme Mesaji"
                action={action}
            />
        </div>
    )
}

export default MUISnackbar