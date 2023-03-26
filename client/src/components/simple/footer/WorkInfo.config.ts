import GeoMark from '../../../assets/images/icons/nav-marker-white.png';
import Phone from '../../../assets/images/icons/phone-white.png';
import Clock from '../../../assets/images/icons/clock-white.png';

import { DynamicRenderArr } from '../../../types/DynamicRender';

export const WorkInfo: DynamicRenderArr = [
    {
        image: GeoMark,
        title: 'Адрес',
        text: 'г. Екатеринбург, ул. Сулимова, д. 46, Active park',
    },
    {
        image: Phone,
        title: 'Телефон',
        text: '+7 (343) 243-53-42',
    },
    {
        image: Clock,
        title: 'График работы',
        text: 'Пн-Пт с 08:00 до 22:00\n' + 'Сб-Вс с 09:00 до 21:00',
    },
];
