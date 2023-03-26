import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../components/simple/header';
import { Footer } from '../components/simple/footer';
import IndexPage from '../pages/IndexPage/IndexPage';
import Policy from '../pages/Policy/Policy';
import { Employees } from '../pages/Employees';

export const Router: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/employees" element={<Employees />} />
            </Routes>
            <Footer />
        </>
    );
};
