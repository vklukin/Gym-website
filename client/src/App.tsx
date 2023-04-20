import React, { useEffect } from 'react';

import { Router } from './routes';
import { useAppDispatch } from './store/ReduxHooks';
import { checkToken, insertUserData } from './store/slices/AuthSlice';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const session = window.sessionStorage.getItem('Auth-Session');
        if (!session) {
            dispatch(checkToken());
        }

        if (session) {
            dispatch(insertUserData(session));
        }
    }, []);

    return <Router />;
}

export default App;
