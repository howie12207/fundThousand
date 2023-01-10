import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '@/pages/home/Home';
import Test from '@/pages/test/Test';

const RouteComponents = () => {
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

    return (
        <section className={`${transitionStage}`} onAnimationEnd={animationHandle}>
            <Routes location={displayLocation}>
                {routeSetting.map(route => {
                    return <Route path={route.path} element={route.element} key={route.path} />;
                })}
            </Routes>
        </section>
    );
};
export default RouteComponents;

export const routeSetting = [
    {
        path: '/',
        element: <Home />,
        title: '首頁',
    },
    {
        path: '/test',
        element: <Test />,
        title: '測試頁',
    },
];
