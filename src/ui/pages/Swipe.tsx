import React from 'react';
import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Swipe = () => {
    const handleThumbClick = (type: any) => {
        console.log(`Thumb ${type} clicked`);
    };

    const THEME = createTheme({
        typography: {
            body1: {
                'fontFamily': `"Josefin sans", sans-serif`,
                'fontSize': '20px',
                'fontWeight': '500',
                'marginBottom': '25px'
            },
            body2: {
                'fontFamily': `"Josefin sans", sans-serif`,
                'fontSize': '32px',
                'fontWeight': '400',
                'color': '#FFFFFF',
                'marginBottom': '25px'
            },
            h4: {
                'fontFamily': `"Advent Pro", sans-serif`,
                'fontSize': '60px',
                'marginBottom': '25px'
            },
        }
    })

    return (
        <>
            <ThemeProvider theme={THEME}>
                <Box
                    sx={{
                        height: '551px',
                        width: '900px',
                        borderRadius: '56px',
                        bgcolor: '#FFCA80',
                        margin: 'auto',
                        textAlign: 'center',
                        padding: 4,
                        border: '3px solid #CBCBCB',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4">
                        Name
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ width: '45%' }}>
                            <Typography variant="body1">
                                Meaning
                                <Typography variant='body2' gutterBottom>
                                    Some meaning text
                                </Typography>
                            </Typography>
                            <Typography variant="body1">
                                Description
                                <Typography variant='body2' gutterBottom>
                                    Some description text
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ width: '45%' }}>
                            <Typography variant="body1">
                                Gender
                                <Typography variant='body2' gutterBottom>
                                    Some gender text
                                </Typography>
                            </Typography>
                            <Typography variant="body1">
                                Religion
                                <Typography variant='body2' gutterBottom>
                                    Some religion text
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>

                    <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', width: '300px', border: '#000000', mt: 6 }}>
                        READ MORE
                    </Button>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Button onClick={() => handleThumbClick('down')} sx={{ color: 'red' }}>
                            <ThumbDownIcon sx={{ fontSize: '100px' }} />
                        </Button>
                        <Button onClick={() => handleThumbClick('up')} sx={{ color: 'green' }}>
                            <ThumbUpIcon sx={{ fontSize: '100px' }} />
                        </Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Swipe;
