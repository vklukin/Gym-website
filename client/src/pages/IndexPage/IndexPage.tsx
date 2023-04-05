import React from 'react';

import './indexPage.css';

import { MainTag } from '../../components/ui/Main-Tag';
import { Slider } from '../../components/simple/IndexPage/slider';
import { AnotherPrograms } from '../../components/simple/IndexPage/AnotherPrograms';
import { EmployeesIndex } from '../../components/simple/IndexPage/Employees';
import { News } from '../../components/simple/IndexPage/News';

export const IndexPage: React.FC = () => {
    return (
        <MainTag className="index" pageTitle="Главная" navigation={false} container={false}>
            <>
                <Slider />
                <AnotherPrograms />
                <EmployeesIndex />
                <News />
            </>
        </MainTag>
    );
};
