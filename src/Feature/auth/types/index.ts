import { User } from '../../User/types';
import { LoginPayload } from '../authSlice';

export type LoginFormProps = {
    onSubmit: (values: LoginPayload) => void;
};

export type RegisterFormProps = {
    onSubmit: (values: User) => void;
};

export type ResponseAuth = {
    data?: any;
    refresh_token?: string;
    user?: User;
};
