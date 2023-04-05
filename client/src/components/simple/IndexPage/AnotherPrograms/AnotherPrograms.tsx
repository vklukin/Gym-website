import './AnotherPrograms.css';

import { DynamicRender } from '../../../../types/DynamicRender';

import { AnotherProgramsArr } from '../Index-data.list';
import { AnchorButton } from '../../../ui/AnchorButton';

export function AnotherPrograms(): JSX.Element {
    return (
        <section className="index-anotherPrograms">
            <div className="container container__anotherPrograms">
                <h3 className="anotherPrograms__label">
                    Всё для Вашего отдыха, красоты и здоровья. Приходите и попробуйте!
                </h3>
                <div className="anotherPrograms__wrapper">
                    {AnotherProgramsArr.map((item: DynamicRender, index: number) => (
                        <div className="anotherPrograms__item" key={index}>
                            <h3>{item.title}</h3>
                            <div className="img-wrapper">
                                <img src={item.image} alt="" />
                            </div>
                            <ul className="text__wrapper">
                                {item.list?.map((listItem: string, listIndex: number) => (
                                    <li key={listIndex}>{listItem}</li>
                                ))}
                            </ul>
                            <AnchorButton link={item.link} text="Подробнее" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
