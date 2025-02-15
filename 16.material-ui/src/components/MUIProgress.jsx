import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function MUIProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <LinearProgress color="secondary" variant="determinate" value={progress} />

            <Stack sx={{ margin: '100px 40px', color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
        </div>
    )
}

export default MUIProgress