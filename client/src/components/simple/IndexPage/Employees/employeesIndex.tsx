import './index-employees.css';

import { DynamicRender } from '../../../../types/DynamicRender';
import { FourEmployeesForIndexPage } from '../../../../pages/Employees';

import Background from '../../../../assets/images/index/employees/background-employees.jpg';
import { AnchorButton } from '../../../ui/AnchorButton';

export function EmployeesIndex(): JSX.Element {
    return (
        <section className="index-employees">
            <div className="index-employees-background">
                <img src={Background} alt="" />
            </div>
            <div className="container container__employees">
                <h2>Наши тренеры</h2>
                <div className="index-employee-card__wrapper">
                    {FourEmployeesForIndexPage.map((item: DynamicRender, index: number) => (
                        <div className="index-employee-card" key={index}>
                            <h3>{item.title}</h3>
                            <img src={item.image} alt="Тренер" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <AnchorButton
                    className="index-employees__button"
                    text="Больше тренеров"
                    link="/employees"
                />
            </div>
        </section>
    );
}
