export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const rowsPerPage = [
    { value: 100, label: 100 },
    { value: 200, label: 200 },
    { value: 500, label: 500 },
    { value: 1000, label: 1000 }
];

export const skeletonArray = Array(18).fill('');
