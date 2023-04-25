import React from 'react';
import { ROLES } from '../../../types/Roles';

type TLinks = {
    linksArray: {
        title: string;
        link: string;
    }[];
    role: string;
};

export const Links = ({ linksArray, role }: TLinks) => {
    return (
        <ul>
            {linksArray.map((item, index: number) => (
                <li key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
            {(role === ROLES.TRAINER || role === ROLES.ADMIN || role === ROLES.MODERATOR) && (
                <li>
                    <a href="/panel">Панель управления</a>
                </li>
            )}
        </ul>
    );
};
