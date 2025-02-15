import React from 'react'
import images from '../imageData'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function MUIImageList() {
    return (
        <div>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {
                    images && images.map((image, index) => (
                        <ImageListItem key={index}>
                            <img
                                srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${image.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={image.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={image.title}
                                subtitle={image.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${image.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </div>
    )
}

export default MUIImageList