import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../components/simple/header';
import { Footer } from '../components/simple/footer';
import { IndexPage } from '../pages/IndexPage';
import { Policy } from '../pages/Policy';
import { Employees } from '../pages/Employees';
import { Stocks } from '../pages/stocks';
import { Gym } from '../pages/Gym';
import { Aerobics } from '../pages/Aerobics';

export const Router: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/gym" element={<Gym />} />
                <Route path="/aerobics" element={<Aerobics />} />
            </Routes>
            <Footer />
        </>
    );
};
