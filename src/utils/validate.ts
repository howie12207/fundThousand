export const isRequired = (value: string) => {
    value = value.trim();
    if (value === null || value === undefined || value === '') return false;
    return true;
};

export const onlyNumber = (value: string) => {
    return /^(\d+)*$/.test(value);
};

export const isCellphone = (value: string) => {
    return /^((09)+\d{8})$/.test(value);
};

export const isIdNumber = (value: string) => {
    if (!value) return false;
    value = value.toUpperCase();
    const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    const A1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3];
    const A2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5];
    const Mx = [9, 8, 7, 6, 5, 4, 3, 2, 1, 1];

    if (value.length != 10) return false;

    let i = tab.indexOf(value.charAt(0));
    if (i === -1) return false;

    let sum = A1[i] + A2[i] * 9;
    for (i = 1; i < 10; i++) {
        const v = parseInt(value.charAt(i));
        if (isNaN(v)) return false;
        sum = sum + v * Mx[i];
    }

    if (sum % 10 != 0) return false;
    return true;
};
