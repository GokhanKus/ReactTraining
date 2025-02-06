import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) {
    return (
        <Container maxWidth="lg">
            {children} {/*children bizim <header>'ımız */}
        </Container>
    )
}

export default PageContainer