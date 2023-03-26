import React, { useEffect, useRef } from 'react';

import './slider.css';

import { DynamicRender } from '../../../../types/DynamicRender';
import { SliderArr } from '../Index.data';
import { SliderItem } from '../../../ui/SliderItems';

export function Slider(): JSX.Element {
    const sliderItemsRef = useRef<HTMLDivElement>(null);
    const pagRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let paginationCounter = 1;

        setInterval(() => {
            if (paginationCounter >= 3) {
                paginationCounter = 1;
            } else {
                paginationCounter += 1;
            }

            pagRef.current
                ?.querySelectorAll('.pagination__item')
                .forEach((item) => item.classList.remove('active'));
            pagRef.current
                ?.querySelector('.pagination__item[data-pagination="' + paginationCounter + '"]')
                ?.classList.add('active');

            if (paginationCounter === 1) {
                sliderItemsRef.current?.classList.remove(`trans-3`);
            }
            if (paginationCounter === 2) sliderItemsRef.current?.classList.add(`trans-2`);
            if (paginationCounter === 3) {
                sliderItemsRef.current?.classList.remove(`trans-2`);
                sliderItemsRef.current?.classList.add(`trans-3`);
            }
        }, 7000);
    }, []);

    return (
        <div className="index-slider">
            <div className="slider__wrapper">
                <div className="slider__items" ref={sliderItemsRef}>
                    {SliderArr.map((item: DynamicRender, index: number) => (
                        <SliderItem
                            key={index}
                            keys={index}
                            items={item}
                            className={`slide slide-${index + 1}`}
                        />
                    ))}
                </div>
                <div className="slides__pagination" ref={pagRef}>
                    <div className="pagination__item active" data-pagination="1"></div>
                    <div className="pagination__item" data-pagination="2"></div>
                    <div className="pagination__item" data-pagination="3"></div>
                </div>
                <p className="slider__info">
                    За всеми подробностями звоните по телефону: 243-53-42
                </p>
            </div>
        </div>
    );
}
