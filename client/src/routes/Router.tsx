import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import PrivateRoute from '../components/environments/PrivateRoutes/PrivateRoute';
import {ROLES} from '../types/Roles';
import {useAppDispatch} from "../store/ReduxHooks";
import {checkToken, insertUserData} from "../store/slices/AuthSlice";

import {Header} from '../components/simple/header';
import {Footer} from '../components/simple/footer';
import {IndexPage} from '../pages/public/IndexPage';
import {Policy} from '../pages/public/Policy';
import {Employees} from '../pages/public/Employees';
import {Stocks} from '../pages/public/stocks';
import {Gym} from '../pages/public/Gym';
import {Aerobics} from '../pages/public/Aerobics';
import {Massage} from '../pages/public/Massage';
import {Price} from '../pages/public/Price';
import {Contacts} from '../pages/public/Contacts';
import {Schedule} from '../pages/public/Schedule';
import {Profile} from '../pages/private/Profile';
import {Login} from '../pages/public/Login';
import {Panel} from "../pages/private/Panel";

export const Router: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const session = window.localStorage.getItem('Auth-Session');

        if (!window.sessionStorage.getItem('SendQuery')) {
            dispatch(checkToken());
            window.sessionStorage.setItem('SendQuery', 'Sended')
        }

        if (session) {
            dispatch(insertUserData(session));
        }
    }, []);

    return (
        <>
            <Header/>
            <Routes>
                {/* Public */}
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/stocks" element={<Stocks/>}/>
                <Route path="/gym" element={<Gym/>}/>
                <Route path="/aerobics" element={<Aerobics/>}/>
                <Route path="/massage" element={<Massage/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/authorization" element={<Login/>}/>

                {/* private */}
                <Route
                    element={<PrivateRoute
                        allowedRoles={[ROLES.USER, ROLES.ADMIN, ROLES.TRAINER, ROLES.MODERATOR]}/>}>
                    <Route path="/:userId/profile" element={<Profile/>}/>
                </Route>
                <Route element={<PrivateRoute allowedRoles={[ROLES.TRAINER, ROLES.ADMIN, ROLES.MODERATOR]}/>}>
                    <Route path="/panel" element={<Panel/>}/>
                </Route>


            </Routes>
            <Footer/>
        </>
    );
};
