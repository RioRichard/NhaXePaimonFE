
import { Navigate, useLocation } from 'react-router-dom';
import storage from '../../../utils/storage';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectIsAdminUser } from '../authSlice';
import { useEffect } from 'react';
import { authActions } from '../authSlice';
import authApi from '../../../api/authApi';
export function PrivateAdminRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const isLoggedIn = Boolean(storage.getAdminAccessToken());
    const currentUser = useAppSelector(selectIsAdminUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log();

        (async () => {
            if (isLoggedIn && !currentUser) {
                const user = await authApi.getMeAdmin();
                dispatch(authActions.setAdminMe(user));
            }
        })();
    }, [dispatch, isLoggedIn]);

    if (!isLoggedIn) {
        return <Navigate to="/adminLogin" state={{ from: location }} replace />;
    }
    return children;
}
