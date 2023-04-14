export interface ScheduleListType {
    weekDay: string;
    workoutInfo: {
        workoutTime: string;
        workoutName: string;
        workoutTrainer: {
            trainerName: string;
            trainerLink: string;
        };
        isChanging?: true;
    }[];
}

export const ScheduleList: ScheduleListType[] = [
    {
        weekDay: 'Понедельник',
        workoutInfo: [
            {
                workoutTime: '18:00',
                workoutName: 'Пилатес',
                workoutTrainer: {
                    trainerName: 'Венера',
                    trainerLink: '/employees#Venera-Baltaeva',
                },
            },
            {
                workoutTime: '19:00',
                workoutName: 'Все включено + МФР',
                workoutTrainer: {
                    trainerName: 'Рита',
                    trainerLink: '/employees#Margarita-Ionkina',
                },
                isChanging: true,
            },
            {
                workoutTime: '20:00',
                workoutName: 'Zumba',
                workoutTrainer: {
                    trainerName: 'Венера',
                    trainerLink: '/employees#Venera-Baltaeva',
                },
            },
        ],
    },
    {
        weekDay: 'Вторник',
        workoutInfo: [
            {
                workoutTime: '10:30',
                workoutName: 'Стретчинг',
                workoutTrainer: {
                    trainerName: 'Оксана',
                    trainerLink: '/employees#Oksana-Kosenok',
                },
            },
            {
                workoutTime: '18:00',
                workoutName: 'Power Class',
                workoutTrainer: {
                    trainerName: 'Ирина',
                    trainerLink: '/employees#Irina-Zavorohina',
                },
            },
            {
                workoutTime: '19:00',
                workoutName: 'Стретчинг',
                workoutTrainer: {
                    trainerName: 'Инга',
                    trainerLink: '/employees#nga-Belyaeva',
                },
            },
            {
                workoutTime: '20:00',
                workoutName: 'Шпагат',
                workoutTrainer: {
                    trainerName: 'Инга',
                    trainerLink: '/employees#Inga-Belyaeva',
                },
                isChanging: true,
            },
        ],
    },
    {
        weekDay: 'Среда',
        workoutInfo: [
            {
                workoutTime: '18:00',
                workoutName: 'Здоровая спина',
                workoutTrainer: {
                    trainerName: 'Ирина',
                    trainerLink: '/employees#Irina-Zavorohina',
                },
            },
            {
                workoutTime: '19:00',
                workoutName: 'Cardio HIIT',
                workoutTrainer: {
                    trainerName: 'Венера',
                    trainerLink: '/employees#Venera-Baltaeva',
                },
            },
            {
                workoutTime: '20:00',
                workoutName: 'Zumba',
                workoutTrainer: {
                    trainerName: 'Елена',
                    trainerLink: '/employees#Elena-Drobysheva',
                },
            },
        ],
    },
    {
        weekDay: 'Четверг',
        workoutInfo: [
            {
                workoutTime: '18:00',
                workoutName: 'Стретчинг',
                workoutTrainer: {
                    trainerName: 'Инга',
                    trainerLink: '/employees#Inga-Belyaeva',
                },
            },
            {
                workoutTime: '19:00',
                workoutName: 'Все включено',
                workoutTrainer: {
                    trainerName: 'Рита',
                    trainerLink: '/employees#Margarita-Ionkina',
                },
                isChanging: true,
            },
            {
                workoutTime: '20:00',
                workoutName: 'Пилатес',
                workoutTrainer: {
                    trainerName: 'Венера',
                    trainerLink: '/employees#Venera-Baltaeva',
                },
            },
        ],
    },
    {
        weekDay: 'Пятница',
        workoutInfo: [
            {
                workoutTime: '10:30',
                workoutName: 'Стретчинг',
                workoutTrainer: {
                    trainerName: 'Оксана',
                    trainerLink: '/employees#Oksana-Kosenok',
                },
            },
            {
                workoutTime: '18:00',
                workoutName: 'Power HIIT',
                workoutTrainer: {
                    trainerName: 'Венера',
                    trainerLink: '/employees#Venera-Baltaeva',
                },
            },
            {
                workoutTime: '20:00',
                workoutName: 'ALL BODY',
                workoutTrainer: {
                    trainerName: 'Елена',
                    trainerLink: '/employees#Elena-Drobysheva',
                },
            },
        ],
    },
    {
        weekDay: 'Суббота',
        workoutInfo: [
            {
                workoutTime: '10:30',
                workoutName: 'Функциональный тренинг + МФР',
                workoutTrainer: {
                    trainerName: 'Рита',
                    trainerLink: '/employees#Margarita-Ionkina',
                },
                isChanging: true,
            },
        ],
    },
    {
        weekDay: 'Воскресенье',
        workoutInfo: [
            {
                workoutTime: '12:00',
                workoutName: 'Zumba',
                workoutTrainer: {
                    trainerName: 'Елена',
                    trainerLink: '/employees#Elena-Drobysheva',
                },
                isChanging: true,
            },
            {
                workoutTime: '19:00',
                workoutName: 'Здоровое тело + МФР',
                workoutTrainer: {
                    trainerName: 'Ирина',
                    trainerLink: '/employees#Irina-Zavorohina',
                },
            },
            {
                workoutTime: '20:00',
                workoutName: 'Функциональная тренировка',
                workoutTrainer: {
                    trainerName: 'Елена',
                    trainerLink: '/employees#Elena-Drobysheva',
                },
            },
        ],
    },
];

