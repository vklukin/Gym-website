import { ToastMessage } from '../ToastMessage';
import { TTicket } from '../../../pages/private/Panel';

type TTicketValue = (ticketObject: TTicket) => boolean;

export class TicketValidation {
    static ticketValue: TTicketValue = (ticketObject) => {
        if (
            ticketObject.ticket_rate === 'Не выбрано' ||
            ticketObject.selectedIndex == 0 ||
            !ticketObject.ticket_rate
        ) {
            ToastMessage.error('Выберите поле тарифа!');
            return false;
        }

        return true;
    };
}
