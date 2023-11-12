import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { checkauthPath } from '../paths/urls';

interface Props {
  redirectPath: string;
}

function ProtectedRoute({ redirectPath }: Props) {
  const [userAuth, setUserAuth] = useState(Boolean);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const { data } = await axios.get(checkauthPath);
        console.log(data);
        setUserAuth(data.success);
      } catch (error) {
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
    return <Navigate to={redirectPath} replace />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
