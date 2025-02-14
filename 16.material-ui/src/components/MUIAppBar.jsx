import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { Button, Menu, MenuItem, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';

function MUIAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const closeMenu = () => {
        setAnchorEl(null);
    }
    const openControl = anchorEl ? true : false;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant="h6"> MUI </Typography>

                    <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                        <Button sx={{ color: '#fff' }}>Anasayfa </Button>
                        <Button sx={{ color: '#fff' }}>Hakkimizda </Button>
                        <Button sx={{ color: '#fff' }} onClick={openMenu}>Ürünler </Button>
                        <Button sx={{ color: '#fff' }}>İletişim </Button>
                    </Stack>

                    <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                        <MenuItem onClick={closeMenu}>Keyboard</MenuItem>
                        <MenuItem onClick={closeMenu}>Mouse</MenuItem>
                        <MenuItem onClick={closeMenu}>Speakers</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MUIAppBar