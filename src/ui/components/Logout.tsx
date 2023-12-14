import { useAuthUserStore } from '../../store/user';
import { logout } from '../../paths/urls';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';

function Logout() {
  const user = useAuthUserStore();
  const navigate = useNavigate();
  const snackbarStore = useSnackbarDisplay();

  const logoutUser = async () => {
    await axios
      .get(logout, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        user.resetAuthUser();
      })
      .catch((err) => {
        snackbarStore.setSnackbar(true, err.response.data.message, 'error');
      });

    snackbarStore.setSnackbar(true, 'You are logged out', 'success');
    navigate('/signin');
  };

  return (
    <Button onClick={logoutUser} variant="contained" sx={{margin: '0px 10px'}}>
      Logout
    </Button>
  );
}

export default Logout;
