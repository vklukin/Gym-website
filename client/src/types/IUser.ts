export interface IUser {
    user: TUserParams;
    isLoading: boolean;
    error: string | null | undefined;
}

export type TUserParams = {
    id: number | null;
    name: string;
    email: string;
    createAt: string;
    role: string;
    isAuth: boolean;
    ticket?: {
        ticket_id: number;
        ticket_rate: string;
        start_period: string;
        end_period: string;
    } | null;
};
