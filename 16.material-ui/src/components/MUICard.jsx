import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lion from '../images/leone-africano.jpg'

function MUICard() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="Lion"
                    height="140"
                    image={lion}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lion
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores quasi perspiciatis, soluta nihil debitis accusamus veritatis quibusdam voluptate eligendi natus consequatur beatae. Excepturi harum vero sequi voluptatibus totam temporibus.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MUICard