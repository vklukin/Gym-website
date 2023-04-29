import { TLinks } from '../../../types/TLinks';

export type TPrivateLinks = TLinks & {
    subLinks?: {
        subTitle: string;
        subLink: string;
    }[];
};

export const TrainerPanel: TPrivateLinks[] = [
    {
        title: 'Расписание тренера',
        link: '/panel/trainer/schedule',
        subLinks: [
            {
                subTitle: 'Добавить тренеровку',
                subLink: '/panel/trainer/schedule/add',
            },
        ],
    },
];
export const AdminPanel: TPrivateLinks[] = [
    {
        title: 'Управление пользователями',
        link: '/panel/admin/users',
        subLinks: [
            {
                subTitle: 'Зарегистрировать клиента',
                subLink: '/panel/admin/users/add',
            },
        ],
    },
];
export const ModeratorPanel: TPrivateLinks[] = [];
