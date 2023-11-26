import { Typography, Box, Button, styled } from "@mui/material";
import { Name } from "../../types/name";

const NameSuggest = ({ name }: { name: Name }) => {
    return (
        <>
            <Typography variant="h4">{name.nameSuggestName}</Typography>
            <StyledBox>
                <StyledBoxInner>
                    {renderField("Meaning", name.origins[0]?.definition?.meaning, "No meaning available")}
                    {renderField("Description", name.origins[0]?.description, "No description available")}
                </StyledBoxInner>
                <StyledBoxInner>
                    {renderField("Gender", name.gender)}
                    {renderField("Religion", name.origins[0]?.religion, "No religion specified")}
                </StyledBoxInner>
            </StyledBox>
            <StyledButton variant="contained">READ MORE</StyledButton>
        </>
    );
};

const renderField = (label: string, value?: string, placeholder?: string) => (
    <div>
        <Typography variant="body1">
            {label}
        </Typography>
        <Typography variant="body2">
            {value ? (
                value.length > 20 ? `${value.substring(0, 20)}...` : value
            ) : (
                placeholder
            )}
        </Typography>
    </div>

);

export default NameSuggest;

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const StyledButton = styled(Button)`
    background-color: white;
    color: black;
    width: 300px;
    box-shadow: 0px 3px 6px rgba(0, 3, 1, 0.50);
    &:hover {
        background-color: #f2f2f2;
    }
`;

const StyledBoxInner = styled(Box)`
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    width: 45%;
`;
