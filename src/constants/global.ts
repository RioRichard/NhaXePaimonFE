export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const rowsPerPage = [
    { value: 100, label: 100 },
    { value: 200, label: 200 },
    { value: 500, label: 500 },
    { value: 1000, label: 1000 }
];

export const sorts = [
    { value: '_id.asc', label: 'Mã - A to Z' },
    { value: '_id.desc', label: 'Mã - Z to A' },
    { value: 'name.asc', label: 'Tên - A to Z' },
    { value: 'name.desc', label: 'Tên - Z to A' }
];

export const ACCESS_TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'refreshToken';
export const ADMIN_ACCESS_TOKEN_KEY = 'adminToken';
export const ADMIN_REFRESH_TOKEN_KEY = 'adminRefreshToken';


export const skeletonArray = Array(18).fill('');
