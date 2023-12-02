/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
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
    const { name: routeName } = useParams<{ name: string }>();
    const [likedNames, setLikedNames] = useState<number[]>([]);
    const [dislikedNames, setDislikedNames] = useState<number[]>([]);
    const [isMouseOver, setIsMouseOver] = useState(false);

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

    console.log('Sending request with data:', { likedNames, dislikedNames });

    useEffect(() => {
        if (!isMouseOver) {
            axios
                .put(updateTableNames, {
                    likedNames,
                    dislikedNames,
                })
                .catch((error) => {
                    console.error('UseEffect Error updating liked/disliked names:', error);
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

        const newRandomIndex = Math.floor(Math.random() * names.length);
        setCurrentIndex(newRandomIndex);
    };

    return (
        names.length > 0 && (
            <>
                <StyledBox
                    gender={names[currentIndex]?.gender || 'unisex'}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    <NameSuggest name={names[currentIndex]} />

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
            </>
        )
    );
};

export default Swipe;

interface StyledBoxProps {
    gender: string;
}

interface StyledButtonProps {
    buttonAction: string;
}

const StyledBox = styled(Box) <StyledBoxProps>`
    height: 551px;
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