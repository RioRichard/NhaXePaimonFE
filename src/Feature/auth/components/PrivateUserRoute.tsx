
import { Navigate, useLocation } from 'react-router-dom';
import storage from '../../../utils/storage';

export function PrivateUserRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const isLoggedIn = Boolean(storage.getAccessToken());
    console.log("USER TOKEN" + storage.getAccessToken())
    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
