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
    },
];
export const AdminPanel: TPrivateLinks[] = [
    {
        title: 'Управление пользователями',
        link: '/panel/admin/users',
        subLinks: [
            {
                subTitle: 'Добавить пользователя',
                subLink: '/panel/admin/users/add',
            },
        ],
    },
];
export const ModeratorPanel: TPrivateLinks[] = [];
