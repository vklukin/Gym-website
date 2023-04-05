import { EmployeesRender } from '../../types/Employees';

import EvgenitaGoyda from '../../assets/images/index/employees/evgeniya_goyda.webp';
import ElenaDrobysheva from '../../assets/images/index/employees/elena_drobysheva.webp';
import IngaBelyaeva from '../../assets/images/index/employees/inga_belyaeva.webp';
import IrinaZavorohina from '../../assets/images/index/employees/irina_zavorohina.webp';
import MargaritaIonkina from '../../assets/images/index/employees/margarita_ionkina.webp';
import OksanaKosenok from '../../assets/images/index/employees/oksana_kosenok.webp';
import PavelPolenov from '../../assets/images/index/employees/pavel_polenov.webp';
import VeneraBaltaeva from '../../assets/images/index/employees/venera_baltabaeva.webp';

export const EmployeesArr: EmployeesRender[] = [
    {
        title: 'Маргарита Ионкина',
        text: 'Инструктор зала групповых программ',
        image: MargaritaIonkina,
        list: [
            'Презентер  Всероссийских и региональных Фитнес-конвенций, Фитнес-форума',
            'Участница многочисленных семинаров, ведущая спортивной рубрики на TV',
            'Специалист по движению, инструктор авторских групповых программ',
            'Опыт работы более 20 лет!',
        ],
    },
    {
        title: 'Павел Поленов',
        text: 'Персональный тренер тренажерного зала',
        image: PavelPolenov,
        list: [
            'Сертифицированный тренер тренажерного зала',
            'Имеет Юношеский разряд по хоккею, кандидат в мастера спорта по пауэрлифтингу',
        ],
    },
    {
        title: 'Евгения Гойда',
        text: 'Инструктор групповых программ',
        image: EvgenitaGoyda,
        list: ['Инструктор по пилатесу'],
    },
    {
        title: 'Елена Дробышева',
        text: 'Сертифицированный инструктор по ZUMBA',
        image: ElenaDrobysheva,
        list: ['Сертифицированный инструктор по ZUMBA и силовой программе Кардио-кик.'],
    },
    {
        title: 'Венера Балтабаева',
        text: 'Инструктор зала групповых программ',
        image: VeneraBaltaeva,
        extList: [
            {
                label: 'Ирина специализируется на реабилитационных программах:',
                itemsList: ['Кинезиотерапия', 'Миофасциальный релиз', 'Пилатес'],
            },
            {
                itemsList:
                    'В результате тренировок с Ириной вы сможете приобрести подтянутое тело, укрепить ваш опорно-двигательной аппарат, исправить осанку, а так же ускорить период реабилитации и восстановления двигательных функций и проработать мышцы',
            },
            {
                itemsList:
                    'А ещё Ирина неоднократный призёр открытого чемпионата (НАП) по жиму лежа',
            },
        ],
    },
    {
        title: 'Оксана Косенок',
        text: 'Инструктор зала групповых программ',
        image: OksanaKosenok,
        list: ['Инструктор по стрейчингу'],
    },
    {
        title: 'Инга Беляева',
        text: 'Инструктор зала групповых программ',
        image: IngaBelyaeva,
        list: ['Инструктор по Стрейчингу и Растяжке'],
    },
    {
        title: 'Ирина Заворохина',
        text: 'Инструктор по адаптивному фитнесу',
        image: IrinaZavorohina,
        extList: [
            {
                itemsList: 'Персональный тренер, тренер тренажерного зала и групповых программ',
            },
            {
                label: 'Специалист по сертифицированным направлениям: ',
                itemsList: [
                    'Диетология - нутрицевтика',
                    'Аква-аэробика',
                    'Тренировки во время беременности',
                    'Восстановление после родов',
                    'Пилатес',
                    'Высокоинтенсивный интервальный тренинг: HIIT + TABATA',
                    'Стрейтчинг',
                    'Силовой тренинг',
                    'Миофасциальный релиз (МФР)',
                    'Фитнес для пожилых',
                    'Реабилитация спины',
                    'Здоровые суставы',
                ],
            },
        ],
    },
];

export const FourEmployeesForIndexPage: EmployeesRender[] = [
    {
        title: 'Маргарита Ионкина',
        text: 'Инструктор зала групповых программ',
        image: MargaritaIonkina,
    },
    {
        title: 'Павел Поленов',
        text: 'Персональный тренер тренажерного зала',
        image: PavelPolenov,
    },
    {
        title: 'Евгения Гойда',
        text: 'Инструктор групповых программ',
        image: EvgenitaGoyda,
    },
    {
        title: 'Ирина Заворохина',
        text: 'Инструктор по адаптивному фитнесу',
        image: IrinaZavorohina,
    },
];
