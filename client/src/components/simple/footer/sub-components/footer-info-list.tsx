import React from 'react';

import { WorkInfo } from '../WorkInfo.list';

export const FooterInfoList: React.FC = () => {
    return (
        <ul>
            {WorkInfo.map((item, index: number) => (
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
