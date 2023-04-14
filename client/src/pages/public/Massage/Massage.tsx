import './massage.css';

import { MainTag } from '../../../components/ui/Main-Tag';
import { MassageList, MassageTypes } from './Massage.list';
import {
    DropdownMenuContainer,
    DropdownMenuElement,
} from '../../../components/simple/DropdownMenu';

export function Massage(): JSX.Element {
    return (
        <MainTag className="massage" pageTitle="Массаж">
            <p className="phone">Телефон для записи: +7 (950) 633-15-85</p>
            <DropdownMenuContainer>
                {MassageList.map((items: MassageTypes, index: number) => (
                    <DropdownMenuElement elementTitle={items.title} key={index}>
                        <p>{items.text}</p>
                        <img src={items.image} alt="Изображение" />
                    </DropdownMenuElement>
                ))}
            </DropdownMenuContainer>
        </MainTag>
    );
}
