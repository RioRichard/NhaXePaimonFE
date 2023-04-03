
import { Navigate, useLocation } from 'react-router-dom';
import storage from '../../../utils/storage';
import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import { selectIsUser } from '../authSlice';
import { useEffect } from 'react';
import { authActions } from '../authSlice';
import authApi from '../../../api/authApi';

export function PrivateUserRoute({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const isLoggedIn = Boolean(storage.getAccessToken());
    const currentUser = useAppSelector(selectIsUser);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (async () => {
            if (isLoggedIn && !currentUser) {
                const user = await authApi.getMe();
                dispatch(authActions.setMe(user));
            }
        })();
    }, [dispatch, isLoggedIn]);


    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
