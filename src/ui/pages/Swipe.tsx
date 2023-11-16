import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Name } from '../../types/name';
import { NameSuggest } from '../components/NameSuggest';

const Swipe = () => {
    const [names, setNames] = useState<Name[]>([{
        //TODO: Delete this and implement the real thing when backend is ready
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
                definition: 'Definition of the meaning to the meaning of the definition'
            }
        ],
        gender: "whateves"
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

    const getBoxColor = (gender: string) => {
        switch (gender.toLowerCase()) {
            case 'female':
                return '#FFDBDB';
            case 'male':
                return '#B6EEFF';
            case 'unisex':
                return '#FFCA80';
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
                    bgcolor: getBoxColor(names[0]?.gender || 'unisex'),
                    margin: 'auto',
                    textAlign: 'center',
                    padding: 4,
                    border: '3px solid #CBCBCB',
                    marginTop: '5%'
                }}
            >

                <NameSuggest name={names[0]} />

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
        </>
    );
};

export default Swipe;
