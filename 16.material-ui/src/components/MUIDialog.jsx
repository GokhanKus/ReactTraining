import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button color="error" variant="contained" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
                <DialogContent>
                    <DialogContentText>It cannot be retrieved after data is deleted. Are you really sure you want to delete this item?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Back</Button>
                    <Button color="error" variant="contained" onClick={handleClose} autoFocus>
                        Delete Item
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MUIDialog