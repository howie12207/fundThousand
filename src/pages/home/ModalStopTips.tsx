import { useCallback } from 'react';
import { Modal, Fade } from '@mui/material';

type Props = {
    modalTarget: string;
    setModalTarget: (value: string) => void;
    state: 2 | 3 | 97 | 99 | null;
};

export const ModalStopTips = ({ modalTarget, setModalTarget, state }: Props) => {
    const desc = useCallback(() => {
        const defaultState = state || 99;
        const list = {
            2: '尚未開啟網路交易功能，請洽客服',
            3: '請洽您的業務員，為您服務',
            97: '您已完成預約開戶，待開戶完成將核發登入及交易密碼，即可進行線上交易服務。',
            99: '無法進行開戶，請洽客服',
        };
        return list[defaultState];
    }, [state]);

    return (
        <Modal open={modalTarget === 'stopTips'} closeAfterTransition>
            <Fade in={modalTarget === 'stopTips'}>
                <div className="base-modal fixed top-1/2 left-1/2 max-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded bg-white p-4 focus:outline-none sm:w-[60%]">
                    <div className="my-4 text-center">
                        <div className="mb-4">{desc()}</div>
                        <button
                            type="button"
                            className="base-btn bg-blue-700 text-white"
                            onClick={() => setModalTarget('')}
                        >
                            確認
                        </button>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
