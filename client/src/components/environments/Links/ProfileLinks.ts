import { TLinks } from '../../../types/TLinks';

export type TPrivateLinks = TLinks & {
    subLinks?: {
        subTitle: string;
        subLink: string;
    }[];
};

const user = JSON.parse(localStorage.getItem('Auth-Session') as string);

export const ProfileLinks: TPrivateLinks[] = [
    {
        title: 'Профиль',
        link: user ? `/${user.id}/profile` : '/profile',
        subLinks: [
            {
                subTitle: 'Предстоящие тренеровки',
                subLink: user ? `/${user.id}/workouts/await` : '/profile',
            },
            {
                subTitle: 'История тренеровок',
                subLink: user ? `/${user.id}/workouts/history` : '/profile',
            },
            {
                subTitle: 'Настройки',
                subLink: user ? `/${user.id}/settings` : '/profile',
            },
        ],
    },
];
