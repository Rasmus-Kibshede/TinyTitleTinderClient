/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Name } from '../../types/name';
import NameSuggest from '../components/NameSuggest';
import axios from 'axios';
import { getName, updateTableNames } from '../../paths/urls';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const Swipe = () => {
    const [names, setNames] = useState<Name[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // TODO: Remove when read more modal is implemented
    const { name: routeName } = useParams<{ name: string }>();
    const [likedNames, setLikedNames] = useState<number[]>([]);
    const [dislikedNames, setDislikedNames] = useState<number[]>([]);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false);

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

    useEffect(() => {
        if (!isMouseOver) {
            axios
                .put(updateTableNames, {
                    likedNames,
                    dislikedNames,
                })
                .then(() => {
                    setLikedNames([]);
                    setDislikedNames([]);
                })
                .catch((error) => {
                    console.error('Hook error updating liked/disliked names:', error);
                });
        }
    }, [isMouseOver]);

    useEffect(() => {
        const index = names.findIndex((name) => name.nameSuggestName === routeName);
        setCurrentIndex(index >= 0 ? index : 0);
    }, [routeName, names]);

    const handleThumbClick = async (type: string) => {
        const currentNameId = names[currentIndex].nameSuggestId;

        if (!currentNameId) {
            console.error('Name not found');
            return;
        }

        try {
            if (type === 'up') {
                setLikedNames([...likedNames, currentNameId]);
            } else if (type === 'down') {
                setDislikedNames([...dislikedNames, currentNameId]);
            }
        } catch (error) {
            console.error('Error updating liked/disliked names:', error);
        }

        const newNames = [...names];
        newNames.splice(currentIndex, 1);
        setNames(newNames);

        const newRandomIndex = Math.floor(Math.random() * newNames.length);
        setCurrentIndex(newRandomIndex);

        setIsReadMore(false);
    };

    const handleReadMoreClick = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <>
            {names.length > 0 ? (
                <StyledBox
                    gender={names[currentIndex]?.gender || 'unisex'}
                    height={isReadMore ? 850 : 551}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    <NameSuggest name={names[currentIndex]} isReadMore={isReadMore} />

                    <StyledReadMoreButton variant="contained" onClick={handleReadMoreClick}>
                        {isReadMore ? 'Close' : 'Read More'}
                    </StyledReadMoreButton>

                    <StyledButtonBox>
                        <StyledButton
                            onClick={() => handleThumbClick('down')}
                            buttonAction={'down'}
                        >
                            <ThumbDownIcon sx={{ fontSize: '100px' }} />
                        </StyledButton>
                        <StyledButton
                            onClick={() => handleThumbClick('up')}
                            buttonAction={'up'}
                        >
                            <ThumbUpIcon sx={{ fontSize: '100px' }} />
                        </StyledButton>
                    </StyledButtonBox>


                </StyledBox>
            ) : (
                <StyledBox gender='unisex'
                    height={551}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}>
                    <Typography variant="h4">
                        You've seen all names!
                    </Typography>
                </StyledBox>
            )}
        </>
    );
};

export default Swipe;

interface StyledBoxProps {
    gender: string;
    height: number;
}

interface StyledButtonProps {
    buttonAction: string;
}

const StyledBox = styled(Box) <StyledBoxProps>`
    height: ${({ height }) => `${height}px`};
    width: 900px;
    border-radius: 56px;
    margin: auto;
    text-align: center;
    padding: 4;
    border: 3px solid #CBCBCB;
    margin-top: 5%;
    background-color: ${({ gender }) => {
        switch (gender.toLowerCase()) {
            case 'female':
                return '#FFDBDB';
            case 'male':
                return '#B6EEFF';
            default:
                return '#FFCA80';
        }
    }};
    `;

const StyledButtonBox = styled(Box)`
    margin-top: 2;
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    `;

const StyledButton = styled(Button) <StyledButtonProps>`
    color: ${({ buttonAction }) => buttonAction === 'up' ? 'green' : 'red'};
    &:hover {
        background-color: transparent;
    };
    border-radius: 50%;
    `;

const StyledReadMoreButton = styled(Button)`
    background-color: white;
    color: black;
    width: 300px;
    box-shadow: 0px 3px 6px rgba(0, 3, 1, 0.50);
    &:hover {
        background-color: #f2f2f2;
    }
`;