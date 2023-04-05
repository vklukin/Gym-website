import './stocks.css';
import { StocksList } from './stocks.list';

import { MainTag } from '../../components/ui/Main-Tag';
import { DynamicRender } from '../../types/DynamicRender';
import React, { Component, createRef } from 'react';

type Props = { items: DynamicRender };
type State = { isHide: boolean };

class StockItem extends Component<Props, State> {
    private readonly imgRef: React.RefObject<HTMLImageElement> = createRef();

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div
                className="stocks-card"
                onMouseEnter={() => this.imgRef?.current?.classList.add('hide-image')}
                onMouseLeave={() => this.imgRef?.current?.classList.remove('hide-image')}
            >
                <div className="stock-text">
                    <div className="text-wrapper">
                        <h3>{this.props.items.title}</h3>
                        {this.props.items.list && (
                            <ul>
                                {this.props.items.list.map(
                                    (listItem: string, listIndex: number) => (
                                        <li key={listIndex}>{listItem}</li>
                                    )
                                )}
                            </ul>
                        )}
                        {this.props.items.text && <p>{this.props.items.text}</p>}
                    </div>
                </div>
                <img ref={this.imgRef} src={this.props.items.image} alt="" />
            </div>
        );
    }
}

export function Stocks(): JSX.Element {
    return (
        <MainTag pageTitle="Акции" className="stocks">
            <div className="grid-wrapper">
                {StocksList.map((items: DynamicRender, index: number) => (
                    <StockItem items={items} key={index} />
                ))}
            </div>
        </MainTag>
    );
}
