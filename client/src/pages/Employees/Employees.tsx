import './employees.css';

import { MainTag } from '../../components/ui/Main-Tag';
import { EmployeesArr } from './employees.config';

export function Employees(): JSX.Element {
    return (
        <MainTag pageTitle="Сотрудники" className="employeesPage">
            <>
                {EmployeesArr.map((items, index) => (
                    <div className="employee">
                        <div className="employee__wrapper"></div>
                        <img src={items.image} alt={items.title} />
                    </div>
                ))}
            </>
        </MainTag>
    );
}
