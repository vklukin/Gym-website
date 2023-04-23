import React from 'react';

type TLinks = { linksArray: { title: string; link: string }[] };

export const Links = ({ linksArray }: TLinks) => {
    return (
        <ul>
            {linksArray.map((item, index: number) => (
                <li key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};
