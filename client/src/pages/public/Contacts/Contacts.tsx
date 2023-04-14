import './contacts.css';

import { MainTag } from '../../../components/ui/Main-Tag';
import React from 'react';

export function Contacts() {
    return (
        <MainTag className="contacts" pageTitle="Контакты">
            <div className="contacts__wrapper">
                <div className="contacts-text__wrapper">
                    <div className="info-wrapper">
                        <a href="tel:+73432435342" className="phone">
                            Телефон: <span>+7 (343) 243-53-42</span>
                        </a>
                        <p className="address">
                            Адрес:{' '}
                            <span>
                                г. Екатеринбург, ул. Сулимова, 46 Деловой центр "Актив Парк", 3 этаж
                            </span>
                        </p>
                    </div>
                    <div className="work-time__wrapper">
                        <p className="work-title">График работы:</p>
                        <div className="work-time">
                            <p>
                                Пн-Пт: <span>08:00-22:00</span>
                            </p>
                            <p>
                                Сб-Вс: <span>09:00-21:00</span>
                            </p>
                        </div>
                    </div>
                    <div className="social-info__wrapper">
                        <a href="mailto:info@fitlife.su" className="email">
                            E-mail: <span>info@fitlife.su</span>
                        </a>
                        <a href="https://vk.com/fitlife_ekb" className="vk">
                            ВКонтакте: <span>https://vk.com/fitlife_ekb</span>
                        </a>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/org/fit_layf/1734705786/?from=mapframe&ll=60.634146%2C56.862631&z=18"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </MainTag>
    );
}
