import React from 'react';
import { useAppSelector } from '../../../store/ReduxHooks';

import './header.css';
import PhoneIcon from '../../../assets/images/icons/phone-white.png';
import NavMarker from '../../../assets/images/icons/nav-marker-white.png';

import { HeaderLinks } from '../../environments/Links';
import { Logo } from '../../ui/Logo';
import { Button } from '../../ui/Button';
import { Links } from '../../ui/Links';

export const Header: React.FC = () => {
    const { isAuth, id, role } = useAppSelector((state) => state.Auth.user);
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
                        <Button
                            as={'a'}
                            href={isAuth ? `/${id}/profile` : '/authorization'}
                            className="profile"
                        >
                            Личный кабинет
                        </Button>
                    </div>
                </div>
            </div>
            <nav className="nav-for-desktop">
                <div className="container">
                    <Links linksArray={HeaderLinks} role={role} />
                </div>
            </nav>
        </header>
    );
};
