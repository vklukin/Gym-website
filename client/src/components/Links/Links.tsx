import React from 'react';

import { HeaderLinks } from './nav-links.list';

export const Links: React.FC = () => {
    return (
        <ul>
            {HeaderLinks.map((item, index: number) => (
                <li key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};
