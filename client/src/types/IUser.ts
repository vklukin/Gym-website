export interface IUser {
    user: TUserParams & { isAuth?: boolean };
    isLoading: boolean;
    error: string | null | undefined;
}

export type TUserParams = {
    id: number | null;
    name: string;
    email: string;
    createAt: string;
    role: string;
    status: string;
    ticket?: {
        ticket_id: number;
        ticket_rate: string;
        start_period: string;
        end_period: string;
    } | null;
};
