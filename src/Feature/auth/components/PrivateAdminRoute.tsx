
import { Navigate, useLocation } from 'react-router-dom';
import storage from '../../../utils/storage';

export function PrivateAdminRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const isLoggedIn = Boolean(storage.getAdminAccessToken());
    if (!isLoggedIn) {
        return <Navigate to="/adminLogin" state={{ from: location }} replace />;
    }
    return children;
}
