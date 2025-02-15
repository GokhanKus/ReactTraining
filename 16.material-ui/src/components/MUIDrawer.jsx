import { Box, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'

function MUIDrawer() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Aç</Button>

            <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
                <Box sx={{ width: '300px', textAlign: 'center' }}>
                    <h1>BASLIK</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, eum facere dolorum quae in esse iusto molestiae. Quisquam maxime eum illo, repudiandae architecto facilis magnam molestiae, dicta ad fugit aliquam.</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer