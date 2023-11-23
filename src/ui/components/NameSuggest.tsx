import { Typography, Box, Button, styled } from "@mui/material"
import { Name } from "../../types/name"

const NameSuggest = ({ name }: { name: Name }) => {
    return (
        <>
            <Typography variant="h4">
                {name.nameSuggestName}
            </Typography>
            <StyledBox>
                <StyledBoxInner>
                    {name.meanings.length > 0 && (
                        <Typography variant="body1">
                            Meaning
                            <Typography variant="body2">
                                {name.meanings[0].definition.length > 20
                                    ? `${name.meanings[0].definition.substring(0, 20)}...`
                                    : name.meanings[0].definition}
                            </Typography>
                        </Typography>
                    )}
                    {name.origins.length > 0 && (
                        <Typography variant="body1">
                            Description
                            <Typography variant="body2">
                                {name.origins[0].description.length > 20
                                    ? `${name.origins[0].description.substring(0, 20)}...`
                                    : name.origins[0].description}
                            </Typography>
                        </Typography>
                    )}
                </StyledBoxInner>
                <StyledBoxInner>
                    <Typography variant="body1">
                        Gender
                        <Typography variant='body2'>
                            {name.gender}
                        </Typography>
                    </Typography>
                    <Typography variant="body1">
                        {name.origins.length > 0 && (
                            <Typography variant="body1">
                                Religion
                                <Typography variant="body2">
                                    {name.origins[0].religion.length > 20
                                        ? `${name.origins[0].religion.substring(0, 20)}...`
                                        : name.origins[0].religion}
                                </Typography>
                            </Typography>
                        )}
                    </Typography>
                </StyledBoxInner>
            </StyledBox>

            <StyledButton variant="contained">
                READ MORE
            </StyledButton>
        </>
    )
}

export default NameSuggest;

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `

const StyledButton = styled(Button)`
    background-color: white;
    color: black;
    width: 300px;
    box-shadow: 0px 3px 6px rgba(0, 3, 1, 0.50);
    &:hover {
        background-color: #f2f2f2;
    };
    `

const StyledBoxInner = styled(Box)`
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    width: 45%;
    `