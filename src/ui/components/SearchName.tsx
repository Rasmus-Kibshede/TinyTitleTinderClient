
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getNames } from '../../paths/urls';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Name } from '../../types/name';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

export default function ComboBox() {
    const [names, setNames] = useState<Name[]>([]);

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get(getNames);
                setNames(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchName();
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1%', flexGrow: 10 }}>
                <SearchIcon sx={{ color: '#000000', marginBottom: '1%' }} />
                <Autocomplete
                    disablePortal
                    id="standard-basic"
                    options={names.map((option) => option.nameSuggestName)}
                    sx={{ width: 300, backgroundColor: 'transparent', }}
                    renderInput={(params) => <TextField {...params} label="Search name" variant='standard' sx={{ color: '#000000' }} />}
                />
            </Box>
        </>
    );
}
