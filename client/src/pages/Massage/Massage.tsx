import { Component, createRef, RefObject } from 'react';

import './massage.css';
import Arrow from '../../assets/images/icons/arrow';

import { MainTag } from '../../components/ui/Main-Tag';
import { MassageList, MassageTypes } from './Massage.list';

type DropdownMenuClassProps = { item: { title: string; text: string; image: string } };

class DropdownMenu extends Component<DropdownMenuClassProps, any> {
    dropdownContent: RefObject<HTMLDivElement> = createRef();
    arrowRef: RefObject<HTMLDivElement> = createRef();

    constructor(props: DropdownMenuClassProps) {
        super(props);
    }

    render() {
        return (
            <div className="dropdown-menu">
                <div
                    className="dropdown-label__wrapper"
                    onClick={() => {
                        this.dropdownContent.current?.classList.toggle('show-menu');
                        this.arrowRef.current?.classList.toggle('arrow-rotate');
                    }}
                >
                    <h3>{this.props.item.title}</h3>
                    <div ref={this.arrowRef}>
                        <Arrow />
                    </div>
                </div>
                <div className="dropdown-content" ref={this.dropdownContent}>
                    <p>{this.props.item.text}</p>
                    <img src={this.props.item.image} alt="Изображение" />
                </div>
            </div>
        );
    }
}

export function Massage(): JSX.Element {
    return (
        <MainTag className="massage" pageTitle="Массаж">
            <>
                <p className="phone">Телефон для записи: +7 (950) 633-15-85</p>
                {MassageList.map((items: MassageTypes, index: number) => (
                    <DropdownMenu key={index} item={items} />
                ))}
            </>
        </MainTag>
    );
}
