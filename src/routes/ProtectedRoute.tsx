import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { checkAuthPath } from '../paths/urls';
import { useAuthUserStore } from '../store/user';
import { useSnackbarDisplay } from '../store/snackbarDisplay';

interface Props {
  redirectPath: string;
}

function ProtectedRoute({ redirectPath }: Props) {
  const [userAuth, setUserAuth] = useState<boolean>(false);
  const user = useAuthUserStore();
  const snackbarStore = useSnackbarDisplay();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const { data } = await axios.get(checkAuthPath, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setUserAuth(data.data);
      } catch (error) {
        snackbarStore.setSnackbar(true, 'Access not granted', 'error');
      }
    };

    if (user.authUser) {
      authCheck();
    } else {
      snackbarStore.setSnackbar(true, 'Access not granted', 'error');
    }
  }, [user.authUser, user.token, userAuth]);

  if (user.authUser !== null || userAuth) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
}

export default ProtectedRoute;
