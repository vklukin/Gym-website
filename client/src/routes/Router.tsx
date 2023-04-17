import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../components/simple/header';
import { Footer } from '../components/simple/footer';
import { IndexPage } from '../pages/public/IndexPage';
import { Policy } from '../pages/public/Policy';
import { Employees } from '../pages/public/Employees';
import { Stocks } from '../pages/public/stocks';
import { Gym } from '../pages/public/Gym';
import { Aerobics } from '../pages/public/Aerobics';
import { Massage } from '../pages/public/Massage';
import { Price } from '../pages/public/Price';
import { Contacts } from '../pages/public/Contacts';
import { Schedule } from '../pages/public/Schedule';
import { Profile } from '../pages/private/Profile';
import { Login } from '../pages/public/Login';

export const Router: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                {/* Public */}
                <Route path="/" element={<IndexPage />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/gym" element={<Gym />} />
                <Route path="/aerobics" element={<Aerobics />} />
                <Route path="/massage" element={<Massage />} />
                <Route path="/price" element={<Price />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/authorization" element={<Login />} />

                {/* private */}
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </>
    );
};
