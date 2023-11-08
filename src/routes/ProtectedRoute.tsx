import { Navigate, Outlet } from 'react-router-dom';

interface Props {
    user: boolean;
    redirectPath: string;
}

function ProtectedRoute({ user, redirectPath }: Props) {

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    } else {
        return <Outlet />;
    }
}

export default ProtectedRoute