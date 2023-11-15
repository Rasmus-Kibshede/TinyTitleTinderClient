import React, { useEffect, useState } from 'react';
import { Box, Button, ThemeProvider, createTheme } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
import { getName } from '../../paths/urls';
import { Name } from '../../types/name';
import { NameSuggest } from '../components/NameSuggest';

const Swipe = () => {
    const [names, setNames] = useState<Name[]>([{
        name: 'John',
        origins: [
            {
                region: 'English',
                religion: 'Christianity',
                description: 'God is gracious'
            }
        ],
        meanings: [
            {
                definition: 'God is gracious'
            }
        ],
        gender: "Male"
    }]);

    useEffect(() => {
        const fetchName = async () => {
            try {
                // const response = await axios.get(getName);
                // setNames(response.data.names);
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

                    <NameSuggest name={names[0]}/>

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
