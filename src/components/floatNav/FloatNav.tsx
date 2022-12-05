import { useState, useEffect, useRef } from 'react';

import { Fade, Modal, Backdrop } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import HomeForm from '@/pages/home/HomeForm';

import './floatNav.scss';

const FloatNav = () => {
    const [type, setType] = useState(1);
    const [modalTarget, setModalTarget] = useState('');

    const renderRef = useRef(false);
    useEffect(() => {
        if (renderRef.current) return;
        renderRef.current = true;

        setTimeout(() => {
            setType(2);
        }, 3000);
    }, []);

    return (
        <section>
            <Fade in={type === 1}>
                <aside className="aside">
                    <a
                        href={`${import.meta.env.VITE_EC_URL}/login`}
                        target="_blank"
                        rel="noreferrer"
                        className="item border-r-4 border-white bg-blue-800"
                    >
                        <span className="mr-1 text-base">立即下單</span>
                        <ArrowForwardIos fontSize="inherit" />
                    </a>
                    <div
                        className="item bg-green-700"
                        onClick={() => {
                            setModalTarget('form');
                        }}
                    >
                        <span className="mr-1 text-base">線上開戶</span>
                        <ArrowForwardIos fontSize="inherit" />
                    </div>
                </aside>
            </Fade>
            <Fade in={type === 2}>
                <div className="fixed bottom-4 right-2 md:bottom-12 md:right-12">
                    <div className="h-12 rounded-t-3xl bg-blue-700">
                        <img
                            className="mx-auto h-[93px] w-48 -translate-y-11"
                            src="https://event.franklin.com.tw/commonResources/images/women.webp"
                            alt="一起來存基金吧!"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col items-center rounded bg-white p-4 shadow-xl">
                        <div>有興趣嗎？</div>
                        <p>一起來存基金吧!</p>
                        <div className="flex flex-col self-stretch text-center md:flex-row">
                            <a
                                href={`${import.meta.env.VITE_EC_URL}/login`}
                                target="_blank"
                                rel="noreferrer"
                                className="my-2 rounded-3xl bg-blue-800 py-2 px-4 text-white transition hover:opacity-80 md:mr-2"
                            >
                                立即下單
                            </a>
                            <button
                                className="my-2 rounded-3xl bg-green-700 py-2 px-4 text-white transition hover:opacity-80"
                                onClick={() => {
                                    setModalTarget('form');
                                }}
                            >
                                線上開戶
                            </button>
                        </div>
                        <button
                            className="text-xs transition hover:opacity-80"
                            onClick={() => setType(1)}
                        >
                            我再考慮一下
                        </button>
                    </div>
                </div>
            </Fade>

            <Modal
                open={modalTarget === 'form'}
                onClose={() => setModalTarget('')}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={modalTarget === 'form'} unmountOnExit>
                    <div className="fixed left-1/2 top-1/2 max-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto sm:w-fit">
                        <HomeForm order="box" />
                    </div>
                </Fade>
            </Modal>
        </section>
    );
};

export default FloatNav;
