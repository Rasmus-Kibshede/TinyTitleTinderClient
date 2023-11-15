import { Typography, Box, Button } from "@mui/material"
import { Name } from "../../types/name"

export const NameSuggest = ({ name }: { name: Name }) => {
    return (
        <>
            <Typography variant="h4">
                {name.name}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ width: '45%' }}>
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
                </Box>
                <Box sx={{ width: '45%' }}>
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
                </Box>
            </Box>

            <Button variant="contained" sx={{
                backgroundColor: 'white', color: 'black', width: '300px', mt: 6, boxShadow: '0px 3px 6px rgba(0, 3, 1, 0.50)', '&:hover': {
                    backgroundColor: '#f2f2f2',
                },
            }}>
                READ MORE
            </Button>
        </>
    )
}


