import { useEffect } from 'react';

import './employees.css';

import { EmployeesRender } from '../../../types/Employees';
import { MainTag } from '../../../components/ui/Main-Tag';
import { EmployeesArr } from './employees.list';

export function Employees(): JSX.Element {
    useEffect(() => {
        const hashInURL = window.location.hash;

        if (!hashInURL) return;

        const employeeId = document.querySelector(`${hashInURL}`);
        if (employeeId) {
            employeeId.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return (
        <MainTag pageTitle="Сотрудники" className="employeesPage">
            <>
                {EmployeesArr.map((items: EmployeesRender, index) => (
                    <div className="employee" key={index}>
                        <div className="employee__wrapper" id={items?.id}>
                            <div className="employee-name">
                                <h3>{items.title}</h3>
                                <p>{items.text}</p>
                            </div>
                            {items.list && (
                                <ul className="employee__default-list" key={index + 1000}>
                                    {items.list.map((listItem, listIndex) => (
                                        <li key={listIndex}>{listItem}</li>
                                    ))}
                                </ul>
                            )}
                            {items.extList && (
                                <div className="employee-ext-list__wrapper" key={index + 2000}>
                                    {items.extList.map((extListItem, extListIndex) => (
                                        <div key={extListIndex + 9999}>
                                            {extListItem.label && (
                                                <p
                                                    className="employee__ext-list-label"
                                                    key={extListIndex + 1000}
                                                >
                                                    {extListItem.label}
                                                </p>
                                            )}
                                            {Array.isArray(extListItem.itemsList) ? (
                                                <ul
                                                    className="employee__ext-list"
                                                    key={extListIndex}
                                                >
                                                    {extListItem.itemsList.map(
                                                        (listItem, listIndex) => (
                                                            <li key={listIndex}>{listItem}</li>
                                                        )
                                                    )}
                                                </ul>
                                            ) : (
                                                <p
                                                    className="employee__extList-text"
                                                    key={extListIndex + 2000}
                                                >
                                                    {extListItem.itemsList}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="employee-image">
                            <img src={items.image} alt={items.title} />
                        </div>
                    </div>
                ))}
            </>
        </MainTag>
    );
}
