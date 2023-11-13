import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { checkauthPath } from '../paths/urls';

interface Props {
  redirectPath: string;
}

function ProtectedRoute({ redirectPath }: Props) {
  const [userAuth, setUserAuth] = useState<boolean>(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const { data } = await axios.get(checkauthPath);
        setUserAuth(data.success);
      } catch (error) {
        //Snackbar here when it is on global reach
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        } else {
          console.log(error);
        }
      }
    };

    authCheck();
  }, []);

  if (userAuth) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
}

export default ProtectedRoute;