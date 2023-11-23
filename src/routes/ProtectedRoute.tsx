import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { checkauthPath } from '../paths/urls';
import { useAuthUserStore } from '../store/user';

interface Props {
  redirectPath: string;
}

function ProtectedRoute({ redirectPath }: Props) {
  const [userAuth, setUserAuth] = useState<boolean>(false);
  const user = useAuthUserStore();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const { data } = await axios.get(checkauthPath, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setUserAuth(data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        } else {
          console.log(error);
        }
      }
    };

    if (user.authUser) {
      authCheck();
    } else {
      // mesasage here
    }
  }, [user.authUser, user.token, userAuth]);

  if (user.authUser !== null || userAuth) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
}

export default ProtectedRoute;
