import React, { Component, createRef, ReactElement, ReactNode, RefObject } from 'react';

import './dropdownMenu.css';
import Arrow from '../../../assets/images/icons/arrow';

export interface DropdownMenuChildrenProp {
    children: JSX.Element | JSX.Element[] | ReactElement | ReactNode;
}

export interface DropdownMenuElementProps {
    elementTitle: string;
    children: JSX.Element | JSX.Element[];
    className?: unknown;
}

export class DropdownMenuContainer extends Component<DropdownMenuChildrenProp, any> {
    constructor(props: DropdownMenuChildrenProp) {
        super(props);
    }

    render() {
        return <div className="dropdown-menu">{this.props.children}</div>;
    }
}

export class DropdownMenuElement extends Component<DropdownMenuElementProps, any> {
    private arrowRef: RefObject<HTMLDivElement> = createRef();
    private dropdownContent: RefObject<HTMLDivElement> = createRef();

    constructor(props: DropdownMenuElementProps) {
        super(props);
    }

    private ToggleContent() {
        this.dropdownContent.current?.classList.toggle('show-menu');
    }

    render() {
        return (
            <div className="dropdown__menu-element">
                <div
                    className="dropdown-label__wrapper"
                    onClick={() => {
                        this.arrowRef.current?.classList.toggle('arrow-rotate');
                        this.ToggleContent();
                    }}
                >
                    <h3>{this.props.elementTitle}</h3>
                    <div ref={this.arrowRef}>
                        <Arrow />
                    </div>
                </div>
                <div
                    className={`dropdown-content ${this.props.className}`}
                    ref={this.dropdownContent}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
