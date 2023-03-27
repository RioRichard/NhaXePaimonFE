import { ACCESS_TOKEN_KEY,REFRESH_TOKEN_KEY, ADMIN_REFRESH_TOKEN_KEY, ADMIN_ACCESS_TOKEN_KEY } from "../constants/global";

const storage = {
    //user Token Management
    getAccessToken: () => {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },
    setAccessToken: (token: string) => {
        return localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },
    getRefershToken: () => {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    },
    setRefershToken: (token: string) => {
        return localStorage.setItem(REFRESH_TOKEN_KEY, token);
    },
    clearToken: () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    },
    //admin Token Management
    getAdminAccessToken: () => {
        return localStorage.getItem(ADMIN_ACCESS_TOKEN_KEY);
    },
    setAdminAccessToken: (token: string) => {
        return localStorage.setItem(ADMIN_ACCESS_TOKEN_KEY, token);
    },
    getAdminRefershToken: () => {
        return localStorage.getItem(ADMIN_REFRESH_TOKEN_KEY);
    },
    setAdminRefershToken: (token: string) => {
        return localStorage.setItem(ADMIN_REFRESH_TOKEN_KEY, token);
    },
    clearAdminToken: () => {
        localStorage.removeItem(ADMIN_ACCESS_TOKEN_KEY);
        localStorage.removeItem(ADMIN_REFRESH_TOKEN_KEY);
    }
};
export default storage;
