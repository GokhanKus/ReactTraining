import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel';

function MUITabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Kisisel Bilgiler" />
                        <Tab label="Egitim Bilgileri" />
                        <Tab label="Iletisim" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Gokhan Kus
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Kirikkale Uni.
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    gkus198@gmail.com
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default MUITabs