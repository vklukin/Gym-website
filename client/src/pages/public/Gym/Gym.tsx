import './gym.css';

import { MainTag } from '../../../components/ui/Main-Tag';
import { GymImages, GymList } from './Gym.list';
import { DynamicRender } from '../../../types/DynamicRender';

function GymInfo(): JSX.Element {
    return (
        <div className="gym__info">
            {GymList.map((items: DynamicRender, index: number) => (
                <div key={index}>
                    <h3>{items.title}</h3>
                    <p>{items.text}</p>
                    {items.listLabel && (
                        <div className="list__items">
                            <p>{items.listLabel}</p>
                            <ul>
                                {items.list?.map((listItem: string, listIndex: number) => (
                                    <li key={listIndex}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function ImagesBlock(): JSX.Element {
    return (
        <div className="gym__images-block">
            {GymImages.map((item: { image: string }, index: number) => (
                <div className="image-wrapper">
                    <img src={item.image} key={index} alt="Изображение" />
                </div>
            ))}
        </div>
    );
}

export function Gym() {
    return (
        <MainTag pageTitle="Тренажерный зал" className="gym" container={false}>
            <>
                <div className="container container__gym">
                    <GymInfo />
                </div>
                <ImagesBlock />
            </>
        </MainTag>
    );
}
