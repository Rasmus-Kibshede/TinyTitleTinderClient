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
    try {
      await axios.get(logout, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      user.resetAuthUser();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      } else {
        console.log(error);
      }
    }

    snackbarStore.setSnackbar(true, 'You are logged out', 'success');
    navigate('/signin');
  };

  return (
    <Button onClick={logoutUser} variant="contained">
      Logout
    </Button>
  );
}

export default Logout;