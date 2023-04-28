export enum ROLES {
    USER = 'user',
    TRAINER = 'trainer',
    ADMIN = 'admin',
    MODERATOR = 'moderator',
}

export const RolesArray = [ROLES.USER, ROLES.TRAINER, ROLES.ADMIN, ROLES.MODERATOR];
export const PrivateRoles = [ROLES.TRAINER, ROLES.ADMIN, ROLES.MODERATOR];
