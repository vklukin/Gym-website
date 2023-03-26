import React from 'react';

import './header.css';

import PhoneIcon from '../../../assets/images/icons/phone-white.png';
import NavMarker from '../../../assets/images/icons/nav-marker-white.png';

import { Logo } from '../../ui/Logo';
import { Links } from '../../Links';
import { AnchorButton } from '../../ui/AnchorButton';

export const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="header__wrapper">
                    <a href="/">
                        <Logo />
                    </a>
                    <div className="auxiliary__wrapper">
                        <div className="info">
                            <span className="geo-position">
                                <img src={NavMarker} alt="Маркер навигации" />
                                &nbsp;<p>г. Екатеринбург</p>
                            </span>
                            <span className="phone">
                                <img src={PhoneIcon} alt="Телефон" />
                                &nbsp;<a href="tel:+73432435342">+7 (343) 243-53-42</a>
                            </span>
                        </div>
                        <AnchorButton link="/profile" className="profile" text="Личный кабинет" />
                    </div>
                </div>
            </div>
            <nav className="nav-for-desktop">
                <div className="container">
                    <Links />
                </div>
            </nav>
        </header>
    );
};
