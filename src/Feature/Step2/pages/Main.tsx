import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

function Step2() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                <Div>{"This div's text looks like that of a button."}</Div>;
            </Box>
        </Container>
    )
}

export default React.memo(Step2);