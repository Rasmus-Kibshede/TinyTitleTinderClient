import Modal from '@mui/material/Modal';
import { StyledBox } from '../reusables/Boxes';
import NameSuggest from './NameSuggest';
import { Name } from '../../types/name';

interface SearchNameModalProps {
    open: boolean;
    onClose: () => void;
    selectedName: Name;
}

const SearchNameModal = ({ open, onClose, selectedName }: SearchNameModalProps) => {
    return (
        <Modal keepMounted open={open} onClose={onClose}>
            <StyledBox gender={selectedName?.gender || 'unisex'}>
                <NameSuggest name={selectedName} isReadMore={true} ></NameSuggest>
            </StyledBox>
        </Modal>
    );
};

export default SearchNameModal;
