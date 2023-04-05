import './policy.css';

import { MainTag } from '../../components/ui/Main-Tag';

import { DynamicRender } from '../../types/DynamicRender';
import { PolicyList } from './Policy.list';

function List(): JSX.Element {
    return (
        <ul className="policy-list">
            {PolicyList.map((item: DynamicRender, index: number) => (
                <li key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
    );
}

export function Policy(): JSX.Element {
    return (
        <MainTag className="policy" pageTitle="Политика конфиденциальности">
            <>
                <p className="policy-label">
                    Оставляя данные на сайте, Вы соглашаетесь с Политикой конфиденциальности и
                    защиты информации.
                </p>
                <List />
            </>
        </MainTag>
    );
}
