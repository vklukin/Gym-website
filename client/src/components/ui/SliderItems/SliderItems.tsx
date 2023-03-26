import React from 'react';
import { DynamicRender } from '../../../types/DynamicRender';

type Childrens = { keys: number; items: DynamicRender; className?: string };

export function SliderItem({ keys, items, className }: Childrens): JSX.Element {
    return (
        <div className={`slider__element ${className}`} key={keys}>
            <div className="slide__background-image">
                <img src={items.image} alt="" />
            </div>
            <div className="slider__text-wrapper">
                <h1>{items.title}</h1>
                <p>{items.text}</p>
            </div>
        </div>
    );
}