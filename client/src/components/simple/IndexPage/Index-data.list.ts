import { DynamicRender } from '../../../types/DynamicRender';

//slider
import SliderImage1 from '../../../assets/images/index/slider/slider1.jpg';
import SliderImage2 from '../../../assets/images/index/slider/slider2.png';
import SliderImage3 from '../../../assets/images/index/slider/slider3.jpg';

//another programs
import GymImage from '../../../assets/images/index/another-programs/gym-image.webp';
import AerobicImage from '../../../assets/images/index/another-programs/aerobic-image.webp';
import MassageImage from '../../../assets/images/index/another-programs/massage-image.webp';

export const SliderArr: DynamicRender[] = [
    {
        title: 'Бесплатный тест-драйв клуба',
        text: 'Приходите к нам на тест-драйв и получите дополнительные 10% скидки и персональную тренировку с тренером',
        image: SliderImage1,
    },
    {
        title: 'СТУДЕНТИЩЩЩЕ',
        text: 'Дневная карта за 888 рублей',
        image: SliderImage2,
    },
    {
        title: 'Аренда для тренеров',
        text: 'Для персональных тренировок на территории нашего клуба',
        image: SliderImage3,
    },
];

export const AnotherProgramsArr: DynamicRender[] = [
    {
        title: 'Тренажерный зал',
        list: [
            'Большой, светлый, просторный зал с профессиональным оборудованием "PARAMOUNT"',
            'Кардиолиния "Life Fitness"',
            'Лучшие тренеры! Чемпионы Мира и мастера спорта!',
        ],
        link: '/gym',
        image: GymImage,
    },
    {
        title: 'Зал аэробики',
        list: [
            'Просторный зал групповых программ',
            'Разнообразие групповых занятий на любой вкус!',
            'Тренеры ведущие профессионалы и презенторы',
        ],
        link: '/aerobics',
        image: AerobicImage,
    },
    {
        title: 'Массаж',
        list: [
            'Антицеллюлитный массаж',
            'Классический массаж',
            'Массаж спины',
            'Массаж ног',
            'Лимфодренажный массаж',
        ],
        link: '/massage',
        image: MassageImage,
    },
];