export interface trainingsDescriptionType {
    trainingsLabel: string;
    trainings: {
        trainingTitle: string;
        descriptionList: {
            definition: string;
            forWhom: string;
        };
    }[];
}

export const trainingsDescription: trainingsDescriptionType[] = [
    {
        trainingsLabel: 'Силовые активные',
        trainings: [
            {
                trainingTitle: 'Все включено',
                descriptionList: {
                    definition:
                        'Тренировка наполнена всем самым полезным, начиная с функциональных упражнений, которые формируют красивое тело, за счёт веса собственного и, конечно, использования различного малого оборудования!',
                    forWhom: 'Уровень подготовки - средний',
                },
            },
            {
                trainingTitle: 'Power class',
                descriptionList: {
                    definition:
                        'Силовая тренировка, направленная на проработку всех основных мышечных групп (ноги, ягодицы, спина, грудь, пресс, руки) с использованием различного оборудования на усмотрение тренера. Средняя интенсивность.',
                    forWhom: 'Для любого уровня подготовки',
                },
            },
            {
                trainingTitle: 'Lower body',
                descriptionList: {
                    definition:
                        'Силовой урок, направленный на укрепление мышц ягодиц, ног, брюшного пресса, а также развитие гибкости, подвижной и суставов, эластичность мышц и связок.',
                    forWhom: 'Для любого уровня подготовки',
                },
            },
            {
                trainingTitle: 'HIIT (интервальная)',
                descriptionList: {
                    definition:
                        'Высокоинтенсивная интервальная тренировка, подразумевающая чередование интенсивных, но непродолжительных по времени тренировочных фаз и менее нагруженных с точки зрения физической активности периодов восстановления.',
                    forWhom: 'Для любого уровня подготовки',
                },
            },
            {
                trainingTitle: 'Full Body Work',
                descriptionList: {
                    definition:
                        'Круговая тренировка высокой и средней интенсивности, во время которой выполняется серия упражнений (круг), без перерыва, с непродолжительным отдыхом между кругами.',
                    forWhom: 'Для любого уровня подготовки',
                },
            },
        ],
    },
    {
        trainingsLabel: 'Танцевально-аэробные',
        trainings: [
            {
                trainingTitle: 'Zumba',
                descriptionList: {
                    definition:
                        'Это эффективная танцевальная фитнес-программа, впитавшая в себя все самые яркие латинские и мировые ритмы. Она объединила их в одной тренировке в формате фитнес-вечеринки, где играет музыка и все веселятся, следуя за инструктором.',
                    forWhom:
                        'Простые движения в сочетании с зажигательными ритмами позволяют чувствовать себя свободно абсолютно всем, независимо от возраста и уровня подготовки',
                },
            },
            {
                trainingTitle: 'Latina',
                descriptionList: {
                    definition:
                        'Это смесь клубной вечеринки и школы традиционных латиноамериканских танцев: мумбы, ча-ча-ча, румбы, бачаты, самбы, сальсы, посодобля, а также в танец включились элементы R&B',
                    forWhom: 'Для любого уровня подготовки',
                },
            },
        ],
    },
    {
        trainingsLabel: 'Спокойные',
        trainings: [
            {
                trainingTitle: 'Пилатес',
                descriptionList: {
                    definition:
                        'Комплекс упражнений, направленный на поддержание мышечного тонуса, контроля над телом и развития координации движений. Позволяет тонизировать и удлинить мышцы, не накапливая мышечной массы. А приятный результат систематических занятий - плоский живот.',
                    forWhom: 'Для любого уровня подготовки  и всех возрастов.',
                },
            },
            {
                trainingTitle: 'Стретчинг',
                descriptionList: {
                    definition:
                        'Тренировка направлена на растяжку связок и мышц, а также на общее развитие гибкости всего тела.',
                    forWhom: 'Для любого уровня подготовки и всех возрастов',
                },
            },
            {
                trainingTitle: 'Разумное тело',
                descriptionList: {
                    definition:
                        'Тренировка представляет собой сочетание йоги, пилатеса и стретчинга.\n' +
                        'Это занятие, которое не дает стареть вашему телу, ваши суставы и позвоночник станут гибкими и подвижными, а мышцы и связки эластичными.',
                    forWhom: 'Для любого уровня подготовки и всех возрастов',
                },
            },
        ],
    },
];
