import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Name } from '../../types/name';
import NameSuggest from '../components/NameSuggest';
import axios from 'axios';
import { getName } from '../../paths/urls';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const Swipe = () => {
    const [names, setNames] = useState<Name[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { name: routeName } = useParams<{ name: string }>();

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
        const index = names.findIndex((name) => name.nameSuggestName === routeName);
        setCurrentIndex(index >= 0 ? index : 0);
    }, [routeName, names]);

    const handleThumbClick = (type: string) => {
        const newRandomIndex = Math.floor(Math.random() * names.length);

        setCurrentIndex(newRandomIndex);

        console.log(`Thumb ${type} clicked`);

        // TODO: Remove a liked / disliked name from the list and show a new one
    };

    return (
        names.length > 0 && (
            <>
                <StyledBox
                    gender={names[currentIndex]?.gender || 'unisex'}
                >
                    <NameSuggest name={names[currentIndex]} />

                    <StyledButtonBox>
                        <StyledButton onClick={() => handleThumbClick('down')}
                            buttonAction={'down'}
                        >
                            <ThumbDownIcon sx={{ fontSize: '100px' }} />
                        </StyledButton>
                        <StyledButton onClick={() => handleThumbClick('up')}
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

export const StyledBox = styled(Box) <StyledBoxProps>`
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