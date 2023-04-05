import React from 'react';

import { DynamicRender } from '../../types/DynamicRender';

import { HeaderLinks } from './nav-links.list';

export const Links: React.FC = () => {
    return (
        <ul>
            {HeaderLinks.map((item: DynamicRender, index: number) => (
                <li key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};
