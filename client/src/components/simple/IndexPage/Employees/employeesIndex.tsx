import './index-employees.css';

import { DynamicRender } from '../../../../types/DynamicRender';
import { FourEmployeesForIndexPage } from '../../../../pages/public/Employees';

import Background from '../../../../assets/images/index/employees/background-employees.jpg';
import { Button } from '../../../ui/Button';

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
                <Button as={'a'} href={'/employees'} className={'index-employees__button'}>
                    Больше тренеров
                </Button>
            </div>
        </section>
    );
}
