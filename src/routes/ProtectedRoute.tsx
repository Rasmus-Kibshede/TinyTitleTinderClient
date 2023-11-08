import { Navigate, Outlet } from 'react-router-dom';
import { User } from '../types/userDatatype';

interface Props {
    user: User | null;
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