import { version } from '../../package.json';

declare global {
    interface Window {
        dataLayer: object[];
    }
}

export const tracking = (
    label: string,
    params?: { [propName: string]: string | number | boolean }
) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: label,
        ver: '202205',
        version,
        debug_mode: window.location.hostname === 'etrade.franklin.com.tw' ? 0 : 1,
        ...params,
    });
};
