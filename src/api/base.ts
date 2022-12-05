import req from '@/utils/request';
import { base, port8081 } from '@/utils/apiPath';

export type StateResult = {
    Gid: string;
    State: number;
    PhoneNum: string;
    OpenSource: number;
    MailAddr: string;
    SignatureId: string;
};
type StateResponse = {
    Rtcode: string;
    Result: StateResult;
};

// 取得IP
export const fetchIp = async () => {
    const res = await req(`${port8081}/myip.aspx`, { headers: { 'Content-Type': 'text/html' } });
    return res;
};

// 取得用戶開戶狀態
export const fetchState = async () => {
    const res: StateResponse = await req(`${base}/v2/open/state`);
    return res?.Rtcode === 'success' ? res.Result : false;
};

// 發送OTP
export const fetchOtp = async (params: object) => {
    const res = await req(`${base}/v2/open/otp`, { method: 'POST', body: JSON.stringify(params) });
    return res?.Rtcode === 'success' ? res.Result : false;
};

// OTP驗證
export const otpVerify = async (params: object) => {
    const res = await req(`${base}/v2/open/otp-verify`, {
        method: 'POST',
        body: JSON.stringify(params),
    });
    return res?.Rtcode === 'success' ? res.Result : false;
};
