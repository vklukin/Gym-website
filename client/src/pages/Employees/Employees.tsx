import './employees.css';

import { EmployeesRender } from '../../types/Employees';

import { MainTag } from '../../components/ui/Main-Tag';
import { EmployeesArr } from './employees.config';

export function Employees(): JSX.Element {
    return (
        <MainTag pageTitle="Сотрудники" className="employeesPage">
            <>
                {EmployeesArr.map((items: EmployeesRender, index) => (
                    <div className="employee" key={index}>
                        <div className="employee__wrapper">
                            <div className="employee-name">
                                <h3>{items.title}</h3>
                                <p>{items.text}</p>
                            </div>
                            {items.list && (
                                <ul className="employee__default-list">
                                    {items.list.map((listItem, listIndex) => (
                                        <li key={listIndex}>{listItem}</li>
                                    ))}
                                </ul>
                            )}
                            {items.extList && (
                                <div className="employee-ext-list__wrapper">
                                    {items.extList.map((extListItem, extListIndex) => (
                                        <>
                                            {extListItem.label && (
                                                <p className="employee__ext-list-label">
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
                                                <p className="employee__extList-text">
                                                    {extListItem.itemsList}
                                                </p>
                                            )}
                                        </>
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
