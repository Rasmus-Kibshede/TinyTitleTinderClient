import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Name } from '../../types/name';
import { NameSuggest } from '../components/NameSuggest';
import axios from 'axios';
import { getName } from '../../paths/urls';

const Swipe = () => {
    const [names, setNames] = useState<Name[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get(getName);
                setNames(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchName();
    }, []);

    const handleThumbClick = (type: string) => {
        const newRandomIndex = Math.floor(Math.random() * names.length);

        setCurrentIndex(newRandomIndex);

        console.log(`Thumb ${type} clicked`);

        // TODO: Remove a liked / disliked name from the list and show a new one
    };

    const getBoxColor = (gender: string) => {
        switch (gender.toLowerCase()) {
            case 'female':
                return '#FFDBDB';
            case 'male':
                return '#B6EEFF';
            default:
                return '#FFCA80';
        }
    };

    return (
        <>
            <Box
                sx={{
                    height: '551px',
                    width: '900px',
                    borderRadius: '56px',
                    bgcolor: getBoxColor(names[currentIndex]?.gender || 'unisex'),
                    margin: 'auto',
                    textAlign: 'center',
                    padding: 4,
                    border: '3px solid #CBCBCB',
                    marginTop: '5%'
                }}
            >
                {names.length > 0 && <NameSuggest name={names[currentIndex]} />}

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Button onClick={() => handleThumbClick('down')} sx={{
                        color: 'red', '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        borderRadius: '50%'
                    }}>
                        <ThumbDownIcon sx={{ fontSize: '100px' }} />
                    </Button>
                    <Button onClick={() => handleThumbClick('up')} sx={{
                        color: 'green', '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        borderRadius: '50%'
                    }}>
                        <ThumbUpIcon sx={{ fontSize: '100px' }} />
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Swipe;
