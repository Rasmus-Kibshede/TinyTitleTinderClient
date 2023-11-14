import React, { useEffect, useState } from 'react';
import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
import { getName } from '../../paths/urls';

const Swipe = () => {
    const [name, setName] = useState('');
    const [meanings, setMeanings] = useState<any[]>([])
    const [origins, setOrigins] = useState<any[]>([])
    const [gender, setGender] = useState('');

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get(getName);
                setName(response.data.data.nameSuggestName);
                setMeanings(response.data.data.meanings);
                setOrigins(response.data.data.origins);
                setGender(response.data.data.gender);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchName();
    }, []);

    // TODO: Implement some kinda thing that handles liked and disliked names
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
                        // display: 'flex',
                        // flexDirection: 'column',
                        // alignItems: 'center',
                        marginTop: '5%'
                    }}
                >
                    <Typography variant="h4">
                        {name}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ width: '45%' }}>
                            {meanings.length > 0 && (
                                <Typography variant="body1">
                                    Meaning
                                    <Typography variant="body2">
                                        {meanings[0].definition.length > 20
                                            ? `${meanings[0].definition.substring(0, 20)}...`
                                            : meanings[0].definition}
                                    </Typography>
                                </Typography>
                            )}
                            {origins.length > 0 && (
                                <Typography variant="body1">
                                    Description
                                    <Typography variant="body2">
                                        {origins[0].description.length > 20
                                            ? `${origins[0].description.substring(0, 20)}...`
                                            : origins[0].description}
                                    </Typography>
                                </Typography>
                            )}
                        </Box>
                        <Box sx={{ width: '45%' }}>
                            <Typography variant="body1">
                                Gender
                                <Typography variant='body2'>
                                    {gender}
                                </Typography>
                            </Typography>
                            <Typography variant="body1">
                                {origins.length > 0 && (
                                    <Typography variant="body1">
                                        Religion
                                        <Typography variant="body2">
                                            {origins[0].religion.length > 20
                                                ? `${origins[0].religion.substring(0, 20)}...`
                                                : origins[0].religion}
                                        </Typography>
                                    </Typography>
                                )}
                            </Typography>
                        </Box>
                    </Box>

                    <Button variant="contained" sx={{
                        backgroundColor: 'white', color: 'black', width: '300px', mt: 6, boxShadow: '0px 3px 6px rgba(0, 3, 1, 0.50)', '&:hover': {
                            backgroundColor: '#f2f2f2',
                        },
                    }}>
                        READ MORE
                    </Button>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Button onClick={() => handleThumbClick('down')} sx={{
                            color: 'red', '&:hover': {
                                backgroundColor: '#FFCA80',
                            },
                            borderRadius: '50%'
                        }}>
                            <ThumbDownIcon sx={{ fontSize: '100px' }} />
                        </Button>
                        <Button onClick={() => handleThumbClick('up')} sx={{
                            color: 'green', '&:hover': {
                                backgroundColor: '#FFCA80',
                            },
                            borderRadius: '50%'
                        }}>
                            <ThumbUpIcon sx={{ fontSize: '100px' }} />
                        </Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Swipe;
