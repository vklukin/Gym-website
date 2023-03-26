import React from 'react';

import { DynamicRender } from '../../../../types/DynamicRender';

import { WorkInfo } from '../WorkInfo.config';

export const FooterInfoList: React.FC = () => {
    return (
        <ul>
            {WorkInfo.map((item: DynamicRender, index: number) => (
                <li key={index}>
                    <img src={item.image} alt="Иконка" />
                    <div className="wrapper">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
