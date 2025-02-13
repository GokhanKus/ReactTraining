import { Box, Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} divider={<Divider orientation='horizontal' flexItem />}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </Stack>
            </Box>
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} divider={<Divider orientation='vertical' flexItem />}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </Stack>
            </Box>
        </>
    )
}
//aralarda bosluk olsun mu, ne kadar olsun, aralara cizgi atılsın mı, elemanlar yan yana mı alt altamı sıralansın pencere boyutu xs ise column diger durumlarda row olsun
//bu gibi ayarlamalar icin material ui tarafından saglanan Stack yapısı kullanilabilir
export default MUIStack