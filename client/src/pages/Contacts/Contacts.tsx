import './contacts.css';

import { MainTag } from '../../components/ui/Main-Tag';
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
                    <div>
                        <a href="https://yandex.ru/maps/org/fit_layf/1734705786/?utm_medium=mapframe&utm_source=maps">
                            Фит Лайф
                        </a>
                        <a href="https://yandex.ru/maps/54/yekaterinburg/category/fitness_club/184107363/?utm_medium=mapframe&utm_source=maps">
                            Фитнес-клуб в Екатеринбурге
                        </a>
                        <a href="https://yandex.ru/maps/54/yekaterinburg/category/sports_hall_gym/41430094175/?utm_medium=mapframe&utm_source=maps">
                            Спортивный, тренажёрный зал в Екатеринбурге
                        </a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=60.635907%2C56.862557&mode=poi&poi%5Bpoint%5D=60.634148%2C56.862606&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1734705786&z=17"
                            allowFullScreen={true}
                        ></iframe>
                    </div>
                </div>
            </div>
        </MainTag>
    );
}
