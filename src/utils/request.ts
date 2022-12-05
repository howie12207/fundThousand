import SnackbarUtils from './snackBar';
import { store } from '@/store/store';

const request = async (
    url: string,
    { method = 'GET', headers, body, mode = 'cors', cache = 'default' } = {} as RequestInit
) => {
    const baseState = store.getState().base;

    const defaultHeaders = {
        'Content-Type': 'application/json',
        'x-ft-apikey': 'c6db7c09-3798-4ded-b851-c806f7066c2d',
        'x-ft-clientip': baseState.ip || '',
        'x-ft-idno': baseState.idNumber || 'Anonymous',
        ...headers,
    };
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
        controller.abort();
    }, 12000);

    try {
        const res = await fetch(url, {
            signal,
            method,
            headers: defaultHeaders,
            body,
            mode,
            cache,
        });

        let data;
        if (defaultHeaders['Content-Type'] === 'text/html') data = await res.text();
        else data = await res.json();

        if (res?.status !== 200) {
            SnackbarUtils.error(data?.Result?.Desc || '系統錯誤，請稍後再試');
            return false;
        }
        return data;
    } catch (_) {
        SnackbarUtils.error('請求超時，請稍後再試');
        return false;
    }
};

export default request;
