import { PrivatePanel } from '../../../components/simple/PrivatePanel';
import ClassNames from 'classnames/bind';
import styles from './Panel.module.css';

export function Panel() {
    const cx = ClassNames.bind(styles);

    return (
        <PrivatePanel>
            <div className={cx('hint_wrapper')}>
                <h3>Для взаимодействия с панелью, выберите один из пунктов в меню слева</h3>
            </div>
        </PrivatePanel>
    );
}
