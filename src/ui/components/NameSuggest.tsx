import { Typography, Box, styled } from "@mui/material";
import { Name } from "../../types/name";

interface NameSuggestProps {
    name: Name;
    isReadMore: boolean;
}

const NameSuggest = ({ name, isReadMore }: NameSuggestProps) => {
    return (
        <>
            {name && (
                <>
                    <Typography variant="h4">{name.nameSuggestName}</Typography>
                    <StyledBox sx={{marginTop: '5%'}}>
                        {renderField("Meaning", name.origins[0]?.definition?.meaning, "No meaning available", isReadMore)}
                        {renderField("Gender", name.gender, "No gender available", isReadMore)}
                        {renderField("Description", name.origins[0]?.description, "No description available", isReadMore)}
                        {renderField("Religion", name.origins[0]?.religion, "No religion specified", isReadMore)}
                        {isReadMore && (
                            <>
                                {renderField("Namesake", name.namesakes, "No namesake specified", isReadMore)}
                                {renderField("Name Day", name.nameDays, "No name day specified", isReadMore)}
                            </>
                        )}
                    </StyledBox>
                </>
            )}
        </>
    );
};

const renderField = (label: string, value?: string, placeholder?: string, isReadMore?: boolean) => (
    <div>
        <Typography variant="body1">
            {label}
        </Typography>
        <Typography variant={isReadMore ? "h1" : "body2"}>
            {isReadMore ? (value || placeholder) : (
                value ? (
                    value.length > 20 ? `${value.substring(0, 20)}...` : value
                ) : (
                    placeholder
                )
            )}
        </Typography>
    </div>
);

export default NameSuggest;

const StyledBox = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    width: 100%;
`;
