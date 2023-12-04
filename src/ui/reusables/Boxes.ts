import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface StyledBoxProps {
    gender: string;
}

export const StyledBox = styled(Box) <StyledBoxProps>`
    height: fit-content;
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