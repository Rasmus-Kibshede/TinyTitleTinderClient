import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Name } from '../../types/name';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import SearchNameModal from './SearchNameModal';
import { getNames } from '../../paths/urls';

export default function SearchName() {
    const [names, setNames] = useState<Name[]>([]);
    const [selectedName, setSelectedName] = useState<Name | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchNames = async () => {
            try {
                const response = await axios.get(getNames);
                setNames(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchNames();
    }, []);

    const handleOnChange = (_: React.ChangeEvent<object>, value: string | null) => {
        if (value) {
            const selected = names.find((name) => name.nameSuggestName === value);

            if (selected) {
                setSelectedName(selected);
                setOpenModal(true);
                setOpen(false);
            }
        }
    };

    console.log("Selected name:", selectedName?.nameSuggestName);


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SearchIcon sx={{ color: '#000000', marginTop: '2%' }} />
                <Autocomplete
                    autoHighlight
                    disablePortal
                    onChange={handleOnChange}
                    open={open}
                    onInputChange={(_, value) => setOpen(!!value)}
                    options={names.map((option) => option.nameSuggestName)}
                    value={selectedName?.nameSuggestName || ''}
                    sx={{ width: 220, backgroundColor: 'transparent' }}
                    popupIcon={null}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <StyledTextField
                            {...params}
                            label='Search name'
                            variant='standard'
                        />
                    )}
                />
            </Box>
            <SearchNameModal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                    setSelectedName((prev) => prev ? { ...prev, nameSuggestName: '' } : null);
                }}
                selectedName={selectedName as Name}
            />

        </>
    );
}
const StyledTextField = styled(TextField)`
    & label.Mui-focused {
        color: black;
    }
    & .MuiInput-underline:after {
        border-bottom-color: black;
    }
`;
