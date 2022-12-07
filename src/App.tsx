import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

// import Fade from '@mui/material/Fade';
// import CircularProgress from '@mui/material/CircularProgress';
import Home from './pages/home/Home';

import { tracking } from '@/utils/tracking';
import { updateIp } from '@/store/base';
import { fetchIp } from '@/api/base';
import { version } from '../package.json';

const App = () => {
    // Transition
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState('fade-in');
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage('fade-out');
    }, [location]);
    const animationHandle = () => {
        if (transitionStage === 'fade-out') {
            setTransistionStage('fade-in');
            setDisplayLocation(location);
        }
    };
    const dispatch = useDispatch();

    const renderRef = useRef(false);
    useEffect(() => {
        if (renderRef.current) return;
        renderRef.current = true;
        const versionData = import.meta.env.VITE_TIME
            ? `${version} ${import.meta.env.VITE_TIME}`
            : version;

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
            <section className={`${transitionStage}`} onAnimationEnd={animationHandle}>
                <Routes location={displayLocation}>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </section>

            {/* <Fade in={isLoading}>
                <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60">
                    <CircularProgress sx={{ color: '#005598' }} size={60} />
                </div>
            </Fade> */}
        </div>
    );
};

export default App;
