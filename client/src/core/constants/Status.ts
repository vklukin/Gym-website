export enum Status {
    ACTIVE = 'active',
    FREEZE = 'freeze',
    EXPIRED = 'expired',
}

export function statusInRus(status: string) {
    switch (status) {
        case Status.ACTIVE:
            return 'Активен';
        case Status.FREEZE:
            return 'Заморожен';
        case Status.EXPIRED:
            return 'Просрочен';
    }
}
