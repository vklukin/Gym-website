export enum ROLES {
    USER = 'user',
    TRAINER = 'trainer',
    ADMIN = 'admin',
    MODERATOR = 'moderator',
}

export const PrivateRoles = [ROLES.TRAINER, ROLES.ADMIN, ROLES.MODERATOR];

export function roleInRus(role: string) {
    switch (role) {
        case ROLES.USER:
            return 'Пользователь';
        case ROLES.TRAINER:
            return 'Тренер';
        case ROLES.ADMIN:
            return 'Администратор';
        case ROLES.MODERATOR:
            return 'Модератор';
    }
}
