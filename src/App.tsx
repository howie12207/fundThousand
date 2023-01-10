// import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

// import Fade from '@mui/material/Fade';
// import CircularProgress from '@mui/material/CircularProgress';
// import Home from './pages/home/Home';
// import Test from './pages/test/Test';

import RouteComponents from './router/a';

import { tracking } from '@/utils/tracking';
import { updateIp } from '@/store/base';
import { fetchIp } from '@/api/base';

const App = () => {
    const dispatch = useDispatch();

    const renderRef = useRef(false);
    useEffect(() => {
        if (renderRef.current) return;
        renderRef.current = true;
        const versionData = import.meta.env.VITE_TIME
            ? `${__APP_VERSION__} ${import.meta.env.VITE_TIME}`
            : __APP_VERSION__;

        console.info(
            `${import.meta.env.MODE} version: %c${versionData}`,
            'color:white;background:#005598;padding: 0.1rem 0.5rem; border-radius: 0.6rem'
        );

        tracking('NewCreate_DLP_PV');

        const getIp = async () => {
            const ip = await fetchIp();
            dispatch(updateIp(ip));
        };
        getIp();
    }, []);

    return (
        <div className="min-h-screen text-gray-700">
            <RouteComponents />
            {/* <Fade in={isLoading}>
                <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60">
                    <CircularProgress sx={{ color: '#005598' }} size={60} />
                </div>
            </Fade> */}
        </div>
    );
};

export default App;
