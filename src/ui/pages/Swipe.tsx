/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Name } from '../../types/name';
import NameSuggest from '../components/NameSuggest';
import axios from 'axios';
import { getName, updateTableNames } from '../../paths/urls';
import styled from '@emotion/styled';
import { StyledBox } from '../reusables/Boxes';
import SearchNameModal from '../components/SearchNameModal';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';

const Swipe = () => {
    const [names, setNames] = useState<Name[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [likedNames, setLikedNames] = useState<number[]>([]);
    const [dislikedNames, setDislikedNames] = useState<number[]>([]);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false);
    const snackbarStore = useSnackbarDisplay();

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get(getName);
                setNames(response.data.data);
            } catch (error) {
                snackbarStore.setSnackbar(true, 'Server problems, please try again later', 'error');
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
                .catch(() => {
                    snackbarStore.setSnackbar(true, 'Server problems, please try again later', 'error');
                });
        }
    }, [isMouseOver]);

    const handleThumbClick = async (type: string) => {
        const currentNameId = names[currentIndex].nameSuggestId;

        if (!currentNameId) {
            return snackbarStore.setSnackbar(true, 'Error: Name not found', 'error');
        }

        try {
            if (type === 'up') {
                setLikedNames([...likedNames, currentNameId]);
            } else if (type === 'down') {
                setDislikedNames([...dislikedNames, currentNameId]);
            }
        } catch (error) {
            snackbarStore.setSnackbar(true, 'Error updating liked/disliked names', 'error');
        }

        const newNames = [...names];
        newNames.splice(currentIndex, 1);
        setNames(newNames);

        const newRandomIndex = Math.floor(Math.random() * newNames.length);
        setCurrentIndex(newRandomIndex);

        setIsReadMore(false);
    };

    return (
        <>
            {names.length > 0 ? (
                <StyledBox
                    gender={names[currentIndex]?.gender || 'unisex'}
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    <NameSuggest name={names[currentIndex]} isReadMore={false} />

                    <StyledReadMoreButton variant="contained" onClick={() => setIsReadMore(true)}>
                        Read more
                    </StyledReadMoreButton>

                    <>
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
                    </>
                </StyledBox>
            ) : (
                <StyledBox
                    gender='unisex'
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                >
                    <Typography variant="h4">You've seen all names!</Typography>
                </StyledBox>
            )}

            <SearchNameModal
                open={isReadMore}
                onClose={() => setIsReadMore(false)}
                selectedName={names[currentIndex]}
            />
        </>
    );
};

export default Swipe;

interface StyledButtonProps {
    buttonAction: string;
}

const StyledButtonBox = styled(Box)`
    margin-top: 2;
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
`;

const StyledButton = styled(Button) <StyledButtonProps>`
    color: ${({ buttonAction }) => (buttonAction === 'up' ? 'green' : 'red')};
    &:hover {
        background-color: transparent;
    }
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
