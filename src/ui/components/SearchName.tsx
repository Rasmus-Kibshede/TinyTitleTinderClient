import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getNames } from '../../paths/urls';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Name } from '../../types/name';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SearchName() {
    const [names, setNames] = useState<Name[]>([]);
    const navigate = useNavigate();

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

    const handleOnChange = (_: React.ChangeEvent<object>, value: string | null) => {
        if (value) {
            navigate(`/swipe/${value}`);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SearchIcon sx={{ color: '#000000', marginBottom: '1%' }} />
                <Autocomplete
                    autoHighlight
                    disablePortal
                    onChange={handleOnChange}
                    options={names.map((option) => option.nameSuggestName)}
                    sx={{ width: 220, backgroundColor: 'transparent', }}
                    renderInput={(params) =>
                        <TextField {...params}
                            label="Search name"
                            variant='standard'
                            sx={{ color: '#000000' }} />}
                />
            </Box>
        </>
    );
}
