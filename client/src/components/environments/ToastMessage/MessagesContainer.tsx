import { Component } from 'react';

import { ToastContainer } from 'react-toastify';

interface IProps {
    positionY: 'bottom' | 'top';
    positionX: 'left' | 'center' | 'right';
}

export class MessagesContainer extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <ToastContainer
                position={`${this.props.positionY}-${this.props.positionX}`}
                autoClose={7000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        );
    }
}
