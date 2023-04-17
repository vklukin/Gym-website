import { toast } from 'react-toastify';

type TMessage = (
    message: string,
    positionX?: 'left' | 'center' | 'right',
    positionY?: 'bottom' | 'top'
) => void;

export class ToastMessage {
    static success: TMessage = (message, positionX = 'right', positionY = 'bottom') => {
        toast.success(message, {
            position: `${positionY}-${positionX}`,
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });
    };
    static error: TMessage = (message, positionX = 'right', positionY = 'bottom') => {
        toast.error(message, {
            position: `${positionY}-${positionX}`,
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });
    };
    static info: TMessage = (message, positionX = 'right', positionY = 'bottom') => {
        toast.info(message, {
            position: `${positionY}-${positionX}`,
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'light',
        });
    };
}
