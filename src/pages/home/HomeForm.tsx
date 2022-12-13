import { useState, useEffect, useRef, Ref } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import { BaseInputRef, BaseInput } from '@/components/baseInput/BaseInput';
import { ModalPersonalData } from './ModalPersonalData';
import { ModalStopTips } from './ModalStopTips';
import { Fade, Slide, CircularProgress, Checkbox, FormControlLabel, Radio } from '@mui/material';
import { Info } from '@mui/icons-material';

import { updateIp, updateIdNumber, updateHasFocus } from '@/store/base';
import { fetchIp, fetchState, fetchOtp, otpVerify, StateResult } from '@/api/base';
import { isRequired, isIdNumber, isCellphone } from '@/utils/validate';
import scrollTo from '@/utils/scrollTo';
import { tracking } from '@/utils/tracking';

import type { RootState } from '@/store/store';

type Props = {
    order: string;
};

const HomeForm = ({ order }: Props) => {
    const homeFormRef = useRef(null);
    const dispatch = useDispatch();
    const ip = useSelector((state: RootState) => state.base.ip);
    const hasFocus = useSelector((state: RootState) => state.base.hasFocus);
    const { enqueueSnackbar } = useSnackbar();

    const [isTeenager, setIsTeenager] = useState(false);

    // ID number
    const idNumberRef: Ref<BaseInputRef> = useRef(null);
    const [idNumber, setIdNumber] = useState('');
    const [idNumberIsValid, setIdNumberIsValid] = useState(false);
    const [isLoadingState, setIsLoadingState] = useState(false);
    const idNumberRules = [
        { validate: (value: string) => isRequired(value), message: '請輸入身份證字號' },
        { validate: (value: string) => isIdNumber(value), message: '身份證格式錯誤' },
    ];
    const [isFocus, setIsFocus] = useState(false);
    const [isStateFinish, setIsStateFinish] = useState(false);
    const [gid, setGid] = useState('');
    const [state, setState] = useState(null as 2 | 3 | 97 | 99 | null);
    const [isMember, setIsMember] = useState(false);
    useEffect(() => {
        resetAll();
        const getState = async () => {
            setIsLoadingState(true);
            dispatch(updateIdNumber(idNumber));

            if (!ip) {
                const res = await fetchIp();
                dispatch(updateIp(res));
            }

            const res = await fetchState();
            if (!res) return;

            setIsLoadingState(false);
            checkState(res);
        };
        const checkState = ({ State, OpenSource, Gid, PhoneNum }: StateResult) => {
            tracking('NewCreate_S1_ID', { status: State });
            const condition = {
                isMember: {
                    active: State === 1,
                    callback: () => setIsMember(true),
                },
                isPaper: {
                    active: State === 2,
                    callback: () => stop(),
                },
                isDS: {
                    active: State === 3,
                    callback: () => stop(),
                },
                isReserve: {
                    active: State === 97 && OpenSource === 3,
                    callback: () => stop(),
                },
                isBlocked: {
                    active: State === 99,
                    callback: () => stop(),
                },
                default: {
                    active: true,
                    callback: () => {
                        setGid(Gid);
                        setIsStateFinish(true);
                        setPhone(PhoneNum || '');
                        if (PhoneNum) setHasPhone(true);
                    },
                },
            };
            const stop = () => {
                setState(State as 2 | 3 | 97 | 99);
                setModalTarget('stopTips');
            };
            for (const item of Object.values(condition)) {
                if (item.active) {
                    item.callback();
                    break;
                }
            }
        };

        if (idNumberIsValid) getState();
        else if (idNumber.length === 10) idNumberRef.current?.validateNow();
    }, [idNumber]);
    useEffect(() => {
        if (!isFocus || hasFocus) return;
        dispatch(updateHasFocus(true));
        tracking('NewCreate_S1_fill');
    }, [isFocus]);

    // phone
    const phoneRef: Ref<BaseInputRef> = useRef(null);
    const [hasPhone, setHasPhone] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneIsValid, setPhoneIsValid] = useState(false);
    const phoneRules = [
        { validate: (value: string) => isRequired(value), message: '請輸入行動電話' },
        { validate: (value: string) => isCellphone(value), message: '請輸入 10 碼行動電話' },
    ];
    const [isLoadingOtp, setIsLoadingOtp] = useState(false);
    const [isSendOtp, setIsSendOtp] = useState(false);
    const [sendStartTime, setSendStartTime] = useState(0);
    const getOtp = async () => {
        setIsLoadingOtp(true);
        setSendStartTime(new Date().valueOf());
        const res = await fetchOtp({
            Gid: gid,
            Message:
                '【富蘭克林】您的手機驗證碼為 ${VerifyCode} ，密碼3分鐘內有效，請儘速回填並依照步驟完成開戶，開啟理財第一步。',
            PhoneNum: hasPhone ? null : phone,
            idNo: idNumber,
        });
        tracking('NewCreate_S1_SMS');
        if (res) enqueueSnackbar('簡訊發送成功！', { variant: 'success' });

        setIsLoadingOtp(false);
        setCountNumber(180);
        setIsCounting(true);
        setIsSendOtp(true);
    };
    useEffect(() => {
        if (phone.length === 10 && !hasPhone) phoneRef.current?.validateNow();
    }, [phone]);

    // counter
    const [countNumber, setCountNumber] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    useEffect(() => {
        if (countNumber <= 0) return setIsCounting(false);

        const countdown = setInterval(() => {
            setCountNumber(countNumber - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [countNumber]);

    // valid code
    const otpRef: Ref<BaseInputRef> = useRef(null);
    const [otp, setOtp] = useState('');
    const [otpIsValid, setOtpIsValid] = useState(false);
    const otpRules = [
        { validate: (value: string) => isRequired(value), message: '請輸入驗證碼' },
        { validate: (value: string) => value?.length === 5, message: '請輸入 5 碼驗證碼' },
    ];

    // read section
    const [isRead, setIsRead] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const submit = async () => {
        setIsSubmit(true);
        if (!validate()) return;
        setIsLoadingSubmit(true);
        const res = await otpVerify({ Gid: gid, VerifyCode: otp });
        setIsLoadingSubmit(false);
        const sendTime = Math.floor((new Date().valueOf() - sendStartTime) / 1000);
        if (!res) return;
        window.location.href = `${import.meta.env.VITE_OPEN_ACCOUNT_URL}/loading?id=${window.btoa(
            idNumber
        )}&ip=${window.btoa(ip)}&token=${window.btoa(res?.Token)}&phone=${window.btoa(
            phone
        )}&isTeenager=${isTeenager}&sendTime=${sendTime}&order=${order}`;
    };
    const validate = () => {
        const idNumberCheck = idNumberRef.current?.validateNow();
        const phoneCheck = hasPhone ? true : phoneRef.current?.validateNow();
        const otpCheck = otpRef.current?.validateNow();
        const readCheck = !!isRead;
        if (!idNumberCheck || !phoneCheck || !otpCheck || !readCheck) {
            scrollTo();
            enqueueSnackbar('請確認資料填寫正確');
            return false;
        }
        return true;
    };

    const resetAll = () => {
        setIsLoadingState(false);
        setIsStateFinish(false);
        setIsMember(false);
        phoneRef.current?.resetField();
        setHasPhone(false);
        setCountNumber(0);
        setIsCounting(false);
        setIsSendOtp(false);
        otpRef.current?.resetField();
        setIsRead(false);
        setIsSubmit(false);
        setIsLoadingSubmit(false);
    };

    // modal
    const [modalTarget, setModalTarget] = useState('');

    return (
        <div
            ref={homeFormRef}
            className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white p-6 shadow"
        >
            <h2 className="text-center text-2xl font-bold text-blue-700 lg:text-3xl">
                申辦國民e帳戶
            </h2>
            <h3 className="mx-auto my-4 text-center text-lg font-bold text-gray-800 lg:my-6">
                5分鐘輕鬆開戶，最快24小時內即可下單!
            </h3>

            {/* is teenager radio section */}
            <section className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly">
                <FormControlLabel
                    label="成年人開戶"
                    className={[
                        'is-teenager-label !ml-0 !mr-0 sm:!mr-4',
                        (!isTeenager && 'border-blue-700 text-blue-700') || '',
                    ].join(' ')}
                    control={
                        <Radio
                            name="isTeenager"
                            id={`adult-${order}`}
                            value="adult"
                            checked={!isTeenager}
                            onChange={() => setIsTeenager(false)}
                            size="small"
                        />
                    }
                />
                <FormControlLabel
                    label="未成年開戶"
                    className={[
                        'is-teenager-label !ml-0 !mr-0',
                        (isTeenager && 'border-blue-700 text-blue-700') || '',
                    ].join(' ')}
                    control={
                        <Radio
                            name="isTeenager"
                            id={`teenager-${order}`}
                            value="teenager"
                            checked={isTeenager}
                            onChange={() => setIsTeenager(true)}
                            size="small"
                        />
                    }
                />
            </section>

            {/* ID number */}
            <BaseInput
                ref={idNumberRef}
                label="身份證字號"
                id={`idNumber-${order}`}
                value={idNumber}
                setValue={setIdNumber}
                isValid={idNumberIsValid}
                setIsValid={setIdNumberIsValid}
                placeholder={isTeenager ? '請輸入未成年人的身份證字號' : '請輸入身份證字號'}
                rules={idNumberRules}
                upperCase
                maxlength={10}
                immediate
                setIsFocus={setIsFocus}
            />

            {/* is member */}
            <Slide direction="left" in={isMember} unmountOnExit container={homeFormRef.current}>
                <section className="flex items-center rounded bg-yellow-50 py-2 px-4 text-yellow-600">
                    <Info />
                    <div className="ml-2">
                        Hi, 您已是國民e帳戶會員，歡迎
                        <a
                            className="text-blue-700 hover:underline"
                            href={`${import.meta.env.VITE_EC_URL}/login`}
                            title="立即登入"
                        >
                            立即登入
                        </a>
                        使用線上交易服務！
                    </div>
                </section>
            </Slide>

            {/* phone */}
            <Slide
                direction="left"
                in={isStateFinish}
                unmountOnExit
                container={homeFormRef.current}
            >
                <section>
                    <BaseInput
                        ref={phoneRef}
                        label="行動電話"
                        id={`phone-${order}`}
                        value={phone}
                        setValue={setPhone}
                        isValid={phoneIsValid}
                        setIsValid={setPhoneIsValid}
                        placeholder="範例：0912345678"
                        rules={phoneRules}
                        maxlength={10}
                        disabled={hasPhone || (phone.length === 10 && isSendOtp)}
                    >
                        <button
                            className={[
                                'base-btn relative mt-2 w-full shrink-0 bg-blue-700 text-sm text-white sm:mt-0 sm:ml-4 sm:w-44',
                                'disabled:bg-gray-300 disabled:hover:cursor-not-allowed',
                            ].join(' ')}
                            onClick={getOtp}
                            disabled={isCounting || isLoadingOtp || (!phoneIsValid && !hasPhone)}
                        >
                            獲取驗證碼
                            {countNumber > 0 && <span className="ml-2">( {countNumber} )</span>}
                            <Fade in={isLoadingOtp}>
                                <div className="absolute translate-x-12 text-base">
                                    <CircularProgress sx={{ color: 'white' }} size={14} />
                                </div>
                            </Fade>
                        </button>
                    </BaseInput>
                </section>
            </Slide>

            {/* valid code */}
            <Slide direction="left" in={isSendOtp} unmountOnExit container={homeFormRef.current}>
                <section>
                    <BaseInput
                        ref={otpRef}
                        label="驗證碼"
                        id={`otp-${order}`}
                        value={otp}
                        setValue={setOtp}
                        isValid={otpIsValid}
                        setIsValid={setOtpIsValid}
                        placeholder="請輸入驗證碼"
                        rules={otpRules}
                        maxlength={5}
                        immediate
                    />
                </section>
            </Slide>

            {/* read section */}
            <Slide direction="left" in={otpIsValid} unmountOnExit container={homeFormRef.current}>
                <section className={[(isSubmit && !isRead && 'error-item') || ''].join(' ')}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                size="small"
                                checked={isRead}
                                onChange={() => setIsRead(!isRead)}
                            />
                        }
                        label="請詳閱"
                    />
                    <div className="ml-7 -mt-1">
                        <button
                            className="text-left text-blue-700 hover:underline"
                            onClick={() => setModalTarget('personalData')}
                        >
                            個人資料保護法告知事項與後續變更同意事項
                        </button>
                    </div>
                    <div className="ml-7 mt-1 min-h-[20px] text-sm text-red-500">
                        <Fade in={isSubmit && !isRead}>
                            <span>請勾選同意【個人資料保護法告知事項與後續變更同意事項】</span>
                        </Fade>
                    </div>
                    <div className="mt-2 text-center">
                        <button
                            className={[
                                'base-btn w-40 rounded-3xl bg-red-400 text-white',
                                'disabled:bg-gray-300 disabled:hover:cursor-not-allowed',
                            ].join(' ')}
                            onClick={submit}
                            disabled={isLoadingSubmit}
                        >
                            立即開戶
                            <Fade in={isLoadingSubmit}>
                                <div className="absolute translate-x-12 text-base">
                                    <CircularProgress sx={{ color: 'white' }} size={14} />
                                </div>
                            </Fade>
                        </button>
                    </div>
                </section>
            </Slide>

            <Fade in={isLoadingState}>
                <div className="absolute left-1/2 bottom-2 -translate-x-1/2">
                    <CircularProgress sx={{ color: '#005598' }} size={20} />
                </div>
            </Fade>

            <ModalPersonalData modalTarget={modalTarget} setModalTarget={setModalTarget} />
            <ModalStopTips
                modalTarget={modalTarget}
                setModalTarget={setModalTarget}
                state={state}
            />
        </div>
    );
};

export default HomeForm;
